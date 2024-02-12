import { IDepartment } from "./idepartment";

export interface IEmployee {
    id:number;
    name:string;
    departments:IDepartment[];
}
