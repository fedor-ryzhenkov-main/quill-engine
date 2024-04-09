import './styles/base/index.css';
import styled from 'styled-components';
import {withWrappers} from "./components/Wrapper";
import React from "react";
import {color_theme_css} from "./styles/utilities/global/theme";
import useFetch from "./services/hooks/useFetch";
import RulebookPart from "./pages/RulebookPart";
import Header from "./components/Header";
import PartsTableComponent from "./components/ContentTable";
import {Route, Routes, useParams} from "react-router-dom";
import {Rulebook} from "./types/rulebook";
import RulebookRouter from "./components/RulebookRouter";

const Container = styled.div`
    margin: 0 auto;
    width: 60%;
    
    @media (max-width: 768px) {
        width: 80%;
    }
`;

const PWA: React.FC = () => {
    if (process.env.REACT_APP_STRAPI_API_FETCH_ALL_URL === undefined) {
        throw new Error("REACT_APP_STRAPI_API_FETCH_ALL_URL is not defined");
    }

    const { data, loading, error} = useFetch(process.env.REACT_APP_STRAPI_API_FETCH_ALL_URL)
    console.log(data)

    React.useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = color_theme_css;
        document.head.append(style);
    }, []);

    if (error) return (
        <div>
            Error: {error.message}
        </div>
    )

    if (loading) return (
        <div>
            Loading!
        </div>
    )

    return (
        <Routes>
            <Route path="/pwa/:rulebook_title" element={<RulebookComponent data={data}/>}/>
        </Routes>
    )
}

type RouteParams = {
    rulebook_title: string;
};


type RulebookComponentProps = {
    data: any; // replace any with your data type
};

const RulebookComponent: React.FC<RulebookComponentProps> = ({ data }) => {
    const { rulebook_title } = useParams<RouteParams>();
    console.log(rulebook_title)
    let rulebook = data.data.find((item: any) => item.attributes.rulebook_title === rulebook_title) as Rulebook;

    if (!rulebook) {
        return (
            <div>
                The rulebook with the title "{rulebook_title}" was not found.
            </div>
        );
    }

    document.title = rulebook.attributes.page_title

    return (
        <div style={{paddingTop: '3em'}}>
            <Header headerChildren={
                <RulebookRouter/>
            } expandedChildren={
                <div className='column' style={{height: '100%'}}>
                    <PartsTableComponent parts={rulebook.attributes.part_collection.data}/>
                </div>
            }/>

            <Container>
                {
                    rulebook.attributes.part_collection.data.map(data => RulebookPart(data))
                }
            </Container>
        </div>
    );
};

export default withWrappers(PWA);