import {ResponsiveFlex} from "../../../components/ResponsiveFlex/ResponsiveFlex";

import '../../../services/typings.d.ts'
import colors from "../../../styles/utilities/global/colors";
import React from "react";


const Curcio = () => {
    return <div className="body" style={{width: "46.5rem", textAlign: "justify"}}>
        <p>
            <span className="body-cygnito">/* 23:55, 'Suburbans of the Maze' */</span> <br/> In the dark interior of the
            capsule apartment, Arachnid lays, jacked into their cyberthrone. Their eyes closed, pupils shifting
            erratically under the chromatic lids. A graph, a matrix of myriads of connections in the network expands
            before their eyes, illusory hands clutching the stolen access codes in hand. They went as far as they can.
            It is time to start playing for real. They drop the neurblocks - and their consciousness
            shatters to thousands hallucinating pieces, haunted by illusions and nightmares under the onslaught of the
            entire network collective. And yet, a weird smile creeps onto their face. The thrill of the combat, the
            cascade of injections ruining the hackers brain to just give an edge in that battle - an addiction turned
            into obsession. Packs of subroutines chew the the defensive protocols and barriers, clouds of viruses
            slip through the cracks and gaps of backdoors. They dive deeper, in search of the valuable intel. <br/>
            <div style={{display: "inline-block", padding: "0.2rem 0.5rem"}}>
                They haven't noticed a larger web they got caught in. They haven't spotted tiny clues and
                unregularities. Oblivious, with each move, they have entangled more, attracting hunters that lurk in the
                lightless abyss of the network. They will never wake up. And yet, they won't die. Fate much worse awaits
                those who dare to stand against the hidden.
            </div>
        </p>
        <p>
            <span className="body-cygnito"> /* 23:51, 'Map 0214: Unknown Horizons' */</span> <br/> Player was a lone figure, traversing
            the virtual terrain of the bizarre alien world. The jungles surrounded them, teeming with the unseen
            dangers. Trusted rifle in hand, sidearm at the hip in the magnetic holster, dozens of icons of various
            effects and special upgrades overflowing the HUD. 'Ascent' was a very special virt subspace. A prestigious,
            barely legal show, a fight pit for the scum, collecting record-breaking views. A fatal doze of the
            neurotoxins was the price for the elimination, honoring the chilling nickname of the gate capsules -
            'coffins'.
            That only drew more money, more viewers, more bets. All to feed the media conglomerate 'SKY Vision' that
            hosted the bi-weekly death-matches. The only surviver gets the hunted after prize - absolution from their
            debts, covered by the margin of the
            collected profits. And the Player here had this one goal. The commentators cheered each their shot, each
            their stab and tactical decision. Somewhere in the backrooms, the undertakers have been cleaning capsules,
            disposing bodies and refuelling the neurotoxin. Far away, in the depths of the HELLPIT, a freshly registered
            citizen has sent the application form. The machine kept grinding.
        </p>
        <p>
            <span className="body-cygnito"> /* 23:59, 'DrakeDock' */</span> <br/> A rare exemplar of the fabricant with
            enough resilience to survive the full virt and exel in the 'Ascent' at mere 17 years old, recently
            inducted
            into the 'Crimson Sabertooths', was a valuable investment, bought for a great sum of credits from the
            corporation that owned their neuro. Now, new owners wanted to see them prove their worth in the real game.
            Encased in the 'coffin', a term that chillingly described the virtual reality capsule, they were a lone
            figure
            in the bizarre, alien terrain of the deathmatch map. Timer counted down the remaining minutes of the game.
            It was the final round: eight contenders, but just one victor. The price of defeat? A fatal neurotoxin
            injection, instant and merciless, living up to the capsule's ominous name. No backups, no clones — rules
            that upheld the match's ruthless prestige.

            In the capsule that Agent occupied, 7 players have already died - a small body count, relatively. Oblivious
            to that, they held
            their sniper rifle with practiced ease, cherishing recent tier4 upgrade, donated to them by the viewer
            for completing a humiliating challenge, a rare scope that allowed a concentrated slow-down of time
            while taking aim — a valuable edge. The dense jungle was no place for long-range combat, yet they had a
            strategy: feigning shots to trigger slow-motion, enabling them to sidestep even a point-blank shotgun blast.
            The rules required two hands to fire, but not to aim, a loophole they exploited skillfully. As they
            advanced,
            the perspective shifted, camera moving to POV of an another contender. Viewers watched eagerly, anticipating
            a kill.
            The number of players dropped to five. Unseen, the system prepared to cleanse the coffin and replenish the
            neurotoxin.
        </p>
        <p>
            <span className="body-cygnito"> /* Few Days Ago, 13:17 'Lair' */</span> <br/>
            Submerged into the ice bath, connected by the spiderweb of wires to the restoration bank, Curcio lies
            unconscious. Venera lovingly strokes her hair, her armor plating removed and resting on the floor. 'I
            have a bad feeling about this, Kaito'. He retracts, ripper tools in hands, throwing a burned-out
            transistor into the bin - 'She is the most capable Arachnid I have ever seen, Venera, and that tells
            something. She will make it, that I can guarantee. And if anything, we will be near. Haven't you just i
            nstalled new drives onto your "Scorp"? If anything, we will be faster than the wind'. Venera looks at
            the "Blackout". Something is wrong, but she decides to be silent. Just a paranoia, probably.
        </p>
    </div>;
}

