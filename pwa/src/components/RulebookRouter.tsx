import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

// Styled component
const ButtonRow = styled.div`
    display: flex;
    justify-content: center;
`;

const RoutingButton = styled(Link)`
    background-color: #4CAF50; /* Green */
    border: none;
    color: white;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    margin: 4px 2px;
    cursor: pointer;
`;

const RulebookRouter = () => {
    const stopPropagation = (event: React.MouseEvent) => {
        event.stopPropagation();
    };

    return (
    <ButtonRow>
        <RoutingButton to="/pwa/quill_engine_core" onClick={stopPropagation}> Quill Engine Core </RoutingButton>
        <RoutingButton to="/pwa/ill_omen" onClick={stopPropagation}> Ill Omen </RoutingButton>
        <RoutingButton to="/pwa/myths_of_the_outlands" onClick={stopPropagation}> Myths of the Outlands </RoutingButton>
    </ButtonRow>
    )
};

export default RulebookRouter;