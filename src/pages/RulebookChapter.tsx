import React from 'react';
import {BlocksRenderer} from "@strapi/blocks-react-renderer";
import {Chapter} from "../types/chapter";

const RulebookChapter = (data: Chapter) => {
    return (
        <div>
            <h3 style={{marginBlockEnd: "0.5em"}}>
                {data.attributes.title}
            </h3>

            <div style = {{textAlign: 'justify'}}>
                {
                    data.attributes.content.map(component => {
                        switch (component.__component) {
                            case "content.text":
                                return <BlocksRenderer content={component.content}/>
                        }
                    })
                }
            </div>
        </div>
    );
};

export default RulebookChapter;