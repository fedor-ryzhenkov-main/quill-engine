import React, {useEffect, useState, ReactNode, ReactElement, CSSProperties} from 'react';

type Props = {
    children: ReactNode;
    className?: string;
    style?: CSSProperties
};

const GlitchTextTransform: React.FC<Props> = ({ children, className, style }) => {
    const [transformedChildren, setTransformedChildren] = useState<ReactNode>(children);

    const transformations = [
        // The function for making a text italic
        (word: string) => <i>{word}</i>,
        // The function for making a text bold
        (word: string) => <strong>{word}</strong>,
        // The function for rotating a text slightly +5 or -5 degrees
        (word: string) => {
            const randomRotation = Math.random() > 0.5 ? 5 : -5;
            return <span style={{ transform: `rotate(${randomRotation}deg)`, display: 'inline-block' }}>{word}</span>
        }
    ];

    const createTransformedElement = (text: string) => {
        let words: ReactNode[] = text.split(' ');
        const randomIndex = Math.floor(Math.random() * words.length);

        words[randomIndex] = transformations[Math.floor(Math.random() * transformations.length)](words[randomIndex] as string);
        return words.map((word, index) => <React.Fragment key={index}>{word}{' '}</React.Fragment>);
    };

    const transformElement = (node: ReactNode): ReactNode => {
        if (typeof node === 'string') {
            return createTransformedElement(node);
        } else if (React.isValidElement(node)) {
            return React.cloneElement(node, {}, React.Children.map(node.props.children, transformElement));
        } else {
            return node;
        }
    };

    useEffect(() => {
        const interval = setInterval(() => {
            const newChildren = React.Children.map(children, transformElement);
            // @ts-ignore
            setTransformedChildren(newChildren);
        }, 2000 + Math.random() * 2000);

        return () => clearInterval(interval);
    }, [children]);

    return <div className={`${className}`} style={{display: 'inline-block', width: 'auto', height: 'auto', ...style}}>{transformedChildren}</div>;
};

export default GlitchTextTransform;