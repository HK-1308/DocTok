import axios from 'axios';
import IEmployeeService from './interfaces/IEmployeeService';
import Employee from '../models/responseModels/Employee';

export default class EmployeeService implements IEmployeeService{
    public async get(): Promise<Employee[]> {
        const response = await axios.get('/projects')
        return response.data
    }

    public async getById(id: number): Promise<Employee> {
        const response = await axios.get('/projects')
        return response.data
    }
    
}