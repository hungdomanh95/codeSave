import React from 'react'
import LoginFacebook from './LoginFacebook'
import LoginGoogle from './LoginGoogle'

const Login = () => {
    return (
        <div>
            <LoginGoogle/>
            <LoginFacebook/>
        </div>
    )
}

export default Login
