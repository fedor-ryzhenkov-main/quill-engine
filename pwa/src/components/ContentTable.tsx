import React from 'react';
import {Part} from '../types/part'
import {Chapter} from '../types/chapter';
import ScrollLink from "./Navigation/ScrollLink"; // Update the import path based on your folder structure
import '../styles/base/components/content-table.css'

const ChapterComponent: React.FC<{ chapter: Chapter }> = ({ chapter }) => (
        <li>
            <a href={`#${chapter.attributes.title.replace(/ /g, '_')}`}>
                {chapter.attributes.title}
            </a>
        </li>
);

const PartComponent: React.FC<{ part: Part }> = ({ part }) => (
    <li>
        {part.attributes.title}
        <ul>
            {part.attributes.chapter_collection.data.map(c => <ChapterComponent key={c.id} chapter={c} />)}
        </ul>
    </li>
);

const PartsTableComponent: React.FC<{ parts: Part[] }> = ({ parts }) => (
    <div className='content-table'>
        <ul>
            {parts.map(p => <PartComponent key={p.id} part={p}/>)}
        </ul>
    </div>
);

export default PartsTableComponent;