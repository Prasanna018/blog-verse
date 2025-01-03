import axios from 'axios';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { BaseUrl } from '../common/common';
export const useForm = (initialState) => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState(initialState);
    const [loading, setLoading] = useState(false)

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e, setPreviewUrl) => {
        const file = e.target.files?.[0];
        if (file) {
            setFormData(prev => ({ ...prev, coverImage: file }));
            setPreviewUrl(URL.createObjectURL(file));
        }
    };

    const handleRemoveImage = () => {
        setFormData(prev => ({ ...prev, coverImage: null }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formDataToSend = new FormData();
        formDataToSend.append('title', formData.title);
        formDataToSend.append('content', formData.content);
        if (formData.coverImage) {
            formDataToSend.append('file', formData.coverImage);
        }




        setLoading(true)
        try {
            const response = await axios.post(`${BaseUrl}/blog/create-post`, formDataToSend, {
                withCredentials: true
            })
            if (response.data.success) {
                toast.success(response.data.message);
                navigate('/')




            } else {
                toast.error(response.data.message)
            }

        } catch (error) {
            toast.error(error.response.data.message)

        }
        setLoading(false)
    };

    return {
        formData,
        handleInputChange,
        handleImageChange,
        handleRemoveImage,
        handleSubmit,
        loading
    };
};