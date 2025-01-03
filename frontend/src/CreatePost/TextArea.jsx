import React from 'react';

export const TextArea = ({ label, id, className = '', ...props }) => {
    return (
        <div className="group">
            <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1.5 group-hover:text-cream-600 transition-colors">
                {label}
            </label>
            <textarea
                id={id}
                className={`w-full px-3 py-2 rounded-lg border border-gray-300 
          bg-white/50 backdrop-blur-sm
          focus:ring-2 focus:ring-cream-200 focus:border-transparent
          hover:border-cream-300
          transition-all duration-300 ease-in-out
          placeholder:text-gray-400 resize-none
          ${className}`}
                {...props}
            />
        </div>
    );
};