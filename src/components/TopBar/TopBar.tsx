import '../../styles/base/components/topbar.css'
import {ReactNode} from "react";
import {color_theme} from "../../styles/utilities/global/theme";

type Props = {
    children: ReactNode;
    className?: string;
};

export const TopBar: React.FC<Props> = ({children, className = ''}) => (
    <div className={`topbar dashed-border ${className}`} style={{backgroundColor: "black", color: "white", '--border-color': 'white', 'selection-color': color_theme.cyborgYellow, '--selection-background-color': 'black'} as React.CSSProperties}>
        {children}
    </div>
);