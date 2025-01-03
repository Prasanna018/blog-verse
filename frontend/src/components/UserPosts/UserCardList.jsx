import { motion } from 'framer-motion';
import PostCard from '../Post/PostCard';
import { Link } from 'react-router-dom';
import useGetUserPosts from '../../hook/useGetUserPosts';


const container = {

    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const UserCardList = () => {
    const { userPosts } = useGetUserPosts()

    console.log(userPosts)
    // if (userPosts.length === 0) {
    //     return
    // }

    return (

        <div id='card' className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <Link
                to="/"
                className="inline-block mb-8 text-indigo-600 hover:text-indigo-800 transition-colors duration-200"
            >
                ← Back to Posts
            </Link>
            <motion.div
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={container}
                initial="hidden"
                animate="show"
            >
                {
                    userPosts.length === 0 ? (<div>No Posts</div>) : (


                        userPosts.map((post, index) => (
                            <motion.div
                                key={post._id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <PostCard
                                    id={post._id}
                                    title={post.title}
                                    description={post.content}
                                    imageUrl={post.coverImageUrl}
                                    autherId={post.autherId}
                                />
                            </motion.div>
                        ))

                    )
                }
            </motion.div>
        </div>
    );
};

export default UserCardList;