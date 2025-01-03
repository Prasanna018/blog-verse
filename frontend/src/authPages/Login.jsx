import React from 'react'
import Background from './authComponents/Background'
import LoginForm from './authComponents/LoginForm'

function Login() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <Background />
            <LoginForm />
        </div>
    )
}

export default Login
