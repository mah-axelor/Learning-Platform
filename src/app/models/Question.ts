import { AnswerOption } from "./AnswerOption";
import { QuestionType } from "./QuestionType";
import { Quizz } from "./Quizz";

export interface Question{
    id?: number;
    quizzId?: number;
    text: string;
    type: QuestionType;
    value: number;
    answerOptionList?: AnswerOption[];
}