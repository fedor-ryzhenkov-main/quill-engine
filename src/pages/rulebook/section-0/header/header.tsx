import TypeIt from "typeit-react";
import './header.css'
import {useEffect, useState} from "react";
import '../../../../styles/base/index.css'
import ScrollLink from "../../../../components/PageLinking/ScrollLink";

const Header = () => {
    const [isFlexed, setIsFlexed] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsFlexed(true);
        }, 4000); // Set the flex change to happen after 6 seconds

        // Clear timeout if the component unmounts
        return () => clearTimeout(timer);
    }, []);
    return (
        <div className={`container ${isFlexed ? 'hovered' : ''} title`} style={{gap: '3rem'}}>
            <div className='content'>
                <div className='column'>
                    <TypeIt
                        getBeforeInit={(instance) => {
                            instance
                                .type("CY_")
                                .pause(1000) // Pause for 1 second
                                .type(": Augmented");
                            // Remember to return your instance!
                            return instance;
                        }}
                    />
                    <div className='body-jb-mono'>
                        OSR / FitD / PbtA TTRPG. made by fedor @luoencz ryzhenkov.
                    </div>
                </div>
            </div>
            <div className={`dummy ${isFlexed ? 'hovered' : ''}`} style={{display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', whiteSpace: 'nowrap'}}>
                <div className='subtitle-futura' style={{color: "black", display: 'flex', gap: '2rem', position: 'absolute'}}>
                    <div className='cut-corners-box element' style={{padding: '1rem'}}> <ScrollLink toId={''}>Rules</ScrollLink> </div>
                    <div className='cut-corners-box element' style={{padding: '1rem'}}> <ScrollLink toId={''}>Community</ScrollLink> </div>
                    <div className='cut-corners-box element' style={{padding: '1rem'}}> <ScrollLink toId={''}>Resources</ScrollLink> </div>
                    <div className='cut-corners-box element' style={{padding: '1rem'}}> <ScrollLink toId={''}>Contact Us</ScrollLink> </div>
                </div>
            </div>
        </div>
    )
}

export default Header