
import axios from 'axios';
import IDocumentService from './interfaces/IDocumentService';
import IDocumentPage from '../models/responseModels/IDocumentPage';

export default class DocumentService implements IDocumentService{
    public async get(): Promise<IDocumentPage[]> {
        const response = await axios.get('/documents')
        return response.data
    }

    public async getById(id: number): Promise<IDocumentPage> {
        const response = await axios.get(`/documents/${id}`)
        return response.data
    }
    
    public async getByProjectId(id: number): Promise<IDocumentPage[]> {
        const response = await axios.get(`/documents/projectId/${id}`)
        return response.data
    }
}