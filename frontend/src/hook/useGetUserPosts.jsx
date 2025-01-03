import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { BaseUrl } from '../common/common'

function useGetUserPosts() {
    const [userPosts, setUserPosts] = useState([])
    useEffect(() => {
        const UsersPosts = async () => {
            const response = await axios.get(`${BaseUrl}/blog/user-posts`, {
                withCredentials: true
            })
            setUserPosts(response.data.userPosts)
        }
        UsersPosts()

    }, [])
    return { userPosts }
}

export default useGetUserPosts
