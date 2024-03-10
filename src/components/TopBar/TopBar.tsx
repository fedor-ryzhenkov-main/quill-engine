import '../../styles/base/components/topbar.css'
import {ReactNode} from "react";
import colors from "../../styles/utilities/global/colors";

type Props = {
    children: ReactNode;
    className?: string;
};

export const TopBar: React.FC<Props> = ({children, className = ''}) => (
    <div className={`topbar dashed-border ${className}`} style={{backgroundColor: "black", color: "white", '--border-color': 'white', 'selection-color': colors.cyborgYellow, '--selection-background-color': 'black'} as React.CSSProperties}>
        {children}
    </div>
);