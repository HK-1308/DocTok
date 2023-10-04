import React, { useCallback, useEffect, useState } from 'react';
import TinymceEditor from './TinymceEditor/TinymceEditor';
import {locale} from "../../resources/locales/locale"
import IDocumentPage from '../../models/responseModels/IDocumentPage';
import DocumentList from './DocumentList';
import DocumentService from '../../services/DocumentService';


export default function Documentation(){
    const [document, setDocument] = useState<IDocumentPage>()

    useEffect(() => {
      fetchDocumentPage()
    },[])

    const documentService = new DocumentService();

    const fetchDocumentPage = async () => {
      const data = await documentService.getById(1);
      setDocument(data);
    }
    
    return(
        <div style={{"display": "flex"}}>
            <div className="pages-side-bar" style={{"width": "15%", "backgroundColor": "#FFFAFA"}}>
              <DocumentList/>
            </div>
            <div style={{width: "85%", }}>
              <div style={{"display": "flex", "justifyContent": "space-around"}}>
                {TinymceEditor()}
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