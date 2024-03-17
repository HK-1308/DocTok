import customAxios from "../customAxios";
import IDocumentService from './interfaces/IDocumentService';
import DocumentPage from '../models/responseModels/DocumentPage';
import {DocumentPageRequestModel} from '../models/requestModels/Documents/DocumentPageRequestModel';
import { DocumentHierarchyModel } from "../models/responseModels/DocumentHierarchyModel";
import { DocumentPageDetailResponseModel } from "../models/responseModels/Detail/DocumentDetailResponseModel";

export default class DocumentService implements IDocumentService{

    public async getHierarchyByProjectId(id: number): Promise<DocumentHierarchyModel[]> {
        const response = await customAxios.get(`/documents/hierarchy/project/${id}`)
        return response.data
    }

    public async get(): Promise<DocumentPage[]> {
        const response = await customAxios.get('/documents')
        return response.data
    }

    public async getById(id: number): Promise<DocumentPageDetailResponseModel> {
        const response = await customAxios.get(`/documents/${id}`)
        return response.data
    }
    
    public async getByProjectId(id: number): Promise<DocumentHierarchyModel[]> {
        const response = await customAxios.get(`/documents/project/${id}`)
        return response.data
    }

    public async createDocument(documentRequestModel : DocumentPageRequestModel): Promise<DocumentPage>{
        const response = await customAxios.post(`/documents`,documentRequestModel)
        return response.data
    }

    public async updateDocument(documentRequestModel : DocumentPageRequestModel): Promise<DocumentPage>{
        const response = await customAxios.put(`/documents`,documentRequestModel)
        return response.data
    }

    public async deleteDocument(id: number) : Promise<void> {
        await customAxios.delete(`/documents/${id}`)
    }
}