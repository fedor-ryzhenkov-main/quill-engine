import {RootNode} from "@strapi/blocks-react-renderer/dist/BlocksRenderer";

interface Chapter_Attributes {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    title: string;
    content: Component[];
    chapter_id: string | null;
}

type Text = {
    __component: 'content.text',
    content: RootNode[]
}

type Component = Text

export interface Chapter {
    attributes: Chapter_Attributes;
    id: number
}

export interface Chapter_Collection {
    data: Chapter[]
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    title: string;
}