import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiEdit2, FiCheck, FiX } from 'react-icons/fi';
import { ProfileField } from './ProfileField';
import { ProfileAvatar } from './ProfileAvatar';
import { useProfile } from './hook/useProfile';

const ProfilePage = () => {
    const {
        isEditing,
        setIsEditing,
        profile,
        tempProfile,
        setTempProfile,
        handleInputChange,
        handleSave,
        handleCancel
    } = useProfile();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-lg"
        >
            <div className="relative">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => !isEditing && setIsEditing(true)}
                    className="absolute top-0 right-0 p-2 rounded-full hover:bg-gray-100"
                >
                    <FiEdit2 className="w-5 h-5 text-gray-600" />
                </motion.button>

                <div className="space-y-6">
                    <ProfileAvatar

                        profile={isEditing ? tempProfile : profile}
                        setProfile={setTempProfile}
                        isEditing={isEditing}
                    />

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={isEditing ? 'editing' : 'viewing'}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="space-y-4"
                        >
                            <ProfileField
                                label="Username"
                                name="username"
                                value={isEditing ? tempProfile.username : profile.username}
                                onChange={handleInputChange}
                                isEditing={isEditing}
                            />

                            <ProfileField
                                label="Email"
                                name="email"
                                type="email"
                                value={isEditing ? tempProfile.email : profile.email}
                                onChange={handleInputChange}
                                isEditing={isEditing}
                            />

                            <ProfileField
                                label="Bio"
                                name="bio"
                                type="textarea"
                                value={isEditing ? tempProfile.bio : profile.bio}
                                onChange={handleInputChange}
                                isEditing={isEditing}
                            />
                        </motion.div>
                    </AnimatePresence>

                    {isEditing && (
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="flex justify-end space-x-3 mt-6"
                        >
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleCancel}
                                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 flex items-center"
                            >
                                <FiX className="w-4 h-4 mr-2" />
                                Cancel
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleSave}
                                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 flex items-center"
                            >

                                <FiCheck className="w-4 h-4 mr-2" />
                                Save Changes
                            </motion.button>
                        </motion.div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ProfilePage;