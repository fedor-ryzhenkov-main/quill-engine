import {Part_Collection} from "./part";

interface Rulebook_Attributes {
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    rulebook_title: string;
    part_collection: Part_Collection;
}

export interface Rulebook {
    attributes: Rulebook_Attributes
    id: number
}