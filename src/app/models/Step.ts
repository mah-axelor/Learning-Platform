import { Content } from "./Content";
import { Cours } from "./Cours";

export interface Step{
    id?: number;
    cours: Cours;
    orderNumber: number;
    contentList?: Content[]
    title: string

}