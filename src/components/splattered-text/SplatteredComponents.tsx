import React, {CSSProperties, ReactNode} from 'react';
import '../../styles/base/components/splattered-text.css';

// Define the prop types for TypeScript
type Element = {
    id: number;
    top: string;
    left: string;
    width?: string;
    height?: string;
    element: ReactNode;
};

type YourComponentProps = {
    elements: Element[];
    style?: CSSProperties;
    className?: string;
    children?: ReactNode[]
};

const SplatteredComponents: React.FC<YourComponentProps> = ({elements, style, className, children}) => {
    return (
        <div className={`splattered-text ${className}`} style={{position: 'relative', ...style}}>
            {children}
            {elements.map((item) => (
                <div key={item.id} className="text"
                     style={{position: 'absolute', top: item.top, left: item.left, zIndex: item.id, width: item.width, height: item.height}}>
                     {item.element}
                </div>
            ))}
        </div>
    );
};

export default SplatteredComponents;
