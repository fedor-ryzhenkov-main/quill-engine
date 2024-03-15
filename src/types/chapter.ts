import {RootNode} from "@strapi/blocks-react-renderer/dist/BlocksRenderer";

export interface Chapter_Attributes {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    title: string;
    content: RootNode[];
    chapter_id: string | null;
}

export interface Chapter {
    attributes: Chapter_Attributes;
    id: number
}