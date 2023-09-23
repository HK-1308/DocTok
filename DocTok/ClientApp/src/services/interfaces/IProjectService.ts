import IProject from "../../models/responseModels/projects/IProject";

export default interface IProjectService{
    get() : Promise<IProject[]>
    getById(id : number) : Promise<IProject>
}