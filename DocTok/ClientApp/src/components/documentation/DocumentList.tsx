import React, { useEffect, useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import DocumentService from '../../services/DocumentService';
import IDocumentPage from '../../models/responseModels/IDocumentPage';
import Form from 'react-bootstrap/esm/Form';

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
        <div style={{height: "100%",}}>
            <div style={{padding: "5px"}}>
                <Form.Control type="text" placeholder="Поиск..." />
            </div>
            <div style={{height: "100%", overflow: "auto",}}>
                <ListGroup as="ol">
                    {documents?.map((document) => <ListGroup.Item key={document.id} action as="li">{document.caption}</ListGroup.Item> )}
                </ListGroup>
            </div>
        </div>
    )
}