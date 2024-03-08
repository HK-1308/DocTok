import customAxios from "../customAxios";
import IEmployeeService from './interfaces/IEmployeeService';
import Employee from '../models/responseModels/Employee';

export default class EmployeeService implements IEmployeeService{
    public async get(): Promise<Employee[]> {
        const response = await customAxios.get('/projects')
        return response.data
    }

    public async getById(id: number): Promise<Employee> {
        const response = await customAxios.get('/projects')
        return response.data
    }
    
}