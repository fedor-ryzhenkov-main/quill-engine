import '../../styles/base/components/responsive-flex.scss'
import React, {CSSProperties, ReactNode} from "react";

type Props = {
    children?: ReactNode[]
    className?: string;
    style?: CSSProperties
};

export const ResponsiveFlex: React.FC<Props> = ({children, className = '', style}) => (
    <div className={`responsive-flex ${className}`} style={{...style}}>
        {children}
    </div>
);