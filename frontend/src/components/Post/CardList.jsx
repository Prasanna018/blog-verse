import { motion } from 'framer-motion';
import React, { Suspense } from 'react';
const PostCard = React.lazy(() => import('./PostCard'));

import useGetPosts from '../../hook/useGetPosts';


const container = {

    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const CardList = () => {
    const { posts } = useGetPosts()

    // console.log(posts)


    return (
        (< div id='card' className="min-h-fit bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8" >
            <motion.div
                className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                variants={container}
                initial="hidden"
                animate="show"
            >
                {posts.length === 0 ? (<div >No Posts</div>) : (

                    posts.map((post, index) => (
                        <Suspense key={post._id} fallback={
                            <div>Loading......</div>
                        }>

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
                                    onDeleteSuccess={post._id}
                                />
                            </motion.div>
                        </Suspense>
                    ))

                )}

            </motion.div>
        </div >)


    );
};

export default CardList;