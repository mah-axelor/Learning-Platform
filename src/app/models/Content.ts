import { Step } from "./Step";

export interface Content{
    id: number;
    title?: string;
    text?: string;
    url?: string;
    orderNumber: number;
    step: Step;
}