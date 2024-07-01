import { Quizz } from "./Quizz";
import { Step } from "./Step";

export interface Cours{
    id?: number;
    name: string;
    openingDate?: Date;
    closingDate?: Date;
    isOpen?: boolean;
    quizzList?: Quizz[];
    stepList?: Step[];
}