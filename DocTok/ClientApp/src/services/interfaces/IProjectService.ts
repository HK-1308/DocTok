import Project from "../../models/responseModels/Project";

export default interface IProjectService{
    get() : Promise<Project[]>
    getById(id : number) : Promise<Project>
}