import React from 'react';

// Define prop types.
interface LoadingProps {
    fadeOut: boolean;
}

const Loading: React.FC<LoadingProps> = ({ fadeOut }) => {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'black',
            transition: 'opacity 2s',
            opacity: fadeOut ? 0 : 1,
        }}/>
    );
};

export default Loading;