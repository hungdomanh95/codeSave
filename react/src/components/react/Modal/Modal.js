import React,{useState} from 'react'
import { screenActions} from "../../../redux/action/screenActions";
import {useSelector, useDispatch } from 'react-redux';
const Modal = () => {
    const dispatch = useDispatch();

    const closeModal=()=>{
        dispatch(screenActions.removePopup({
                name: "Modal",
        }));
    }
    return (
        <div className='modal'>
            <div className='content-modal'>
                <div className='modal-header'>
                    <ion-icon className='icon-close' name="close-outline" onClick={closeModal}></ion-icon>
                </div>    
                <div className='modal-body'></div>    
                <div className='modal-footer'></div>    
            </div>
        </div>
    )
}

export default Modal
