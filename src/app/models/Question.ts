import { AnswerOption } from "./AnswerOption";
import { QuestionType } from "./QuestionType";
import { Quizz } from "./Quizz";

export interface Question{
    id?: number;
    quizz: Quizz;
    text: string;
    type: QuestionType;
    value: number;
    answerOptionList?: AnswerOption[];
}