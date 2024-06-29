import { Cours } from "./Cours";
import { User } from "./User";

export interface User_Cours{
    user: User;
    cours: Cours;
    enrollementDate?: Date;
}