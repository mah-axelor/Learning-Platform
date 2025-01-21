import { Quizz } from "./Quizz";
import { Step } from "./Step";

export interface Course{
    id?: number;
    name: string;
    openingDate?: Date;
    closingDate?: Date;
    isOpen?: boolean;
    isClosed?: boolean;
    quizzList?: Quizz[];
    stepList?: Step[];
    description?: string;
}