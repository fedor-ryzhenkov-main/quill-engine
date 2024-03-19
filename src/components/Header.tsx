import React, { ReactNode, useState } from 'react';
import styled from 'styled-components';
import inkLine from '../assets/images/ink_line.png';  // import your image file

const Wrapper = styled.div<{ expanded: boolean }>`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    transition: height 0.3s ease;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`;

const HeaderContent = styled.div`
    height: 2vh;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 60px;
    padding-right: 60px;

`;

const ExpandedContent = styled.div<{ expanded: boolean }>`
    height: ${({expanded}) => expanded ? '70vh' : '0'};
    background-color: black;
    color: white;
    display: flex;
    transition: height 0.3s ease;
    flex-direction: column;
    justify-content: flex-end;
    padding-left: 60px;
    padding-right: 60px;
`;

type HeaderProps = {
    headerChildren?: ReactNode;
    expandedChildren?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({headerChildren, expandedChildren}) => {
    const [expanded, setExpanded] = useState(false);

    return (
        <Wrapper expanded={expanded}>
            <div onClick={() => setExpanded(!expanded)}>
                <ExpandedContent expanded={expanded}>
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