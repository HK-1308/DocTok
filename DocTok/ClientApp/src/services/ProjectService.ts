import customAxios from "../customAxios";
import Project from "../models/responseModels/Project";
import IProjectService from "./interfaces/IProjectService";

export default class ProjectService implements IProjectService{
    public async get(): Promise<Project[]> {
        const response = await customAxios.get('/projects')
        return response.data
    }

    public async getById(id: number): Promise<Project> {
        const response = await customAxios.get('/projects')
        return response.data
    }
    
}