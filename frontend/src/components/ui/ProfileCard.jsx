import React from 'react';
import { motion } from 'framer-motion';
import {
  User,
  Mail,
  BookOpen,
  Heart,
  Settings,
  LogOut
} from 'lucide-react';
import useAuthUser from '../../hook/useAuthUser';

import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { BaseUrl } from '../../common/common';

const ProfileCard = ({ onClose }) => {
  const navigate = useNavigate()
  const { authUser, authJwt } = useAuthUser()
  const Auth = authUser && authJwt;
  const handleLogout = async () => {
    console.log('logout');
    try {
      const response = await axios.get(`${BaseUrl}/auth/logout`, {
        withCredentials: true
      })
      if (response.data.success) {
        toast.success(response.data.message);
        localStorage.removeItem('blog');
        navigate('/login')

      } else {
        toast.error(response.data.message)
      }



    } catch (error) {
      toast.error(error.response.data.message)

    }
  }



  const menuItems = [

    { icon: User, label: 'My Profile', href: '/user-profile', },
    { icon: BookOpen, label: 'My Blogs', href: '/users-posts' },
    { icon: Heart, label: 'Favorites', href: '#' },
    { icon: Mail, label: 'Messages', href: '#' },
    { icon: Settings, label: 'Settings', href: '#' },
    { icon: LogOut, label: 'Logout', href: '', onClick: handleLogout }
  ]


  return (

    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="mt-2 bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden md:w-64 w-full"
    >
      <div className="p-4 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-secondary flex items-center justify-center">
            <User className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">{authUser.username}</h3>
            <p className="text-sm text-gray-600">{authUser.email}</p>
          </div>
        </div>
      </div>

      <nav className="p-2">
        {menuItems.map((item, index) => (
          <motion.a
            key={index}
            href={item.href}

            onClick={(e) => {
              if (item.onClick) {
                e.preventDefault();
                Auth ? item.onClick() : "";
              }
            }}

            className="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
            whileHover={{ x: 4 }}
          >
            <item.icon className="w-5 h-5 text-gray-500" />
            <span>{item.label}</span>
          </motion.a>
        ))}
      </nav>
    </motion.div>
  );
};

export default ProfileCard;