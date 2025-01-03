import { motion } from 'framer-motion';
import { useRef } from 'react';
import ImagePreview from './ImagePreview';

const ImageSelector = ({ label, id, value, onChange, ...props }) => {
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                onChange({
                    target: {
                        name: props.name,
                        value: reader.result
                    }
                });
            };
            reader.readAsDataURL(file);
        }
    };


    const handleClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <motion.div
            className="mb-6"
            whileHover={{ scale: 1.01 }}
            transition={{ type: "spring", stiffness: 300 }}
        >
            <label
                htmlFor={id}
                className="block text-gray-700 text-sm font-semibold mb-2"
            >
                {label}
            </label>

            <ImagePreview src={value} alt="Cover image preview" />

            <motion.button
                type="button"
                onClick={handleClick}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-2 w-full py-2 px-4 border-2 border-dashed border-purple-300 rounded-lg text-purple-600 hover:bg-purple-50 transition-colors"
            >
                Choose Image
            </motion.button>

            <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
                {...props}
            />
        </motion.div>
    );
};

export default ImageSelector;