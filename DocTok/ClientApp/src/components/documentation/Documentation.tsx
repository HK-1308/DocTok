import React, { useCallback, useEffect, useState } from 'react';
import TinymceEditor from './TinymceEditor/TinymceEditor';
import {locale} from "../../resources/locales/locale"
import IDocumentPage from '../../models/responseModels/documentation/IDocumentPage';

export default function Documentation(){
    const [pages,setPages] = useState<IDocumentPage>()

    useEffect(() => {
        getDocumentPage()
    },[])

    const getDocumentPage = async () => {

    }
    return(
        <div style={{"display": "flex"}}>
            <div className="pages-side-bar" style={{"width": "15%", "backgroundColor": "#FFFAFA"}}>
              {/* <Tab.Container id="left-tabs-example" defaultActiveKey="first">
              <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder= {`${locale.sideBarElements.search}`} />
                </Form.Group>
              </Form>
                {this.state.pages}
                <Button style={{width: "100%"}} variant="primary" onClick={this.AddNewTinymceClickHandler}>{locale.sideBarElements.addNewPage}</Button>
              </Tab.Container> */}
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