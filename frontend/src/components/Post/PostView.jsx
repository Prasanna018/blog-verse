import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useGetPosts from '../../hook/useGetPosts';
import { Pencil } from 'lucide-react';


const PostView = () => {
    const { posts } = useGetPosts()
    const { id } = useParams();
    // console.log(id)

    const post = posts.find(p => p._id === id);
    // console.log(id)
    // console.log(post)

    if (!post) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Post not found</h2>
                    <Link
                        to="/"
                        className="text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                    >
                        ← Back to Posts
                    </Link>
                </div>
            </div>
        );
    }

    return (

        post && (<motion.div
            className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
        >
            <div className="max-w-4xl mx-auto">
                <Link
                    to="/"
                    className="inline-block mb-8 text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
                >
                    ← Back to Posts
                </Link>

                <motion.div
                    className="bg-white rounded-2xl shadow-lg overflow-hidden"
                    initial={{ y: 20 }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="aspect-[21/9] relative">
                        <img
                            src={post.coverImageUrl}
                            alt={post.title}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    <div className="p-8">
                        <h1 className="text-3xl font-bold text-gray-800 mb-6">
                            {post.title}
                        </h1>

                        <div className="prose prose-lg max-w-none text-gray-600">
                            {post.content}
                        </div>
                    </div>
                </motion.div>
            </div>

        </motion.div>)

    );



};

export default PostView;