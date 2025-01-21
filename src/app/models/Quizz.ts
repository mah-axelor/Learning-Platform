import { Course }  from "./Course";
import { Question } from "./Question";

export interface Quizz{
    id?:number;
    name: string;
    courseId?: number;
    value: number;
    questionList?: Question[];
}