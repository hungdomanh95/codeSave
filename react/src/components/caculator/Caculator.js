import React from 'react'

const arr=[
    {id:1,name:"AC"},
    {id:2,name:"+/-"},
    {id:3,name:"%"},
    {id:4,name:"÷"},
    {id:5,name:"7"},
    {id:6,name:"8"},
    {id:7,name:"9"},
    {id:8,name:"x"},
    {id:9,name:"4"},
    {id:10,name:"5"},
    {id:11,name:"6"},
    {id:12,name:"-"},
    {id:13,name:"1"},
    {id:14,name:"2"},
    {id:15,name:"3"},
    {id:16,name:"+"},
]

const Caculator = () => {
    return (
        <div style={{display:"flex",flexWrap:"wrap"}} >
            {arr.map((item,index)=>{
                return(
                    <div style={{width:"25%"}} >{item.name}</div>
                )
            })}
        </div>
    )
}

export default Caculator
