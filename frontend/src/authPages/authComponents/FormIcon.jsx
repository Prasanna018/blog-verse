import { motion } from 'framer-motion'

const FormIcon = ({ icon: Icon }) => {
    if (!Icon) return null

    return (
        <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
        >
            <Icon
                size={20}
                className="text-indigo-500 transition-colors group-hover:text-indigo-600"
                aria-hidden="true"
            />
        </motion.div>
    )
}

export default FormIcon