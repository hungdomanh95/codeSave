import React from 'react'
import {GoogleLogin} from "react-google-login"

const LoginGoogle = () => {
    const responseGoogle = (response) => {
        console.log('response: ', response);
    }
    return (
        <div>
               <GoogleLogin
               clientId="141151990484-hqqnbrn8052eombn6nkfnhv6psctue94.apps.googleusercontent.com"
               onSuccess={responseGoogle}
               onFailure={responseGoogle}
               >
               
                   <div  style={{width:200}} >
                   hello
                   </div>
               </GoogleLogin>

        </div>
    )
}

export default LoginGoogle
