import React, {ReactNode, useEffect, useState} from 'react';
import styled from 'styled-components';
import inkLine from '../assets/images/ink_line.svg';
import menuIcon from '../assets/images/menu_icon.svg';
import menuIconMobile from '../assets/images/menu_icon_mobile.svg';
import {DesktopLayout, MobileLayout} from './LayoutUtils';

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 60;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-bottom: 4px;
`;

const HeaderContent = styled.div<{ expanded: boolean, hover: boolean }>`
    height: ${({expanded, hover}) => expanded ? "2em" : hover ? "2em" : "0em"};
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    transition: height 0.3s ease;
    padding-left: 3.75em;
    padding-right: 3.75em;
    overflow: hidden;
`;

const ExpandedContent = styled.div<{ expanded: boolean, hover: boolean }>`
    height: ${({expanded, hover}) => expanded ? '70vh' : "0em"};
    background-color: black;
    color: white;
    display: flex;
    gap: 0.5em;
    flex-direction: row;
    padding-left: 3.75em;
    padding-right: 3.75em;
    transition: height 0.3s ease;
    overflow: hidden;

    & > *:not(:last-child) {
        border-right: 2px solid white;
        padding-right: 0.5em;
    }
`;

const BufferContent = styled.div<{ expanded: boolean, hover: boolean }>`
    height: ${({expanded, hover}) => expanded ? '0em' : hover ? "0em" : "1em"};
    background-color: black;
    transition: height 0.3s ease;
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
            if (!isMobile) {
                setHover(true);
            }
        }

        const handleMouseLeave = () => {
            if (!isMobile) {
                setHover(false);
            }
        }

        return (
            <div>
                <DesktopLayout>
                    <Wrapper onClick={() => setExpanded(!expanded)} onMouseEnter={() => handleMouseEnter()}
                             onMouseLeave={() => handleMouseLeave()}>

                        <HeaderContent expanded={expanded} hover={hover}>
                        </HeaderContent>

                        <BufferContent hover={hover} expanded={expanded}/>

                        <ExpandedContent expanded={expanded} hover={hover}>
                            {expandedChildren}
                            <div>
                                {headerChildren}
                            </div>
                        </ExpandedContent>

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

                    <img src={menuIcon} alt="Menu Icon" style={{
                        position: 'fixed',
                        left: '93%',
                        top: '-2em',
                        width: '2.5em'
                    }} onClick={() => setExpanded(!expanded)} onMouseEnter={() => handleMouseEnter()}
                         onMouseLeave={() => handleMouseLeave()}/>
                </DesktopLayout>

                <MobileLayout>
                    <Wrapper onClick={() => setExpanded(!expanded)} onMouseEnter={() => handleMouseEnter()}
                             onMouseLeave={() => handleMouseLeave()}>

                        <HeaderContent expanded={expanded} hover={hover}/>

                        <BufferContent hover={hover} expanded={expanded}/>

                        <ExpandedContent expanded={expanded} hover={hover}>
                            {expandedChildren}
                            {headerChildren}
                        </ExpandedContent>

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

                    <img src={menuIconMobile} alt="Menu Icon" style={{
                        position: 'fixed',
                        top: '0.3em',
                        left: '50%',
                        width: '4em',
                        transform: 'translateX(-2em)',
                        zIndex: '70'
                    }}/>
                </MobileLayout>
            </div>
        )
            ;
    }
;

export default Header;