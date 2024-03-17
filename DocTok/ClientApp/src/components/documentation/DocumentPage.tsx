import React, { useState } from 'react';
import TinymceEditor from './TinymceEditor/TinymceEditor';
import {locale} from "../../resources/locales/locale"
import DocumentList from './DocumentList';
import { useParams } from 'react-router-dom';
import { DocumentPageDetailResponseModel } from '../../models/responseModels/Detail/DocumentDetailResponseModel';

type DocumentationParams = {
  projectId: string;
};

export default function Documentation(){
    const [document, setDocument] = useState<DocumentPageDetailResponseModel>()

    const { projectId } = useParams<DocumentationParams>();

    const onDocumentChanged = async (document: DocumentPageDetailResponseModel)=>{
      setDocument(document);
    }
    
    return(
        <div style={{"display": "flex"}}>
            <div className="pages-side-bar" style={{"width": "20%", "backgroundColor": "#FFFAFA", "height": "calc(100vh - 105px)",}}>
              <DocumentList projectId={Number(projectId)}  onSelectedCallback={onDocumentChanged}/>
            </div>
            <div style={{width: "80%", }}>
              <div style={{"display": "flex", "justifyContent": "space-around"}}>
                <TinymceEditor content={document?.content}></TinymceEditor>
              </div>
              <div style={{"display": "flex", "justifyContent": "right", "padding": "15px 10px 0px 0px",}}>
                {/* <Button hidden={!this.state.isInEditMode} variant="success" onClick={this.saveTinymceClickHandler.bind(this)}>{locale.buttons.save}</Button>
                <Button hidden={this.state.isInEditMode} variant="primary" onClick={this.editTinymceClickHandler.bind(this)}>{locale.buttons.edit}</Button>
                <Button variant="danger" onClick={this.deleteTinymceClickHandler}>{locale.buttons.delete}</Button> */}
              </div>
            </div>
        </div>
    )
}