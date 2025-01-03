import React, { useEffect, useState } from 'react'
import Cookies from 'js-cookie'
function useAuthUser() {

    const [authUser, setAuthUser] = useState("")
    const [authJwt, setAuthJwt] = useState("")
    useEffect(() => {
        const storedData = localStorage.getItem('blog');
        const jwtData = Cookies.get('jwt');
        if (storedData && jwtData) {
            setAuthUser(JSON.parse(storedData))
            setAuthJwt(jwtData)
        }

    }, [])
    return { authUser, authJwt }

}

export default useAuthUser
