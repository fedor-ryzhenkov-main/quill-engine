import './styles/base/index.css'
import { withWrappers } from "./components/Wrapper";
import React from "react";
import { color_theme, color_theme_css } from "./styles/utilities/global/theme";
import RulebookChapter from "./pages/RulebookChapter";
import useFetch from "./services/hooks/useFetch";
import axios from "axios";
import {Chapter, Chapter_Attributes} from "./types/chapter";

const PWA: React.FC = () => {
    React.useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = color_theme_css;
        document.head.append(style);
    }, []);

    const { data, loading} = useFetch(`http://${process.env.REACT_APP_LOCAL_IP}:1337/api/chapters/`)

    if (loading) return (
        <div>
            Loading!
        </div>
    )

    return (
            <div style={{paddingTop: '3rem'}}>
                {
                    data.data.map((data: undefined) => RulebookChapter((data as unknown as Chapter).attributes))
                }
            </div>
    )
}

export default withWrappers(PWA);

