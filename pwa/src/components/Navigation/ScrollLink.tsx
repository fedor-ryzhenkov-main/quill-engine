import React from 'react';
import {useScroll} from "./NavigationProvider";

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
        console.log(`Navigated to the element ${element}`)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'start' })
        }
    };

    return (
        <a onClick={scrollToComponent}>
            <b> {props.children} </b>
        </a>
    );
};

export default ScrollLink;