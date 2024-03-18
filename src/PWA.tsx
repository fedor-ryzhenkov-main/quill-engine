import './styles/base/index.css'
import { withWrappers } from "./components/Wrapper";
import React from "react";
import { color_theme_css } from "./styles/utilities/global/theme";
import RulebookChapter from "./pages/RulebookChapter";
import useFetch from "./services/hooks/useFetch";
import {Chapter} from "./types/chapter";
import RulebookPart from "./pages/RulebookPart";
import {Part} from "./types/part";

const PWA: React.FC = () => {
    React.useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = color_theme_css;
        document.head.append(style);
    }, []);

    const { data, loading} = useFetch(`http://localhost:1337/api/parts?populate[0]=chapter_collection&populate[1]=chapter_collection.content`)

    if (loading) return (
        <div>
            Loading!
        </div>
    )

    return (
            <div style={{ margin: '0 auto', width: '50%'}}>
                {
                    data.data.map((data: undefined) => RulebookPart(data as unknown as Part))
                }
            </div>
    )
}

export default withWrappers(PWA);