import React from 'react';
import {useScroll} from "./NavigationProvider";
import {color_theme} from "../../styles/utilities/global/theme";

type ScrollLinkProps = {
    toId: string;
    children?: React.ReactNode
}


const ScrollLink = (props: ScrollLinkProps) => {

    const { linkFollowed } = useScroll();
    const saveScrollPosition = () => {
        linkFollowed()
    };

    // Function to scroll to the target component
    const scrollToComponent = () => {
        saveScrollPosition();
        const element = document.getElementById(props.toId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })
        }
    };

    return (
        <a style={{backgroundColor: color_theme.foreignCrimson, color: "white"}} onClick={scrollToComponent}>
            <b> {props.children} </b>
        </a>
    );
};

export default ScrollLink;