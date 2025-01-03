import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import FormInput from './FormInput';
import FormTextarea from './FormTextarea';
import ImageSelector from './ImageSelector';
import { useParams } from 'react-router-dom';
import useGetPosts from '../hook/useGetPosts';
import axios from 'axios';
import { BaseUrl } from '../common/common';
import toast from 'react-hot-toast';

const EditPost = () => {
    const { posts } = useGetPosts();
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [file, setFile] = useState([]);
    const [loading, setLoading] = useState(false)



    useEffect(() => {
        const defaultPost = posts.find((p) => p._id === id);
        setPost(defaultPost || {});
    }, [posts, id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPost((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileChange = (e) => {
        setFile(e?.target?.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();



        try {
            const formData = new FormData();
            formData.append('title', post.title);
            formData.append('content', post.content);
            if (file) {
                formData.append('file', file);
            }
            setLoading(true)

            const response = await axios.put(`${BaseUrl}/blog/update-post/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
                withCredentials: true,
            });


            setPost(response.data.updateData);
            console.log(response.data.updateData);
            toast.success(response.data.message)
        } catch (err) {
            console.log(err.message)

        } finally {
            setLoading(false)
        }
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-2xl mx-auto bg-white rounded-xl shadow-lg p-8"
        >
            <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-3xl font-bold text-center text-gray-800 mb-8"
            >
                Edit Post
            </motion.h1>


            {/* {success && <p className="text-green-500">{success}</p>} */}

            <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
            >
                <FormInput
                    label="Title"
                    id="title"
                    name="title"
                    type="text"
                    value={post?.title || ''}
                    onChange={handleChange}
                    placeholder="Enter post title"
                />

                <ImageSelector
                    label="Cover Image"
                    id="coverImage"
                    name="coverImage"
                    onChange={handleFileChange}
                />

                <FormTextarea
                    label="Content"
                    id="content"
                    name="content"
                    value={post?.content || ''}
                    onChange={handleChange}
                    placeholder="Write your post content here"
                    rows="6"
                />

                <motion.button
                    type="submit"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                    className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                    disabled={loading}
                >
                    {loading ? 'Updating...' : 'Update Post'}
                </motion.button>
            </motion.form>
        </motion.div>
    );
};

export default EditPost;
