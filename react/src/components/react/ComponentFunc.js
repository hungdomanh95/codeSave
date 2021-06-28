import React,{useState} from 'react'
import { screenActions} from "../../redux/action/screenActions";
import {useSelector, useDispatch } from 'react-redux';
import Modal from './Modal/Modal';
const ComponentFunc = () => {

    const dispatch = useDispatch();
    const {screenReducer} = useSelector(state=>state)
    const [toggleModal, setToggleModal] = useState(false)

    const showModal=()=>{
        if(!toggleModal){
            dispatch(screenActions.addPopup({
                name: "Modal",
            }));
            // setToggleModal(!toggleModal)
        // }else{
        //     dispatch(screenActions.removePopup({
        //         name: "Modal",
        //     }));
        //     setToggleModal(!toggleModal)
        // }
        }
    }
    return (
        <div className='content component-func'>
            <h3>COMPONENT FUNCTION</h3>
            <div className='content-body'>
                <div onClick={showModal}>showModal</div>
                {screenReducer['Modal'] && <Modal/>}
            </div>
        </div>
    )
}

export default ComponentFunc
