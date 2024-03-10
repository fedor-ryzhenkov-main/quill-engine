import React from 'react';
import {useScroll} from "./NavigationProvider";
import colors from "../../styles/utilities/global/colors";

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
        <a style={{backgroundColor: colors.foreignCrimson, color: "white"}} onClick={scrollToComponent}>
            <b> {props.children} </b>
        </a>
    );
};

export default ScrollLink;