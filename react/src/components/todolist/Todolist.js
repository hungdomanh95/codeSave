import React, {useState, useEffect, Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import iconAdd from "../../assets/images/add.svg"
import iconSearch from "../../assets/images/search.svg"
import {addTodo,checkTodo} from '../../redux/action/todoAction'

const arrAction = [
    {
        id:1,
        name:"All",
    },
    {
        id:2,
        name:"Active",
    },
    {
        id:3,
        name:"Completed",
    },
]

const Todolist = () => {
    const dispatch = useDispatch()

    const {arrList} = useSelector(state=>state.todoReducer)

    const [arrListState, setArrListState] = useState(arrList)
    const [statusAdd, setStatusAdd] = useState(true)
    const [contentAdd, setContentAdd] = useState("")
    const [statusSearch, setStatusSearch] = useState(false)
    const [contentSearch, setContentSearch] = useState("")
    const [statusAction, setStatusAction] = useState(0)

    const [statusListSearch,setStatusListSearch] = useState(false)
    const [listSearch,setListSearch] = useState([])

    const checkDoneToDo = (item) => {
        dispatch(checkTodo(item))
    }
    const changeStatusAdd = () => {
        setStatusAdd(!statusAdd)
        setStatusSearch(false)
        setStatusListSearch(false)
        setArrListState(arrListState)
    }
    const changeStatusSearch = () => {
        setStatusSearch(!statusSearch)
        setStatusAdd(false)
    }
    const valueAdd = (e) => {
        setContentAdd(e.target.value)
    }
    const addNewTodo = (e) => {
        if(e.keyCode === 13){
            dispatch(addTodo({id:arrList.length+1,content:e.target.value,status:false}))
            setContentAdd("")
        }
    }

    const valueSearch = (e) => {
        setContentSearch(e.target.value)
        if (e.target.value !== "") {
            setStatusListSearch(true)
            const newList = arrList.filter(item=>{
                return item.content.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
            })
            setListSearch(newList)
        }else{
            setStatusListSearch(false)
            setArrListState(arrList)
        }
    }

    const chooseItem = (item,index) => {
        setStatusAction(index)
        if(item.name === "All"){
            setArrListState(arrList)
        }else if(item.name === "Active"){
            setArrListState(arrList.filter(item=>!item.status))
        }else if(item.name === "Completed"){
            setArrListState(arrList.filter(item=>item.status))
        }
    }

    useEffect(() => {
        setArrListState(arrList) 
    }, [arrList])
    return (
        <div className='todolist' >
            <header>
            <h1>THINGS TO DO</h1>
               {statusAdd && <input type="text" class="form-control add-todo" value={contentAdd} placeholder="Add New" onChange={(e)=>valueAdd(e)} onKeyDown ={(e)=>addNewTodo(e)} />}
               {statusSearch && <input type="text" class="form-control add-todo" value={contentSearch} placeholder="Search" onChange={(e)=>valueSearch(e)} />}
            </header>
            <div className='list'>
                {statusListSearch ?
                    <Fragment>
                        {listSearch.map((item)=>{
                            return(
                                <div className='item-list' key={item.id}  onClick={()=>checkDoneToDo(item) }>
                                    <input
                                        name={item.content}
                                        type="checkbox"
                                        checked={item.status}
                                        onChange={()=>checkDoneToDo(item) }
                                    />
                                        <p className={item.status ? "content-item complete" : "content-item"} >{item.content}</p>
                                </div>
                            )
                        })}
                    </Fragment>
                    :
                    <Fragment>
                        {arrListState.map((item)=>{
                            return(
                                <div className='item-list' key={item.id}  onClick={()=>checkDoneToDo(item) }>
                                    <input
                                        name={item.content}
                                        type="checkbox"
                                        checked={item.status}
                                        onChange={()=>checkDoneToDo(item) }
                                    />
                                        <p className={item.status ? "content-item complete" : "content-item"} >{item.content}</p>
                                </div>
                            )
                        })}
                    </Fragment>
                }
                

            </div>
            <div className='actionList' >
                <div className='pull-left' >
                    <div className='buttons'>
                        <img src={iconAdd} onClick={changeStatusAdd}  />
                        <img src={iconSearch} onClick={changeStatusSearch} />
                    </div>
                    <div className='detail' > { arrListState.length } items left </div>
                </div>
                <div className='pull-right' > 
                    {arrAction.map((item,index)=>{
                        return(
                            <div  className={ statusAction === index ? 'item-right active' : 'item-right'} 
                                  key={index} onClick={()=>chooseItem(item,index)} >
                                {item.name}
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Todolist
