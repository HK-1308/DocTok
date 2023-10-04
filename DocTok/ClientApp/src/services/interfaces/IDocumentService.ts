import IDocumentPage from "../../models/responseModels/IDocumentPage";

export default interface IDocumentService{
    get() : Promise<IDocumentPage[]>
    
    getById(id : number) : Promise<IDocumentPage>

    getByProjectId(id : number) : Promise<IDocumentPage[]>
}