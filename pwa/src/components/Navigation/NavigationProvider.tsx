import {createContext, ReactNode, useContext, useEffect, useRef} from 'react';

type NavigationProviderProps = {
    children?: ReactNode;
};

const ScrollContext = createContext({
    linkFollowed: () => {},
});

export const useScroll = () => useContext(ScrollContext);

const NavigationProvider: React.FC<NavigationProviderProps> = (props) => {
    const scrollableElementsRef = useRef<Element[]>([]);

    useEffect(() => {
        // Find all scrollable elements in the DOM
        scrollableElementsRef.current = Array.from(document.querySelectorAll('html'))

        const initStack: string[] = [];
        sessionStorage.setItem('backStack', JSON.stringify(initStack))
        sessionStorage.setItem('forwardStack', JSON.stringify(initStack))
    }, []);

    const linkFollowed = () => {
        captureScrollPositions()
        const forwardStack: string[] = [];
        sessionStorage.setItem('forwardStack', JSON.stringify(forwardStack));
    };

    const captureScrollPositions = (inForwardStack: boolean = false) => {
        const currentScrollTops = scrollableElementsRef.current.map(el => el.scrollTop);
        const storedScrollTops = JSON.parse(sessionStorage.getItem(inForwardStack ? 'forwardStack' : 'backStack')!!) || [];
        sessionStorage.setItem(inForwardStack ? 'forwardStack' : 'backStack', JSON.stringify([...storedScrollTops, currentScrollTops]));
    };

    const restoreScrollPositions = (fromForwardStack: boolean = false) => {
        const item = JSON.parse(sessionStorage.getItem(fromForwardStack ? 'forwardStack' : 'backStack')!!) || [];
        const scrollState = item.pop();
        sessionStorage.setItem(fromForwardStack ? 'forwardStack' : 'backStack', JSON.stringify(item));

        if (scrollState) {
            console.log("started scroll for each scrollableElementsRef")
            scrollableElementsRef.current.forEach((el, index) => {
                el.scrollTop = scrollState[index] || 0;
            });
        }
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.altKey) {
                if (event.key === 'ArrowLeft') {
                    console.log("tried to navigate back")
                    if (JSON.parse(sessionStorage.getItem('backStack')!!).length != 0) {
                        captureScrollPositions(true)
                        restoreScrollPositions()

                        console.log("-----")
                        console.log(sessionStorage.getItem('backStack'))
                        console.log(sessionStorage.getItem('forwardStack'))
                    }
                }

                if (event.key === 'ArrowRight') {
                    console.log("tried to navigate forward")
                    if (JSON.parse(sessionStorage.getItem('forwardStack')!!).length != 0) {
                        captureScrollPositions()
                        restoreScrollPositions(true)

                        console.log("-----")
                        console.log(sessionStorage.getItem('backStack'))
                        console.log(sessionStorage.getItem('forwardStack'))
                    }
                }
            }
        };

        // Add event listener
        window.addEventListener('keydown', handleKeyDown);

        // Clean up
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    return (
        <ScrollContext.Provider value={{linkFollowed}}>
            {props.children}
        </ScrollContext.Provider>
    );
};

export default NavigationProvider;
