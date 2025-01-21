import { Course }  from "./Course";
import { User } from "./User";

export interface User_Cours{
    userId: number;
    courseId: number;
    enrollementDate?: Date;
}