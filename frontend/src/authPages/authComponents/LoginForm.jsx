import { useState } from 'react'
import { motion } from 'framer-motion'
import { UserCircle2, Mail, Lock, ArrowRight, LogIn } from 'lucide-react'
import FormInput from './FormInput'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { BaseUrl } from '../../common/common'

const LoginForm = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({

        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log('Form submitted:', formData)

        try {
            // console.log('Form submitted:', formData)
            const response = await axios.post(`${BaseUrl}/auth/login`, formData, {
                withCredentials: true
            })
            console.log(response.data)
            if (response.data.success) {
                toast.success(response.data.message);
                localStorage.setItem('blog', JSON.stringify(response.data.user))

                navigate('/')

            }
            else {
                toast.error(response.data.message)
            }

        } catch (error) {
            toast.error(error.response.data.message)

        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-2xl w-full max-w-md relative overflow-hidden"
        >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-white opacity-90"></div>

            <div className="relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="text-4xl font-bold text-gray-800 mb-2 text-center background-animate"
                >
                    Login
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-600 text-center mb-8"
                >
                    Welcome Back!
                </motion.p>

                <form onSubmit={handleSubmit} className="space-y-6">

                    <FormInput
                        icon={Mail}
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    <FormInput
                        icon={Lock}
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                    />

                    <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full bg-gradient-to-r from-violet-600 to-indigo-600 text-white py-3 rounded-lg 
                     font-semibold flex items-center justify-center gap-2 hover:opacity-90 
                     transition-all duration-300 shadow-lg hover:shadow-xl"
                        type="submit"
                    >
                        Sign Up
                        <ArrowRight size={20} />
                    </motion.button>
                </form>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="text-center mt-6 text-gray-600"
                >
                    New To BlogVerse?
                    <Link to='/signup' className="text-indigo-600 hover:text-indigo-500 ml-1 font-medium">
                        Signin
                    </Link>
                </motion.p>
            </div>
        </motion.div>
    )
}

export default LoginForm