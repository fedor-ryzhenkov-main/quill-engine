import './styles/base/index.css'
import { withWrappers } from "./components/Wrapper";
import React from "react";
import colors from "./styles/utilities/global/colors";
import Header from "./pages/rulebook/section-0/header/header";
import Features from "./pages/rulebook/section-0/features/features";
import RulesSummary from "./pages/rulebook/section-0/rules-summary/rulesSummary";
import {Parallax} from "react-scroll-parallax";
import Cy_background from "./pages/rulebook/section-0/cy_background";

const PWA: React.FC = () => {
    return (
        <div style={{
            '--foreign-crimson': colors.foreignCrimson,
            '--cyborg-yellow': colors.cyborgYellow,
            '--sprawl-purple': colors.sprawlPurple,
            '--neon-blue': colors.neonBlue,
        } as React.CSSProperties}>
            <div style={{paddingTop: '3rem'}}>
                        <Header/>
                        <div style={{marginTop: '2rem'}}/>
                        <Parallax translateY={[18, -40]}>
                            <Cy_background>
                                <div>
                                    <Features/>
                                    <RulesSummary/>
                                </div>
                            </Cy_background>
                        </Parallax>
            </div>
        </div>
    )
}

export default withWrappers(PWA);

