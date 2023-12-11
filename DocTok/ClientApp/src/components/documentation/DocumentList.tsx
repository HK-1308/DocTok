import React, { useEffect, useState } from 'react';
import DocumentService from '../../services/DocumentService';
import DocumentPage from '../../models/responseModels/DocumentPage';
import Form from 'react-bootstrap/esm/Form';
import Nav from 'react-bootstrap/Nav';

interface IDocumentListProps{
    onSelectedCallback: (id: number) => Promise<void>,
}

export default function DocumentList(props: IDocumentListProps){
    const [documents, setDocuments] = useState<DocumentPage[]>();
    const documentService = new DocumentService();

    useEffect(() => {
        fetchDocumentList()
    },[])

    const fetchDocumentList = async () => {
        const data = await documentService.getByProjectId(1);
        setDocuments(data);
    }

    const onSelectHandler = async (id: number) =>{
        await props.onSelectedCallback(id);
    }

    return(
        <div style={{height: "100%",}}>
            <div style={{padding: "5px"}}>
                <Form.Control type="text" placeholder="Поиск..." />
            </div>
            <div style={{height: "100%", overflow: "auto",}}>
                <Nav variant="pills" className="flex-column">
                    <Nav.Item>
                        {documents?.map((document) => 
                            <Nav.Link key={document.id} eventKey={document.id} onClick={() => onSelectHandler(document.id)} >{document.caption}</Nav.Link> 
                        )}
                    </Nav.Item>
                </Nav>
            </div>
        </div>
    )
}