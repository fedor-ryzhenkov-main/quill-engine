import './styles/base/index.css'
import {withWrappers} from "./components/Wrapper";
import React from "react";
import {color_theme_css} from "./styles/utilities/global/theme";
import useFetch from "./services/hooks/useFetch";
import RulebookPart from "./pages/RulebookPart";
import {Part} from "./types/part";
import Header from "./components/Header";
import PartsTableComponent from "./components/ContentTable";

const PWA: React.FC = () => {
    let db: string;

    if (process.env.NODE_ENV === 'development') {
        console.log("development fetch")
        db = 'http://localhost:1337/api/parts?populate[0]=chapter_collection&populate[1]=chapter_collection.content';
    } else {
        console.log("production fetch")
        db = 'https://quill-engine-app-emz7p.ondigitalocean.app/db/api/parts?populate[0]=chapter_collection&populate[1]=chapter_collection.content';
    }
    const { data, loading} = useFetch(db)

    React.useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = color_theme_css;
        document.head.append(style);
    }, []);

    if (loading) return (
        <div>
            Loading!
        </div>
    )

    return (
        <div>
            <Header headerChildren={
                <div>

                </div>
            } expandedChildren={
                <PartsTableComponent parts={data.data}/>
            }/>

            <div style={{margin: '0 auto', width: '60%'}}>
            {
                    data.data.map((data: undefined) => RulebookPart(data as unknown as Part))
            }
            </div>
        </div>
 )

}

export default withWrappers(PWA);