// import React, { Component} from 'react';
// import { Editor } from '@tinymce/tinymce-react';
// import Col from 'react-bootstrap/Col';
// import Nav from 'react-bootstrap/Nav';
// import Row from 'react-bootstrap/Row';
// import Tab from 'react-bootstrap/Tab';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import Swal from "sweetalert2";
// import {locale} from "../locale"

// export class Documentation extends Component {
//   static displayName = Documentation.name;

//   constructor() {
//     super();
//     this.state = {pages: [],isInEditMode: false, currentPageId: 0, currentProjectId: 0};
//     this.pagesFromServer = [{id: 1, name: 'Проектирование архитектуры проекта', parentId: 0, projectId: 1, html: "<p>Необходимо заполнить страницы документации!</p>"},
//                             {id: 2, name: 'Page2',parentId: 0, projectId: 2, html: "<p>Здесь какой-то текст</p>"},
//                             {id: 3, name: 'Техническое задание', parentId: 1, projectId: 1, html: `<p>Неверное техническое задание, нужно переделать!</p><img src="https://www.google.com/logos/google.jpg"/>`},
//                             {id: 4, name: 'Диаграммы', parentId: 1, projectId: 1, html: "<p>Это подстраница первой страницы</p>"},
//                             {id: 5, name: 'Диаграмма вариантов использования', parentId: 4, projectId: 1, html: "<p>Это страница третьего уровня</p>"},
//                             {id: 6, name: 'Чек-лист по стилям кода', parentId: 0, projectId: 1, html: "<p>Это страница первого уровня</p>"},
//                             {id: 7, name: 'Диаграмма базы данных', parentId: 4, projectId: 1, html: "<p>Это страница третьего уровня</p>"},
//                           ];
//     this.deleteTinymceClickHandler = this.deleteTinymceClickHandler.bind(this)
//   }

//   pagesSideBarClickHandler = (pageObject) =>{
//     //Установка данных в текстовой области в формате html
//     const stringToHTML = window.tinymce
//       .get("content")
//       .setContent(pageObject.html);
//     this.setState(() => ({
//       isInEditMode: false,
//       currentPageId: pageObject.id,
//     }));
//   }

//   editTinymceClickHandler = () =>{
//     this.setState(() => ({
//       isInEditMode: true,
//     }));
//   }

//   deleteTinymceClickHandler = () =>{
//     Swal.fire({  
//       icon: "warning",
//       showCancelButton: true,
//       cancelButtonText: locale.buttons.cancel,
//       title: 'Страница документации будет удалена!',   
//       text: 'Вы уверены, что хотите удалить выбранную страницу?', 
//     }).then((result)=>{
//       if(result.isConfirmed){
//         this.pagesFromServer = this.pagesFromServer.filter(item => item.id != this.state.currentPageId);
//         this.setState(() => ({
//           isInEditMode: false,
//         }));
//         this.projectCardClickHandler(this.state.currentProjectId)
//       }
//     })
//   }

//   saveTinymceClickHandler = () =>{
//     Swal.fire({  
//       icon: "warning",
//       cancelButtonText: locale.buttons.cancel,
//       showCancelButton: true,
//       title: 'Страница документации будет изменена!',   
//       text: 'Вы уверены, что хотите сохранить внесенные изменения?', 
//     }).then((result)=>{
//       if(result.isConfirmed){
//         const stringToHTML = window.tinymce
//           .get("content")
//           .getContent({ format: "html" });
//         let index = this.pagesFromServer.map(item => item.id).indexOf(this.state.currentPageId)
//         this.pagesFromServer[index].html = stringToHTML
//         this.setState(() => ({
//           isInEditMode: false,
//         }));
//       }
//     });  
//   }

//   AddNewTinymceClickHandler = () =>{
//     this.pagesFromServer.push({id: this.pagesFromServer.length + 1, name: 'New Page',parentId: this.state.currentPageId, projectId: this.state.currentProjectId, html: ""});
//     this.setState(() => ({
//       isInEditMode: true,
//     }));
//     this.projectCardClickHandler(this.state.currentProjectId)
//   }

