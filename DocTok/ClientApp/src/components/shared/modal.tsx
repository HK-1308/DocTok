import React, { ComponentType } from "react";
import { locale } from "../../resources/locales/locale"; 
import './modal.css';
//https://www.youtube.com/watch?v=i2Yf7JZonB4

interface IModalProps{
    children: any
}

export default function Modal(props : IModalProps){
    return (
        <div className="modal-custom ">
          <div className="modal-content-custom ">
               <div>
                    {props.children}
               </div>
           </div>
        </div> 
       );
};