import { motion } from 'framer-motion';

const FormTextarea = ({ label, id, ...props }) => {
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
            <textarea
                id={id}
                className="w-full px-4 py-2 rounded-lg border-2 border-gray-200 focus:border-purple-500 focus:outline-none transition-colors"
                {...props}
            />
        </motion.div>
    );
};

export default FormTextarea;