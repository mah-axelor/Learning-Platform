import { Question } from "./Question";

export interface AnswerOption{
    id?: number;
    text: string;
    question: Question;
    value: number;
    isCorrect: boolean;
}