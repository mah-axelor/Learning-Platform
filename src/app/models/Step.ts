import { Content } from "./Content";
import { Course }  from "./Course";

export interface Step{
    id?: number;
    courseId?: number;
    orderNumber: number;
    contentList?: Content[]
    title: string

}