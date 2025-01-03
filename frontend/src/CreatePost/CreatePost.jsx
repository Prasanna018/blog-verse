import React, { useState } from 'react';
import { Send, Sparkles, ArrowLeftCircle, Save } from 'lucide-react'

import { Input } from './Input';
import { TextArea } from './TextArea';
import { ImageUpload } from './ImageUpload';
import { useForm } from '../hook/useForm';
import { AnimatedBackground } from './AnimatedBackground';

import { useNavigate } from 'react-router-dom';
import { OrbitProgress } from 'react-loading-indicators';
import toast from 'react-hot-toast';



export default function CreatePost() {
    const navigate = useNavigate()
    const { formData, handleInputChange, handleImageChange, handleRemoveImage, handleSubmit, loading } = useForm({
        title: '',
        content: '',
        coverImage: null
    });
    const [previewUrl, setPreviewUrl] = useState('');


    const onImageChange = (e) => {
        handleImageChange(e, setPreviewUrl);

    };

    const handleBack = () => {

        navigate('/')
    }






    return (
        <div className="h-screen bg-gradient-to-br from-cream-100 to-white relative overflow-hidden flex items-center justify-center">

            <AnimatedBackground />
            <div

                className='flex justify-center items-center gap-x-10 absolute top-10 left-10 '>

                {/* <CircleArrowLeft></CircleArrowLeft> */}
                <div onClick={handleBack} className='cursor-pointer'>
                    <ArrowLeftCircle size={36} ></ArrowLeftCircle>

                </div>
                <div className='cursor-pointer'>
                    <Save size={36}></Save>
                </div>

            </div>



            <div className="relative w-full max-w-2xl mx-auto px-4">
                <div className="bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
                    <div className="flex items-center justify-center gap-2 mb-4">
                        <Sparkles className="h-6 w-6 text-cream-500" />
                        <h1 className="text-2xl font-bold bg-gradient-to-r from-cream-600 to-cream-400 bg-clip-text text-transparent">
                            Create New Post
                        </h1>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <Input
                            label="Title"
                            id="title"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                            placeholder="Enter an engaging title..."
                            required
                        />

                        <TextArea
                            label="Content"
                            id="content"
                            name="content"
                            value={formData.content}
                            onChange={handleInputChange}
                            rows={4}
                            placeholder="Share your thoughts..."
                            required
                        />

                        <ImageUpload
                            previewUrl={previewUrl}
                            onImageChange={onImageChange}
                            onRemoveImage={() => {
                                handleRemoveImage();
                                setPreviewUrl('');
                            }}
                        />

                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 
                bg-gradient-to-r from-cream-400 to-cream-500 
                hover:from-cream-500 hover:to-cream-600
                text-white py-3 rounded-lg 
                transition-all duration-300 
                shadow-md hover:shadow-lg
                transform hover:-translate-y-0.5"
                        >
                            {
                                loading ? (<OrbitProgress variant="dotted" dense color="#32cd32" size='small' text="Loading" textColor="" />) :
                                    (
                                        <div className='flex gap-x-2 justify-center items-center'>
                                            <Send size={18} />
                                            <span className="font-medium">Create Post</span>
                                        </div>
                                    )
                            }

                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}