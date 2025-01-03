import React from 'react';
import { motion } from 'framer-motion';

export const ProfileField = ({ label, name, type = 'text', value, onChange, isEditing }) => {
    const inputClasses = "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 bg-white";
    const viewClasses = "mt-1 text-gray-900";

    return (
        <div>
            <label className="block text-sm font-medium text-gray-700">
                {label}
            </label>
            {isEditing ? (
                type === 'textarea' ? (
                    <motion.textarea
                        initial={{ scale: 0.98 }}
                        animate={{ scale: 1 }}
                        name={name}
                        value={value}
                        onChange={onChange}
                        rows="3"
                        className={inputClasses}
                    />
                ) : (
                    <motion.input
                        initial={{ scale: 0.98 }}
                        animate={{ scale: 1 }}
                        type={type}
                        name={name}
                        value={value}
                        onChange={onChange}
                        className={inputClasses}
                    />
                )
            ) : (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className={viewClasses}
                >
                    {type === 'textarea' ? (
                        <p className="whitespace-pre-wrap">{value}</p>
                    ) : (
                        value
                    )}
                </motion.div>
            )}
        </div>
    );
};