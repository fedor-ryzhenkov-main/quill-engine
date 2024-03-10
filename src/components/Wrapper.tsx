import React from 'react';
import { ParallaxProvider } from "react-scroll-parallax";
import { JSX } from 'react/jsx-runtime';
import NavigationProvider from "./PageLinking/NavigationProvider";

// An array to collect your context providers
const providers = [ParallaxProvider, NavigationProvider];

// This HOC takes a component as an argument and returns the component with provided contexts
export const withWrappers = (Component: React.FunctionComponent<any>) => {
    return (props: any) => providers.reduceRight((children, Provider) => {
        return <Provider>{children}</Provider>;
    }, <Component {...props} />);
};