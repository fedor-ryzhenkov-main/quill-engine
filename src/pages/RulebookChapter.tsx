import React from 'react';
import useFetch from "../services/hooks/useFetch";
import {BlocksContent, BlocksRenderer} from "@strapi/blocks-react-renderer";
import {Chapter_Attributes} from "../types/chapter";

const RulebookChapter = (data: Chapter_Attributes) => {

    return (
        <div>
            <h1>
                {data.title}
            </h1>

            <div>
                <BlocksRenderer content={data.content}/>
            </div>
        </div>
    );
};

export default RulebookChapter;