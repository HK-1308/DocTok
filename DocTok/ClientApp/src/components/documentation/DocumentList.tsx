import React, { ChangeEvent, ReactNode, useEffect, useState } from 'react';
import DocumentService from '../../services/DocumentService';
import {DocumentHierarchyModel} from '../../models/responseModels/DocumentHierarchyModel';
import {DocumentPageRequestModel} from '../../models/requestModels/Documents/DocumentPageRequestModel';
import Form from 'react-bootstrap/esm/Form';
import { Button } from 'reactstrap';
import { DocumentPageDetailResponseModel } from '../../models/responseModels/Detail/DocumentDetailResponseModel';
import IDocumentService from '../../services/interfaces/IDocumentService';

interface IDocumentListProps{
    projectId: number,
    onSelectedCallback: (document: DocumentPageDetailResponseModel) => Promise<void>,
}

export default function DocumentList(props: IDocumentListProps){
    const [documentsHierarchy, setDocumentsHierarchy] = useState<DocumentHierarchyModel[]>([])
    const [editedDocumentId, setEditedDocumentId] = useState<number>()
    const [editedCaption, setEditedCaption] = useState<string>('')
    const documentService : IDocumentService = new DocumentService()

    useEffect(() => {
        async function fetchData(){
            await fetchDocumentHierarchy()
        }
        fetchData()
    },[])

    const fetchDocumentHierarchy = async () =>{
        const data = await documentService.getHierarchyByProjectId(props.projectId);
        data.forEach((item)=>{
            if(item.parentId === 0){
                item.hierarchyLevel=0
            }
        })
        setDocumentsHierarchy(data);
    }

    const onSelectHandler = async (document: DocumentHierarchyModel) =>{
        const data = await documentService.getById(document.id);
        await props.onSelectedCallback(data);
    }

    const onExpandRowClickHandler = async (document: DocumentHierarchyModel) =>{
        if(document){
            if(!document.isExpanded){
                document.isExpanded = true
                document.childs.forEach(item => item.hierarchyLevel = document.hierarchyLevel + 1)
            }
            else{
                document.isExpanded = false
            }
        }
        setDocumentsHierarchy([...documentsHierarchy])
    }

    const addNewDocumentButtonClickHandler = (documentId: number) => {
        setEditedDocumentId(documentId)
    }

    const removeDocumentButtonClickHandler = async (documentId: number) => {
        await documentService.deleteDocument(documentId)
        const documents = await documentService.getByProjectId(props.projectId);
        setDocumentsHierarchy(documents);
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
        const newDocuments = await documentService.getByProjectId(props.projectId);
        setDocumentsHierarchy(newDocuments);
        setEditedDocumentId(0)
    }

    const cancelNewDocumentButtonClickHandler = () => {
        setEditedDocumentId(0)
    }

    const onEditedCaptionChanged = (value:string)=>{
        setEditedCaption(value)
    }

    const renderNode = (document: DocumentHierarchyModel) : ReactNode =>{
        return (
        <div key={document.id}>
        {
            document.id !== editedDocumentId ?
                <div style={{ margin: `${document.hierarchyLevel*15}px`,}}>
                    <div onClick={() => onSelectHandler(document)} >{document.caption}
                        <Button onClick={(e) => {e.stopPropagation(); onExpandRowClickHandler(document)}}> Внутрь </Button>
                        <Button onClick={() => addNewDocumentButtonClickHandler(document.id)}> Добавить </Button>
                        <Button onClick={() => removeDocumentButtonClickHandler(document.id)}> Удалить </Button>
                    </div>
                </div>
            :
            <div className='document-hierarchy-node'>
                <div style={{ margin: `${document.hierarchyLevel*15}px`,}}>
                    <div onClick={() => onSelectHandler(document)} >{document.caption}
                        <Button onClick={(e) => {e.stopPropagation(); onExpandRowClickHandler(document)}}> Внутрь </Button>
                        <Button onClick={() => addNewDocumentButtonClickHandler(document.id)}> Добавить </Button>
                        <Button onClick={() => removeDocumentButtonClickHandler(document.id)}> Удалить </Button>
                    </div>
                    <div>
                        <Form.Control value={editedCaption} onChange={(e)=>onEditedCaptionChanged(e.target.value)} placeholder='Название' />
                        <Button onClick={()=>saveNewDocumentButtonClickHandler(document.id)}> Сохр </Button>
                        <Button onClick={()=>cancelNewDocumentButtonClickHandler()}> Отм </Button>
                    </div>               
                </div>
                {document.isExpanded && document.childs.map(child => renderNode(child))}
            </div>                              
        }
        {document.isExpanded && document.childs.map(child => renderNode(child))}
        </div>);
    }

    return(
        <div style={{height: "100%",}}>
            <div style={{padding: "5px"}}>
                <Form.Control type="text" placeholder="Поиск..." />
            </div>
            <div style={{height: "100%", overflow: "auto",}}>
                <div>
                    {documentsHierarchy?.map((document) => 
                        renderNode(document)
                        // document.id !== editedDocumentId ?
                        // <div style={{ margin: `${document.hierarchyLevel*15}px`,}} key={document.id}>
                        //     <div onClick={() => onSelectHandler(document)} >{document.caption}
                        //         <Button onClick={(e) => {e.stopPropagation(); onExpandRowClickHandler(document)}}> Внутрь </Button>
                        //         <Button onClick={() => addNewDocumentButtonClickHandler(document.id)}> Добавить </Button>
                        //         <Button onClick={() => removeDocumentButtonClickHandler(document.id)}> Удалить </Button>
                        //     </div>
                        // </div>
                        // :
                        // <div style={{ margin: `${document.hierarchyLevel*15}px`,}} key={document.id}>
                        //     <div onClick={() => onSelectHandler(document)} >{document.caption}
                        //         <Button onClick={(e) => {e.stopPropagation(); onExpandRowClickHandler(document)}}> Внутрь </Button>
                        //         <Button onClick={() => addNewDocumentButtonClickHandler(document.id)}> Добавить </Button>
                        //         <Button onClick={() => removeDocumentButtonClickHandler(document.id)}> Удалить </Button>
                        //     </div>
                        //     <div>
                        //         <Form.Control value={editedCaption} onChange={(e)=>onEditedCaptionChanged(e.target.value)} placeholder='Название' />
                        //         <Button onClick={()=>saveNewDocumentButtonClickHandler(document.id)}> Сохр </Button>
                        //         <Button onClick={()=>cancelNewDocumentButtonClickHandler()}> Отм </Button>
                        //     </div>               
                        // </div>                                    
                    )}
                </div>
            </div>
        </div>
    )
}