import React, {ReactNode, useEffect, useState} from 'react';
import styled from 'styled-components';
import inkLine from '../assets/images/ink_line.svg'; // import your image file

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-bottom: 4px;
`;

const HeaderContent = styled.div<{ expanded: boolean, hover: boolean }>`
    height: ${({ expanded, hover}) => expanded ? "1em" : hover ? "0em" : "1em"};
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: height 0.3s ease;
    padding-left: 3.75em;
    padding-right: 3.75em;
`;

const ExpandedContent = styled.div<{ expanded: boolean, hover: boolean }>`
    height: ${({expanded, hover}) => expanded ? '70vh' : hover ? "2em" : "0em"};
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-left: 3.75em;
    padding-right: 3.75em;
    transition: height 0.3s ease;
    overflow: hidden;
`;

type HeaderProps = {
    headerChildren?: ReactNode;
    expandedChildren?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({headerChildren, expandedChildren}) => {
    const [expanded, setExpanded] = useState(false);
    const [hover, setHover] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => setIsMobile(window.matchMedia("(max-width: 767px)").matches);
        checkMobile();
        window.addEventListener('resize', checkMobile);

        // Cleanup after component unmounts
        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    const handleMouseEnter = () => {
        if(!isMobile) {
            setHover(true);
        }
    }

    const handleMouseLeave = () => {
        if(!isMobile) {
            setHover(false);
        }
    }

    return (
        <Wrapper onClick={() => setExpanded(!expanded)} onMouseEnter={() => handleMouseEnter()} onMouseLeave={() => handleMouseLeave()}>
                <ExpandedContent expanded={expanded} hover={hover}>
                    {expandedChildren}
                </ExpandedContent>

                <HeaderContent expanded={expanded} hover={hover}>
                    {headerChildren}
                </HeaderContent>

                <div style={{
                    overflow: 'hidden',
                    height: '2em',
                    width: '100%',
                    pointerEvents: 'none',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <img src={inkLine} alt="Ink Line" style={{
                        height: '100%',
                        display: 'block',
                        objectFit: 'cover',
                    }}/>
                </div>
        </Wrapper>
);
};

export default Header;