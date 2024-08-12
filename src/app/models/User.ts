import { UserStatus } from "./UserStatus";

export interface User{
    id?: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    statusSelect: UserStatus;
}