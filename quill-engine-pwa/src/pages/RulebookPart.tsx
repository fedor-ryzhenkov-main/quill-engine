import React from 'react';
import {Part} from "../types/part";
import RulebookChapter from "./RulebookChapter";

const RulebookPart= (data: Part) => {
    return (
        <div>
            <h2>
                {data.attributes.title}
            </h2>

            <div>
                {data.attributes.chapter_collection.data.map(chapter => RulebookChapter(chapter))}
            </div>
        </div>
    );
};

export default RulebookPart;