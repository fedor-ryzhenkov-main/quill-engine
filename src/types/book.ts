import {Part} from "./part";

interface Book_Attributes {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    title: string;
    parts: Part[];
}

export interface Book {
    attributes: Book_Attributes
    id: number
}