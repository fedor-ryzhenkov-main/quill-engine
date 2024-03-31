import {Chapter_Collection} from "./chapter";

interface Part_Attributes {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    title: string;
    chapter_collection: Chapter_Collection;
}

export interface Part {
    attributes: Part_Attributes
    id: number
}

export interface Part_Collection {
    data: Part[]
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    title: string;
}