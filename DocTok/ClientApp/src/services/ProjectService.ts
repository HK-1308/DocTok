import IProject from "../models/responseModels/projects/IProject";
import IProjectService from "./interfaces/IProjectService";
import axios from 'axios';

export default class ProjectService implements IProjectService{
    public async get(): Promise<IProject[]> {
        const response = await axios.get('/Projects')
        return response.data
    }

    public async getById(id: number): Promise<IProject> {
        const response = await axios.get('/Projects')
        return response.data
    }
    
}