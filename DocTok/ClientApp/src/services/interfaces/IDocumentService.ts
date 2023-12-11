import DocumentPage from "../../models/responseModels/DocumentPage";

export default interface IDocumentService{
    get() : Promise<DocumentPage[]>
    
    getById(id : number) : Promise<DocumentPage>

    getByProjectId(id : number) : Promise<DocumentPage[]>
}