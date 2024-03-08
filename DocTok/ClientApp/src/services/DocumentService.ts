import customAxios from "../customAxios";
import IDocumentService from './interfaces/IDocumentService';
import DocumentPage from '../models/responseModels/DocumentPage';

export default class DocumentService implements IDocumentService{
    public async get(): Promise<DocumentPage[]> {
        const response = await customAxios.get('/documents')
        return response.data
    }

    public async getById(id: number): Promise<DocumentPage> {
        const response = await customAxios.get(`/documents/${id}`)
        return response.data
    }
    
    public async getByProjectId(id: number): Promise<DocumentPage[]> {
        const response = await customAxios.get(`/documents/project/${id}`)
        return response.data
    }
}