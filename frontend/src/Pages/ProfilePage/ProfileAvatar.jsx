import React from 'react';
import { motion } from 'framer-motion';
import { FiCamera } from 'react-icons/fi';

export const ProfileAvatar = ({ profile, setProfile, isEditing }) => {
    const handleAvatarChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setProfile(prev => ({ ...prev, avatar: reader.result }));
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            className="flex justify-center"
        >
            <div className="relative group">
                <motion.div
                    whileHover={isEditing ? { scale: 1.05 } : {}}
                    className="w-32 h-32 rounded-full overflow-hidden bg-gray-100 border-4 border-white shadow-lg"
                >
                    {profile.avatar ? (
                        <img
                            src={profile.avatar}
                            alt="Profile"
                            className="w-full h-full object-cover"
                        />
                    ) : (
                        <div className="w-full h-full flex items-center justify-center bg-blue-100 text-blue-500">
                            {profile.username.charAt(0).toUpperCase()}
                        </div>
                    )}
                </motion.div>

                {isEditing && (
                    <>
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleAvatarChange}
                            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-white opacity-0 group-hover:opacity-100 transition-opacity rounded-full"
                        >
                            <FiCamera className="w-6 h-6 mr-2" />
                            Change Photo
                        </motion.div>
                    </>
                )}
            </div>
        </motion.div>
    );
};