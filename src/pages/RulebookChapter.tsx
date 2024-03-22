import React from 'react';
import {BlocksRenderer} from "@strapi/blocks-react-renderer";
import {Chapter} from "../types/chapter";
import '../styles/base/components/chapter.css'

const RulebookChapter = (data: Chapter) => {
    return (
        <div id={`Chapter: ${data.id}`}>
            <h3 style={{marginBlockEnd: "0.5em"}}>
                {data.attributes.title}
            </h3>

            <div style = {{textAlign: 'justify'}}>
                {
                    data.attributes.content.map(component=> {
                        switch (component.__component) {
                            case "content.text":
                                return <BlocksRenderer
                                    content={component.content}
                                    blocks={{
                                        'list-item': ({ children }) => {
                                            return (
                                                <li className="spaced-list"> {children} </li>
                                            )
                                        }
                                    }}
                                />
                        }
                    })
                }
            </div>
        </div>
    );
};

export default RulebookChapter;