import React, {CSSProperties} from 'react'
import ScrambleTextTransform from "../../../components/ScrambleTextTransform/ScrambleTextTransform";
import ScrollLink from "../../../components/PageLinking/ScrollLink";
import colors from "../../../styles/utilities/global/colors";

type Props = {
    style?: CSSProperties;
    className?: string;
    id?: string
}

interface MyStyles extends React.CSSProperties {
    '--selection-color'?: string;
}

export const Tile0: React.FC<Props> = () => {
    return (
        <div className='special-selection' style={{'--selection-color': colors.cyborgYellow} as React.CSSProperties}>
            <p className='body-menlo' style={{
                margin: '0',
                fontSize: '1.1rem',
                backgroundColor: 'black',
                color: 'white',
                padding: '1rem',
                overflow: "visible"
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
    )
}

export const Tile1: React.FC<Props> = ({style}) => {
    return (
        <p className='body-jb-mono' style={{margin: '0', fontSize: '1.1rem', ...style}}>
            Think of yourself as a <strong>CONDUCTOR</strong>?
            <br/> <br/>
            <strong>Build</strong> a tense drama, curate the group, provide opportunities and opposition.
        </p>
    )
};

export const Tile3: React.FC<Props> = ({style}) => {
    return (
        <p className='body-menlo' style={{margin: '0', fontSize: '0.85rem', ...style}}>
            Welcome to the <strong>UC Block 04</strong>, 278 PC (<strong>post-crash</strong>). Please, fill out the
            working unit reg-form.
            <br/> <br/>
            <i>log: You are registered at the address: /HELLPIT/l.b./
                Hx5OA-block.</i>
            <br/> <br/>
            <strong>May the Oracle guard you.</strong></p>
    )
};

export const Tile4: React.FC<Props> = ({style}) => {
    return (
        <p className='body-menlo' style={{margin: '0', fontSize: '0.85rem', ...style}}>
            System’s <strong>brainwashing</strong> will implant you a thought that the f*cking Crash has ruined
            everything.
            <br/> <br/>
            <strong>Nah.</strong> Everything went to <strong>hell</strong> much earlier.</p>
    )
};

export const Tile5: React.FC<Props> = ({style, className}) => {
    return (
        <div className={`body-jb-mono special-selection ${className}`}
             style={{color: '#FCE64D', margin: '0', fontSize: '1.0rem', ...style}}>
            <p id={'roll0-1'} style={{margin: '0 0 0.3rem 0'}}> 1. You can <b>download</b> this app for
                the <b>offline</b> use if your
                software supports <b>PWA</b>. </p>
            <p id={'roll0-2'} style={{margin: '0.4rem 0 0.3rem 0'}}> 2. Press to <b>automatically</b> roll on
                the <b>random</b> <br/> table like this one. </p>
            <p id={'roll0-3'} style={{margin: '0 0 0.3rem 0'}}> 3. <b>Click</b> scrambled text: <br/>
                <ScrambleTextTransform> to <b>hack</b> through the censorship
                    of the Oracle. </ScrambleTextTransform></p>
            <p id={'roll0-4'} style={{margin: '0 0 0.3rem 0'}}> 4. Follow the <ScrollLink
                toId={"componentA"}>link</ScrollLink> to navigate to the connected
                component. </p>
        </div>
    )
};

export const Tile6: React.FC<Props> = ({style, className}) => {
    return (
        <div className={`body ${className}`} style={{margin: '0', fontSize: '0.85 rem', ...style}}>
            <p style={{margin: '0 0 0.3rem 0'}}><b>TTRPGS</b>: CBR+PNK, Mothership, CY_BORG, The Sprawl, Eclipse Phase,
                Shadowrun, Red Planet, SLA Industries, Neon City Overdrive.</p>
            <p style={{margin: '0 0 0.3rem 0'}}><b>Media</b>: Ghost in the Shell, Cowboy Bebop, Do Androids Dream of
                Electric Sheep?, System Shock,
                The Sprawl Trilogy, Blade Runner, Deus Ex, Psycho Pass, Alternate Carbon, Cyberpunk 2077, Ghostrunner,
                Ergo Proxy, Katana Zero, Consider Phlebas, Cyberpunk: Edgerunners, Akira, Akudama Drive.</p>
            <p style={{margin: '0 0 0.3rem 0'}}><b>Music</b>: Pertubator (New Model, Dangerous Days), Extra Terra, Pixel
                Grip (Arena), Dan Terminus (The Wrath
                of Code), Dreddd (Pain Deluxe), Terrordyne (High Tech, Low Living), Carpenter Brut (TRILOGY).</p>
        </div>
    )
};

export const Tile7: React.FC<Props> = ({style, className}) => {
    return (
        <p className={`body-jb-mono extrabold ${className}`} style={{margin: '0', fontSize: '1.1rem', ...style}}>
            <i>Discover our Inspirations!</i>
        </p>
    )
};

export const Tile8: React.FC<Props> = ({style, className}) => {
    return (
        <p className={`body-cygnito extrabold ${className}`}
           style={{margin: '0', fontSize: '1.1rem', color: '#C91F37', ...style}}>
            <i>--foreign-crimson color signals about an interactable object*</i>
        </p>
    )
};
