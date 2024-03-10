import '../../../services/typings.d.ts'

import '../../../styles/base/index.css'
import '../../../styles/utilities/borders.css'

import React, {useEffect, useRef, useState} from 'react'

import title_img from '../../../assets/images/gametitle.png'
import oracle_eyes from '../../../assets/images/oracle_eyes.png'
import red_indication_arrow from '../../../assets/images/red_indication_arrow.png'

import {Tile0, Tile1, Tile3, Tile4, Tile5, Tile6, Tile7, Tile8} from './splatteredElements'

import {ResponsiveFlex} from "../../../components/ResponsiveFlex/ResponsiveFlex";
import {Dice} from "../../../components/DiceRoller/Dice";
import colors from "../../../styles/utilities/global/colors";

type Props = {
    id?: string;
}

function Adv(columnHeight: number) {

    const elements = [
        {id: 2, element: Tile0({}), top: '0%', left: '0%', width: '25%'},
        {id: 5, element: Tile1({}), top: '29%', left: '22%', width: '28%'},
        {id: 6, element: Tile3({}), top: '33%', left: '1%', width: '20.5%'},
        {id: 7, element: Tile4({}), top: '0.6%', left: '30.3%', width: '20%'},
        {id: 8, element: Tile5({}), top: '2%', left: '54%', width: '43%'},
        {id: 9, element: Tile6({}), top: '70%', left: '2.1%', width: '96%'},
        {id: 10, element: Tile7({}), top: '63.5%', left: '53%', width: '46%'},
        {id: 11, element: Dice({style: {backgroundColor: "black", color: '#FCE64D'}}), top: '15.4%', left: '86%'},
        {id: 12, element: <img src={oracle_eyes} style={{width: '100%'}}/>, top: '62%', left: '17%', width: '36%'},
        {
            id: 13,
            element: <img src={red_indication_arrow} style={{width: '100%'}}/>,
            top: '38.5%',
            left: '51%',
            width: '26%'
        },
        {id: 14, element: Tile8({}), top: '47%', left: '58%', width: '42%'},
    ];

    return (
        <div style={{position: "relative", height: columnHeight, width: columnHeight * 0.86}}>
            <div style={{position: "absolute", width: '25%', height: '30%', overflow: "hidden"}}>
                <div className='special-selection' style={{'--selection-color': colors.cyborgYellow} as React.CSSProperties}>
                    <p className='body-menlo' style={{
                        margin: '0',
                        fontSize: '1.1rem',
                        backgroundColor: 'black',
                        color: 'white',
                        padding: '0.5rem',
                    }}>
                        YOU ARE the RUNNER =&gt;
                        <br/> <br/>
                        <strong> Fight</strong> or <strong> serve</strong> the corporations.
                        <strong> Raid</strong> sealed vaults.
                        <strong> Hunt</strong> your targets.
                        <strong> Seek</strong> wealth, pleasure or salvation.
                        The CRISIS is inevitable.
                    </p>
                </div>
            </div>

            <div style={{position: "absolute", backgroundColor: colors.cyborgYellow, left: '20%', top: '29%', width: '28%', height: '38%', overflow: "hidden"}}>
                <p className='body-jb-mono' style={{margin: '0', fontSize: '1.1rem', padding: '0.3rem 0.5rem', }}>
                    Think of yourself as a <strong>CONDUCTOR</strong>?
                    <br/> <br/>
                    <strong>Build</strong> a tense drama, curate the group, provide opportunities and opposition.
                </p>
            </div>
        </div>
    )
}

const HeaderMain: React.FC<Props> = ({id}) => {
    const ref = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);

    const updateHeight = () => {
        if (ref.current) {
            setHeight(ref.current.offsetHeight)
        }
    };

    useEffect(() => {
        const handleLoad = () => {
            updateHeight();
            window.addEventListener('resize', updateHeight);
        };

        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
            window.removeEventListener('resize', updateHeight);
        };
    }, []);

    return (
        <div className={'column'} id={id} style={{rowGap: '0.75rem', marginTop: '4rem', width: 'fit-content', height: 'min-content'}}>

        </div>
    )
}

const Title = () => (
    <div className='subtitle centered column' style={{rowGap: '0.3rem'}}>
        <img src={title_img} alt="Cyber Hazard" style={{width: '32rem'}}/>
        <div style={{textAlign: 'center'}}>
            Cyberpunk, Darksynth, TTRPG <br/>
            Inspired by the FitD, OSR & PbtA
        </div>
    </div>
)

const Article = () => (
    <div className='column' style={{
        border: '0.2rem black solid',
        width: '34rem',
        rowGap: '0.2rem',
        padding: '0.3rem',
        marginTop: '0.2rem',
        boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)'
    }}>
        <div className='subtitle-futura'>Elevator pitch or “Why Should I Play It?”:</div>
        <div className='body' style={{fontStyle: 'italic'}}>Game written by Fedor @luoencz Ryzhenkov:</div>
        <ul className='body' style={{paddingRight: '0.6rem'}}>
            <li><b>Cool as F*ck and Fast</b>: Cinematic fiction as if in an action-packed blockbuster or your favourite
                anime
                title. Focus on quick resolution, light rules and dramatic outcomes - every dice roll enhances conflict
                and raises the narrative stakes. Exaggerated cyberpunk setting of the darksynth post-apocalypse
                megapolis contributes a twisted scenery for the run. Change the Block 04 forever - or at least earn a
                headline in tonight's news if it slips through Oracle's censor.
            </li>
            <li><b>Innovative-yet-Familiar</b>: Cyber Hazard combines progressive techniques of the new-school of
                narrative-focused games with time proven mechanics and design paradigms of OSR ttrpgs to create a weird,
                yet badass mix. The core rules are published as a PWA - much more fun & functional than pdfs,
                accessible and available both as a website and downloadable for offline.
            </li>
            <li><b>Screw Capitalism</b>: For the game in genre that is defined by the horror of the
                unregulated
                corporate expansion, it would be f*cking hilarious if it was locked behind pay-wall. Frankly, we are not
                willing
                to be THAT meta. So, you may access all of the core contents for free. Enjoy! And consider buying deluxe
                expansions so that authors have something to eat until the time to change the world order comes.
            </li>
            <li><b>User-Contribution</b>: Hear me out - the sheer amount of you guys against our small team gonna mean
                that you
                can do x10 amount of awesome content. Visit "Open Repository" to check out user-created content or
                submit your own to be added as an expansion!
            </li>
        </ul>
    </div>
)

export default HeaderMain;