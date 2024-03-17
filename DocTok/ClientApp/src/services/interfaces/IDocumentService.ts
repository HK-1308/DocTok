import { DocumentPageRequestModel } from "../../models/requestModels/Documents/DocumentPageRequestModel";
import { DocumentPageDetailResponseModel } from "../../models/responseModels/Detail/DocumentDetailResponseModel";
import { DocumentHierarchyModel } from "../../models/responseModels/DocumentHierarchyModel";
import DocumentPage from "../../models/responseModels/DocumentPage";

export default interface IDocumentService{
    get() : Promise<DocumentPage[]>
    
    getById(id : number) : Promise<DocumentPageDetailResponseModel>

    getByProjectId(id : number) : Promise<DocumentHierarchyModel[]>

    getHierarchyByProjectId(id : number) : Promise<DocumentHierarchyModel[]>

    createDocument(documentRequestModel : DocumentPageRequestModel): Promise<DocumentPage>

    updateDocument(documentRequestModel : DocumentPageRequestModel): Promise<DocumentPage>

    deleteDocument(id: number) : Promise<void> 
}