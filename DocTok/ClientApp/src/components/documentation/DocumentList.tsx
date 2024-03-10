import React, { ChangeEvent, useEffect, useState } from 'react';
import DocumentService from '../../services/DocumentService';
import DocumentPage from '../../models/responseModels/DocumentPage';
import {DocumentPageRequestModel} from '../../models/requestModels/Documents/DocumentPageRequestModel';
import Form from 'react-bootstrap/esm/Form';
import Nav from 'react-bootstrap/Nav';
import { Button } from 'reactstrap';

interface IDocumentListProps{
    projectId: number,
    onSelectedCallback: (id: number) => Promise<void>,
}

export default function DocumentList(props: IDocumentListProps){
    const [documents, setDocuments] = useState<DocumentPage[]>();
    const [editedDocumentId, setEditedDocumentId] = useState<number>();
    const [editedCaption, setEditedCaption] = useState<string>('');
    const documentService = new DocumentService();

    useEffect(() => {
        fetchDocumentList()
    },[])

    const fetchDocumentList = async () => {
        const data = await documentService.getByProjectId(props.projectId);
        setDocuments(data);
    }

    const onSelectHandler = async (id: number) =>{
        await props.onSelectedCallback(id);
    }

    const addNewDocumentButtonClickHandler = (documentId: number) => {
        setEditedDocumentId(documentId)
    }

    const removeDocumentButtonClickHandler = async (documentId: number) => {
        await documentService.deleteDocument(documentId)
        const documents = await documentService.getByProjectId(props.projectId);
        setDocuments(documents);
        setEditedDocumentId(0)
    }

    const saveNewDocumentButtonClickHandler = async (parentId : number) => {

        let document: DocumentPageRequestModel ={
            caption: editedCaption,
            parentId: parentId,
            content:'',
            projectId: props.projectId,
        }
        await documentService.createDocument(document);
        const documents = await documentService.getByProjectId(props.projectId);
        setDocuments(documents);
        setEditedDocumentId(0)
    }

    const cancelNewDocumentButtonClickHandler = () => {
        setEditedDocumentId(0)
    }

    const onEditedCaptionChanged = (value:string)=>{
        setEditedCaption(value)
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
                            document.id !== editedDocumentId 
                            ? 
                            <div key={document.id}>
                                <Nav.Link eventKey={document.id} onClick={() => onSelectHandler(document.id)} >{document.caption}
                                    <Button onClick={() => addNewDocumentButtonClickHandler(document.id)}> Добавить </Button>
                                    <Button onClick={() => removeDocumentButtonClickHandler(document.id)}> Удалить </Button>
                                </Nav.Link>
                            </div> 
                            :
                            <div key={document.id}>
                                <Nav.Link eventKey={document.id} onClick={() => onSelectHandler(document.id)} >{document.caption}
                                    <Button onClick={() => addNewDocumentButtonClickHandler(document.id)}> Добавить </Button>
                                    <Button onClick={() => removeDocumentButtonClickHandler(document.id)}> Удалить </Button>
                                </Nav.Link>
                                <div>
                                    <Form.Control value={editedCaption} onChange={(e)=>onEditedCaptionChanged(e.target.value)} placeholder='Название' />
                                    <Button onClick={()=>saveNewDocumentButtonClickHandler(document.id)}> Сохр </Button>
                                    <Button onClick={()=>cancelNewDocumentButtonClickHandler()}> Отм </Button>
                                </div>

                            </div> 
                        )}
                    </Nav.Item>
                </Nav>
            </div>
        </div>
    )
}