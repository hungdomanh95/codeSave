import React, { Fragment, useState } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Caculator from "./components/caculator/Caculator";
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import ReactJs from "./components/react/ReactJs";
import FunctionComponent from "./components/screens/FunctionComponent";
import Static from "./components/static/Static";
import Todolist from "./components/todolist/Todolist";
import "./scss/App.scss";

var arr = [
  {
    id:1,
    name:"HOME",
    link:"/",
    component:Home
  },
  {
    id:2,
    name:"STATIC",
    link:"/static",
    component:Static
  },
  {
    id:3,
    name:"REACTJS",
    link:"/documentReact",
    component:ReactJs
  },{
    id:4,
    name:"TODOLIST",
    link:"/todolist",
    component:Todolist
  },{
    id:5,
    name:"CACULATOR",
    link:"/caculator",
    component:Caculator
  },{
    id:6,
    name:"LOGIN",
    link:"/login",
    component:Login
  },
]
const App = () => {

  const [status, setStatus] = useState(0)
  console.log('status: ', status);
const changeMenu = (index) => {
  setStatus(index)
}
  return (
    <div className="App">
     <FunctionComponent/>

  </div>
  )
}

export default App
