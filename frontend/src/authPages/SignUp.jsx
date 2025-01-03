import React from 'react'
import SignupForm from './authComponents/SignupForm'
import Background from './authComponents/Background'
function SignUp() {
    return (
        <div className="min-h-screen flex items-center justify-center p-4">
            <Background />
            <SignupForm />
        </div>
    )
}

export default SignUp
