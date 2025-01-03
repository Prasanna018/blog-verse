import { motion } from 'framer-motion';

const ImagePreview = ({ src, alt }) => {
    return (
        <div className="mt-2 relative w-full aspect-video rounded-lg overflow-hidden bg-gray-100">
            {src ? (
                <motion.img
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover"
                />
            ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                    No image selected
                </div>
            )}
        </div>
    );
};

export default ImagePreview;