import * as React from 'react';
import {CSSProperties} from 'react';
import '../../styles/base/components/dice.css'


export const Dice: React.FC<{style?: CSSProperties}> = ({style}) => {
    const [roll, setRoll] = React.useState<number | null>(0);
    const [rolling, setRolling] = React.useState(false);

    React.useEffect(() => {
        let rollInterval: NodeJS.Timeout | undefined;

        if (rolling) {
            rollInterval = setInterval(() => {
                setRoll(Math.floor(Math.random() * 6) + 1);
            }, 100);

            setTimeout(() => {
                clearInterval(rollInterval);
                setRolling(false);
            }, 1000);
        }

        return () => {
            if (rollInterval) {
                clearInterval(rollInterval);
            }
        };
    }, [rolling]);

    const handleClick = () => {
        if (!rolling) {
            setRolling(true);
        }
    };

    return (
        <button className={`dice`} style={style} onClick={handleClick}>
            {roll === 0 ? `!` : roll}
        </button>
    );
};