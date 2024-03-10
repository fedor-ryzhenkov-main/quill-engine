import colors from "../../../../styles/utilities/global/colors";
import {Dice} from "../../../../components/DiceRoller/Dice";

const RulesSummary = () => {
    return (
        <div className='dot-background'
             style={{display: "flex", flexDirection: 'row', width: '100%', backgroundColor: colors.cyborgYellow}}>
            <div className='body' style={{
                color: 'black',
                display: "grid",
                gridTemplateColumns: '1fr 1fr 1fr 1fr',
                width: '100%',
                padding: '1.5rem 5rem',
                gap: '2rem'
            }}>
                <div className='column' style={{textAlign: 'justify', gap: '0.5rem'}}>
                    <div><b>Core Mechanics</b></div>
                    <div>
                        When the runner attempts something risky, player states intent and the approach clearly.
                        Operator then assigns the action a <b>threat</b> and <b>effect</b> level. They take into
                        consideration all fictional factors, including equipment that runner states they are using,
                        special techniques and expertise, nature of the danger / obstacle and others.
                        If player commits, they roll the amount of d6 equal to the neuro edge fitting the chosen
                        approach and take the highest result:
                    </div>
                    <div>
                        <b>(6)</b> - Clean hit. Effect manifests.
                        <br/> <b>(4-5)</b> - Both threat and effect manifest.
                        <br/> <b>(1-3)</b> - Setback. Threat manifests.
                    </div>
                    <div>
                        Additionally, player may <b>focus</b> before the roll to mark a glitch x2 to get either +1d or
                        +effect.
                        <br/> If the threat manifests, they may decide to <b>resist</b> after the test and mark a glitch
                        equal to the original threat to reduce it by 1/2 levels.
                    </div>
                    <div>
                        If the operator decides that the threat manifests as harm, player marks the corresponding level
                        on their character sheet and applies its penalty on all subsequent rolls.
                    </div>
                    <div>
                        When runner marks the glitch track and goes above the limit, they enter '<b>burn</b>' - in that
                        condition they may <b>focus</b> for free. On the first subsequent <b>break</b>, they clear the
                        condition, take a <b>scar</b> (describe how has runner changed and move a mark from one edge to
                        another)
                        and clear 5 glitch marks.
                    </div>
                    <div>
                        Runners also can declare flashbacks - they mark a glitch
                        x1-3 to break the temporal consistency and declare something they have done in the past that
                        would be of help now. The price depends on how complex the flashback is.
                    </div>
                </div>

                <div className='column'>
                    <Dice/>
                </div>

                <div className='column'>
                    Hi!
                </div>

                <div className='column'>
                    Hi!
                </div>
            </div>
        </div>
    )
}

export default RulesSummary