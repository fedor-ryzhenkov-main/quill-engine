import React from 'react';
import NavigationProvider from "./Navigation/NavigationProvider";
import CursorAnimationProvider from "./Cursor/CursorAnimationProvider";

// An array to collect your context providers
const providers = [NavigationProvider, CursorAnimationProvider];

// This HOC takes a component as an argument and returns the component with provided contexts
export const withWrappers = (Component: React.FunctionComponent<any>) => {
    return (props: any) => providers.reduceRight((children, Provider) => {
        return <Provider>{children}</Provider>;
    }, <Component {...props} />);
};