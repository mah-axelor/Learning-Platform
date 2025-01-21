import { Question } from "./Question";

export interface AnswerOption{
    id?: number;
    text: string;
    questionId?: number;
    value: number;
    isCorrect: boolean;
}