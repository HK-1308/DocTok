import Employee from "../../models/responseModels/Employee";

export default interface IEmployeeService{
    get() : Promise<Employee[]>
    getById(id : number) : Promise<Employee>
}