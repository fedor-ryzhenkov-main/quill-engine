import './features.css'
import pwa_feature from "../../../../assets/images/pwa_feature.png"
import dice_feature from "../../../../assets/images/dice_feature.png"
import city_map from "../../../../assets/images/map_draft.png"
import decor_polygon_1 from "../../../../assets/images/decor-polygon-1.svg"
import {Parallax} from "react-scroll-parallax";

const Features = () => {
    return (
        <div style={{display: "flex", flexDirection: 'row'}}>
                <div className='column' style={{position: 'relative', padding: '1.5rem 5rem', gap: '2rem'}}>
                    <div className='body-menlo'
                         style={{display: 'flex', flexDirection: 'row', color: "black"}}>
                        <img src={pwa_feature} alt='an image of the server code' style={{height: '13.35rem', marginRight: '2rem'}}/>
                        <div style={{lineHeight: '1.5rem', width: '35rem'}}> The core rules of
                            the
                            CY_: Augmented are presented as a PWA
                            that you can download for the offline use or open in your browser of choice. Unlike
                            regular
                            PDFs, PWA supports animations, interlinking and many advanced features available to the
                            web
                            applications. Resources required for play, a number of useful tools for running and
                            preparing games, community, future updates alongside with the full core rules of the
                            game are
                            available for free in this format. Enjoy!
                        </div>
                        <img src={decor_polygon_1} alt='outline decoration' style={{position: "absolute", left: '82%', top: '30%', width: '7rem'}}/>
                    </div>

                    <div className='body-menlo'
                         style={{display: 'flex', flexDirection: 'row', color: "black"}}>
                        <img src={dice_feature} alt='an image of the server code' style={{height: '13.35rem', marginRight: '2rem'}}/>
                        <div style={{lineHeight: '1.5rem', width: '35rem'}}>
                            CY_: Augmented is a lightweight cyberpunk game built in the framework of narrative-focused
                            systems and infused with the OSR-inspired elements. It is a fast-paced, action-focused game
                            with horror undertones that allows you to explore darkest sides of the futuristic setting of
                            the dystopian city "Inferno". It focuses on the dramatic outcomes and 'cut-to-action'
                            cinematic
                            approach. Don't expect realism here, embrace aesthetics of the setting, act daring and
                            strive to tell
                            an interesting story.
                        </div>
                        <img src={decor_polygon_1} alt='outline decoration' style={{transform: 'scaleX(-1)', position: "absolute", left: '4%', top: '82%', width: '7rem'}}/>
                    </div>
                </div>
                <img src={city_map} style={{position: 'relative', top: '-2rem', width: '33rem', height: '33rem'}}/>
            </div>
    )
}
export default Features