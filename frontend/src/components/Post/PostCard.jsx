import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { Pencil, Trash2 } from 'lucide-react';
import useAuthUser from '../../hook/useAuthUser';
import axios from 'axios';
import { BaseUrl } from '../../common/common';
import toast from 'react-hot-toast';

const PostCard = ({ id, title, description, imageUrl, autherId, onDeleteSuccess }) => {
    const { authUser } = useAuthUser(); // Get authenticated user
    const isMyPost = authUser?.id === autherId; // Check if the post belongs to the authenticated user
    const navigate = useNavigate();

    const truncatedText = `${description.substring(0, 20)}...`;

    const handleDelete = async () => {
        console.log(`Deleting post with ID: ${id}`); // Debugging

        try {
            const response = await axios.delete(`${BaseUrl}/blog/delete-post/${id}`, {
                withCredentials: true, // Include cookies if authentication is required
            });

            console.log("Response:", response.data); // Debugging
            if (response.data.success) {
                toast.success(response.data.message || "Post deleted successfully!");
                setInterval(() => {

                    location.reload()
                }, 1000);
                // onDeleteSuccess(id); // Notify parent component to remove the post
            } else {
                toast.error(response.data.message || "Failed to delete the post!");
            }
        } catch (error) {
            console.error("Error while deleting post:", error);
            toast.error(error.response?.data?.message || "An error occurred while deleting the post.");
        }
    };

    return (
        <motion.div
            className="bg-white rounded-2xl shadow-lg overflow-hidden w-full max-w-sm mx-auto p-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, transition: { type: 'spring', stiffness: 300 } }}
        >
            <Link to={`/post/${id}`} className="block">
                <motion.div
                    className="relative overflow-hidden aspect-[16/9]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>

                <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 mb-3 hover:text-indigo-600 transition-colors duration-200">
                        {title}
                    </h2>
                    <p className="text-gray-600 leading-relaxed">{truncatedText}</p>
                    <span className="mt-4 inline-block text-sm font-medium text-indigo-600 hover:text-indigo-800 transition-colors duration-200">
                        Read More →
                    </span>
                </div>
            </Link>
            <div className="flex items-center justify-end gap-2">
                {/* Edit Button */}
                {isMyPost && (
                    <div
                        className="cursor-pointer w-fit p-2 rounded-md"
                        onClick={() => navigate(`/edit-post/${id}`)}
                    >
                        <Pencil color="green" />
                    </div>
                )}

                {/* Delete Button */}
                {isMyPost && (
                    <div
                        className="p-2 w-fit cursor-pointer"
                        onClick={handleDelete}
                    >
                        <Trash2 color="red" />
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default PostCard;