const RipItApart = () => {
    return (
        <div className='column dashed-border' style={{
            '--border-color': colors.cyborgYellow,
            boxSizing: 'border-box',
            width: '26.1rem',
            height: '21rem',
            rowGap: '0.2rem',
            padding: '0.3rem',
            marginTop: '1.1rem',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
            backgroundColor: "black"
        } as React.CSSProperties}>
            <div className='title-hacked cyborg-yellow-neon'
                 style={{textAlign: 'center', fontSize: '4.5rem', color: '#FCE64D'}}>Rip
                It Apart
            </div>
            <div className="black-background body-jb-mono"
                 style={{backgroundColor: 'transparent', color: 'white', margin: '0rem 1rem'}}>
                <p style={{margin: '0'}}>
                    Tear, destroy, bend, add, change - nothing in this PWA is a final world. The game
                    doesn't exist without you playing, and you are equally creators of it. However, we advise to master
                    the system as-it-is before changing core aspects of it, or at least consult experienced players and
                    moderators and research if there is an in-system solution.
                </p>
            </div>
        </div>
    )
}

const SafetyTools = () => {
    return (
        <div className='column dashed-border' style={{
            '--border-color': colors.cyborgYellow,
            boxSizing: 'border-box',
            width: '26.1rem',
            height: '22rem',
            rowGap: '0.2rem',
            padding: '0.3rem',
            marginTop: '1.4rem',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
            backgroundColor: "black"
        } as React.CSSProperties}>
            <div className='title-hacked cyborg-yellow-neon'
                 style={{textAlign: 'center', fontSize: '4.5rem', color: '#FCE64D'}}>Safety Tools
            </div>
            <div className="black-background body-jb-mono"
                 style={{backgroundColor: 'transparent', color: 'white', margin: '0rem 1rem'}}>
                <p style={{margin: '0'}}>
                    Cyberpunk genre tends to touch topics that might require trigger-warnings or other safety measures.
                    We <span className='glitch'> STRONGLY </span> recommend you to use tools like "Lines and Veils" or
                    "X-Cards". Be respectful to others and avoid discrimination. While the setting might prompt you to
                    explore burning issues of the modern society, do so with caution and an explicit and revocable
                    consent from all members of the game.
                </p>
            </div>
        </div>
    )
}

const WorkInProgress = () => {
    return (
        <div className='column yellow-background' style={{
            boxSizing: 'border-box',
            width: '26.1rem',
            height: '46rem',
            rowGap: '0.2rem',
            padding: '0.3rem',
            marginTop: '1.4rem',
        }}>
            <div className='title'
                 style={{textAlign: 'center', fontSize: '4.5rem'}}>Work In Progress
            </div>
            <div className="body-jb-mono"
                 style={{margin: '0rem 1rem'}}>
                <p style={{margin: '0'}}>
                    PWA format allows us to publish the system in its WIP state so that you can access the contents
                    ASAP. That, however, means, that as long as this block is here, we leave behind us the right to
                    change anything and everything. If, for some reason, you need an older version of the app, send us
                    an email. Thanks for the understanding! <br/> <br/> You can contact us via our social medias if you
                    have any feedback, questions, offers or suggestions. Also, join our growing community in Discord and
                    other social medias to learn and master the game, follow fan art and other cool stuff.
                </p>
            </div>
        </div>
    )
}

const ShortcutsTutorial = () => {
    return (
        <div className='dashed-inner-border' style={{
            boxSizing: 'border-box',
            width: '74.1rem',
            rowGap: '0.2rem',
            padding: '1rem',
            marginTop: '1.4rem',
            backgroundColor: "black"
        }} id={'componentA'}>
            <div className="body-jb-mono black-background" style={{margin: '0rem 0.3rem'}}><p
                style={{margin: '0rem 1rem'}}></p>
                Some <b>shortcuts</b>: After following a link, press <code>Alt + LeftArrow</code> to go back.
                Press <code>Alt + RightArrow</code> to go forward and back to the place you have navigated to.
                Input <code>Alt + UpArrow</code> to travel to the Side B of the PWA (or back to side A), where you will
                find design asides, additional considerations, useful tips and suggestions for expanding on the
                mechanics.
                Input <code>Alt + DownArrow</code> to quickly open the TOC and navigate to the desired chapter.
            </div>
        </div>
    )
}

const IntroLoreDumpBlock = () => {
    return (
        <div className={'column'}
             style={{rowGap: '0.75rem', marginTop: '4rem', width: 'fit-content', margin: '0rem 2rem'}}>
            <ShortcutsTutorial/>
            <ResponsiveFlex style={{gap: '1.5rem'}}>
                <Curcio/>
                <div className='column'>
                    <RipItApart/>
                    <SafetyTools/>
                    <WorkInProgress/>
                </div>
            </ResponsiveFlex>
        </div>
    )
}

export default IntroLoreDumpBlock