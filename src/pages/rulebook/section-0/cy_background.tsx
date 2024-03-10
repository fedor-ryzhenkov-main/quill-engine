import border from "../../../assets/images/features_border.png";
import colors from "../../../styles/utilities/global/colors";
import React, {CSSProperties, ReactNode} from "react";

type Props = {
    children?: React.ReactNode
    className?: string;
    style?: CSSProperties
}

const Cy_background:React.FC<Props> = (props) => {
    return (
        <div>
            <img src={border} alt='border image for the features block' style={{
                position: 'relative',
                zIndex: '-1',
                top: '8px',
                left: '-2px',
                width: '98%',
                marginRight: '1rem'
            }}/>
            <div className='dot-background' style={{
                display: "flex",
                flexDirection: 'row',
                width: '100%',
                backgroundColor: colors.cyborgYellow
            }}> {props.children} </div>
        </div>
    )
}

export default Cy_background