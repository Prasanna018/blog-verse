import { motion } from 'framer-motion'

const FormInput = ({ type, name, placeholder, value, onChange }) => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
        >

            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className="w-full px-4 py-3 pl-12 rounded-lg border-2 border-gray-200 
                 bg-white/70 backdrop-blur-sm outline-none transition-all duration-200
                 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200
                 hover:border-indigo-300"
            />
        </motion.div>
    )
}

export default FormInput