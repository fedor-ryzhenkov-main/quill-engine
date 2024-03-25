import React, { useRef, useState } from 'react';

type CursorAnimationProviderProps = {
    children?: React.ReactNode;
};

const CursorAnimationProvider: React.FC<CursorAnimationProviderProps> = ({ children }) => {
    const [lidSize, setLidSize] = useState(1);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const updateCursor = () => {
        const svg = `
            <svg width="23" height="23" viewBox="0 0 68 68" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path id="cursor" d="M66.0001 33L1.50006 1.5L33.0001 66L44.0001 44L66.0001 33Z" fill="black" stroke="black"/>
                <path id="eye" d="M22.237 21.0345L22.92 20.9103C33.4512 18.9956 42.4813 28.526 40.0021 38.9387C39.8767 39.4654 39.4654 39.8767 38.9387 40.0021C28.526 42.4813 18.9956 33.4511 20.9103 22.9199L21.0345 22.237C21.1458 21.6249 21.6249 21.1458 22.237 21.0345Z" fill="white" stroke="black" stroke-width="1.15"/>
                <path id="pupil" d="M36.0995 25.4529L34.5578 29.3073C33.5998 31.7022 31.7022 33.5998 29.3073 34.5578L25.4529 36.0995C25.106 36.2383 24.7617 35.894 24.9005 35.5471L26.4422 31.6927C27.4002 29.2978 29.2978 27.4002 31.6927 26.4422L35.5471 24.9005C35.894 24.7617 36.2383 25.106 36.0995 25.4529Z" fill="black" stroke="black" stroke-width="1.15"/>
                <rect id="toplid" class="top-lid" fill="black" x = "13" y = "32" width="${lidSize}" height="16" transform="rotate(45 40 40)"/>
                <rect id="bottomlid" class="bottom-lid" fill="black" x = "32" y = "40" width="16" height="${lidSize}" transform="rotate(135 40 40)"/>
            </svg>
        `;
        const encodedSVG = window.btoa(svg);
        const body = document.getElementsByTagName('body')[0];
        body.style.cursor = `url('data:image/svg+xml;base64,${encodedSVG}'), auto`;
    };

    const blink = () => {
        if (intervalRef.current != null) clearInterval(intervalRef.current);  // stop an in-progress animation
        setLidSize(14);
        intervalRef.current = setInterval(() => {
            setLidSize(prevSize => prevSize > 1 ? prevSize - 1.3 : 1);  // 1.3 rate with 36ms interval, will run about 1 second
        }, 36);
    }

    React.useEffect(() => updateCursor(), [lidSize]);

    React.useEffect(() => {
        const handleMouseDown = () => blink();
        window.addEventListener('mousedown', handleMouseDown);
        return () => {
            window.removeEventListener('mousedown', handleMouseDown);
        }
    }, []);

    return <div>{children}</div>;
};

export default CursorAnimationProvider;