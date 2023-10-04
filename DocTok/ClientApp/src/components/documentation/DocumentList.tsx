import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import DocumentService from '../../services/DocumentService';
import IDocumentPage from '../../models/responseModels/IDocumentPage';

export default function DocumentList(){
    const [documents, setDocuments] = useState<IDocumentPage[]>();
    const documentService = new DocumentService();

    useEffect(() => {
        fetchDocumentList()
    },[])

    const fetchDocumentList = async () => {
        const data = await documentService.getByProjectId(1);
        setDocuments(data);
    }

    return(
        <ListGroup as="ol">
            {documents?.map((document) => <ListGroup.Item action as="li">{document.caption}</ListGroup.Item> )}
        </ListGroup>
    )
}