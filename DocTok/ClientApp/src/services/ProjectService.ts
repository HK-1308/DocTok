import Project from "../models/responseModels/Project";
import IProjectService from "./interfaces/IProjectService";
import axios from 'axios';

export default class ProjectService implements IProjectService{
    public async get(): Promise<Project[]> {
        const response = await axios.get('/projects')
        return response.data
    }

    public async getById(id: number): Promise<Project> {
        const response = await axios.get('/projects')
        return response.data
    }
    
}