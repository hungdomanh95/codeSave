import React from 'react'
import io from 'socket.io-client';
const URL = 'http://localhost:2001'
const socket = io(URL);
const Socket = () => {

    const updateData = () => {
        socket.emit("updateData", {name:"hung"});
        socket.on('sendData', (data)=>{
            console.log('data receive from server : ', data);
        });
    }

    return (
        <div className='content socket'>
        <h3>SOCKET</h3>
        <div className='content-body'>
            npm install socket.io-client

            <div className='btn' onClick={updateData}>
                Emit Socket
            </div>
        </div>
    </div>
    )
}

export default Socket