//   render() {
//     let editor = (<Editor       
//       id = "content"
//       disabled = {!this.state.isInEditMode}
//       init={{
//         width: "100%",
//         language: locale.tinymceLocale,
//         menubar: `file edit view insert format tools table help`,
//         plugins: 'print preview paste importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists wordcount imagetools textpattern noneditable help charmap quickbars emoticons',
//         imagetools_cors_hosts: ['picsum.photos'],
//         toolbar: 'undo redo | bold italic underline strikethrough | fontselect fontsizeselect formatselect | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
//         toolbar_sticky: true,
//         autosave_ask_before_unload: true,
//         autosave_interval: '30s',
//         autosave_prefix: '{path}{query}-{id}-',
//         autosave_restore_when_empty: false,
//         autosave_retention: '2m',
//         image_advtab: true,
//         link_list: [
//           { title: 'My page 1', value: 'https://www.tiny.cloud' },
//           { title: 'My page 2', value: 'http://www.moxiecode.com' }
//         ],
//         image_list: [
//           { title: 'My page 1', value: 'https://www.tiny.cloud' },
//           { title: 'My page 2', value: 'http://www.moxiecode.com' }
//         ],
//         image_class_list: [
//           { title: 'None', value: '' },
//           { title: 'Some class', value: 'class-name' }
//         ],
//         importcss_append: true,
//         file_picker_callback: function (callback, value, meta) {
//           /* Provide file and text for the link dialog */
//           if (meta.filetype === 'file') {
//             callback('https://www.google.com/logos/google.jpg', { text: 'My text' });
//           }
      
//           /* Provide image and alt text for the image dialog */
//           if (meta.filetype === 'image') {
//             callback('https://www.google.com/logos/google.jpg', { alt: 'My alt text' });
//           }
      
//           /* Provide alternative source and posted for the media dialog */
//           if (meta.filetype === 'media') {
//             callback('movie.mp4', { source2: 'alt.ogg', poster: 'https://www.google.com/logos/google.jpg' });
//           }
//         },
//         templates: [
//               { title: 'New Table', description: 'creates a new table', content: '<div class="mceTmpl"><table width="98%%"  border="0" cellspacing="0" cellpadding="0"><tr><th scope="col"> </th><th scope="col"> </th></tr><tr><td> </td><td> </td></tr></table></div>' },
//           { title: 'Starting my story', description: 'A cure for writers block', content: 'Once upon a time...' },
//           { title: 'New list with dates', description: 'New List with dates', content: '<div class="mceTmpl"><span class="cdate">cdate</span><br /><span class="mdate">mdate</span><h2>My List</h2><ul><li></li><li></li></ul></div>' }
//         ],
//         template_cdate_format: '[Date Created (CDATE): %m/%d/%Y : %H:%M:%S]',
//         template_mdate_format: '[Date Modified (MDATE): %m/%d/%Y : %H:%M:%S]',
//         height: 600,
//         image_caption: true,
//         quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote quickimage quicktable',
//         noneditable_noneditable_class: 'mceNonEditable',
//         toolbar_mode: 'sliding',
//         contextmenu: 'link image imagetools table',
//         content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
//       }}
//     />)

//     return (
//       <div style={{"display": "flex"}}>
//         <div className="pages-side-bar" ref='pages-side-bar' style={{"width": "15%", "backgroundColor": "#FFFAFA"}}>
//           <Tab.Container id="left-tabs-example" defaultActiveKey="first">
//           <Form>
//             <Form.Group className="mb-3" controlId="formBasicEmail">
//               <Form.Control type="email" placeholder= {`${locale.sideBarElements.search}`} />
//             </Form.Group>
//           </Form>
//             {this.state.pages}
//             <Button style={{width: "100%"}} variant="primary" onClick={this.AddNewTinymceClickHandler}>{locale.sideBarElements.addNewPage}</Button>
//           </Tab.Container>
//         </div>
//         <div style={{width: "85%", }}>
//           <div style={{"display": "flex", "justifyContent": "space-around"}}>
//             {editor}
//           </div>
//           <div style={{"display": "flex", "justifyContent": "right", "padding": "15px 10px 0px 0px",}}>
//             <Button hidden={!this.state.isInEditMode} variant="success" onClick={this.saveTinymceClickHandler.bind(this)}>{locale.buttons.save}</Button>
//             <Button hidden={this.state.isInEditMode} variant="primary" onClick={this.editTinymceClickHandler.bind(this)}>{locale.buttons.edit}</Button>
//             <Button variant="danger" onClick={this.deleteTinymceClickHandler}>{locale.buttons.delete}</Button>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
