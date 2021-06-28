import React, { Fragment, useState } from "react";
import "./scss/App.scss";
import { Route, Switch, BrowserRouter, Link } from "react-router-dom";
import ReactJs from "./components/react/ReactJs";
import Home from "./components/home/Home";
import Static from "./components/static/Static";
import Todolist from "./components/todolist/Todolist";
import Caculator from "./components/caculator/Caculator";
import Login from "./components/login/Login";

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
      <h2>DOCUMENT</h2>
      <BrowserRouter>
        <Fragment>
          <div className='menu' style={{gridTemplateColumns:`repeat(${arr.length},calc(100%/${arr.length}))`}} >
            {arr.map((item,index)=>{
              return <Link key={item.id} to={item.link} onClick={()=>changeMenu(index)} >{item.name}</Link>
            })}
          </div>

          <Switch>
            {/* {arr.reverse().map((item)=>{
                return <Route path={item.link} component={item.component}/>
            })} */}
            <Route path="/login" component={Login}/>
            <Route path="/caculator" component={Caculator}/>
            <Route path="/documentReact" component={ReactJs}/>
            <Route path="/todolist" component={Todolist}/>
            <Route path="/static" component={Static}/>
            <Route path="/" component={Home}/>
          </Switch>
        </Fragment>
      </BrowserRouter>
  </div>
  )
}

export default App
