import { Quizz } from "./Quizz";
import { User } from "./User";

export interface User_Quizz{
    quizz: Quizz;
    user: User;
    score: number;
}