import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import inkLine from '../assets/images/ink_line.png';  // import your image file

const Wrapper = styled.div<{ expanded: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const HeaderContent = styled.div`
    height: 1em;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 60px;
    padding-right: 60px;
`;

const ExpandedContent = styled.div<{ expanded: boolean, hover: boolean }>`
    height: ${({expanded, hover}) => expanded ? '70vh' : hover ? "1em" : "0em"};
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-left: 60px;
    padding-right: 60px;
    transition: height 0.3s ease;
`;

type HeaderProps = {
    headerChildren?: ReactNode;
    expandedChildren?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({headerChildren, expandedChildren}) => {
    const [expanded, setExpanded] = useState(false);
    const [hover, setHover] = useState(false);

    return (
        <Wrapper expanded={expanded} style={{zIndex: '99'}}>
            <div onClick={() => setExpanded(!expanded)}>

                <div
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    style={{position: "absolute", height: expanded ? "0em" : "4em", width: "100%"}}
                />

                <ExpandedContent expanded={expanded} hover={hover}>
                    {expandedChildren}
                </ExpandedContent>

                <HeaderContent>
                    {headerChildren}
                </HeaderContent>

                <img src={inkLine} alt="Ink Line" style={{
                    width: '100%',
                    height: 'auto',
                    objectFit: 'cover',
                }}/>
            </div>
        </Wrapper>
    );
};

export default Header;