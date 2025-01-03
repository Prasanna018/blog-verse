import axios from 'axios'

import React, { useEffect, useState } from 'react'
import { BaseUrl } from '../common/common'

function useGetPosts() {
    const [posts, setPosts] = useState([])
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${BaseUrl}/blog/get-all-posts`, {
                    withCredentials: true
                })
                setPosts(response.data.Posts)

            } catch (error) {
                console.log(error.message)

            }

        }
        fetchPosts()

    }, [])
    return { posts }
}

export default useGetPosts
