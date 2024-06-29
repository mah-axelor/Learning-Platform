import { Cours } from "./Cours";
import { Question } from "./Question";

export interface Quizz{
    id:number;
    name: string;
    cours: Cours;
    value: number;
    questionList?: Question[];
}