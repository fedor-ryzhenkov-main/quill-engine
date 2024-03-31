import './styles/base/index.css';
import styled from 'styled-components';
import {withWrappers} from "./components/Wrapper";
import React from "react";
import {color_theme_css} from "./styles/utilities/global/theme";
import useFetch from "./services/hooks/useFetch";
import RulebookPart from "./pages/RulebookPart";
import {Part} from "./types/part";
import Header from "./components/Header";
import PartsTableComponent from "./components/ContentTable";

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
        <div>
            <Header headerChildren={
                <div>

                </div>
            } expandedChildren={
                <PartsTableComponent parts={data.data}/>
            }/>

            <Container>
                {
                    data.data.map((data: undefined) => RulebookPart(data as unknown as Part))
                }
            </Container>
        </div>
    )
}

export default withWrappers(PWA);