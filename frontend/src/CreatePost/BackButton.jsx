import React from 'react';
import { ArrowLeft } from 'lucide-react';

export const BackButton = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="absolute left-4 top-4 p-2 rounded-full bg-white/80 backdrop-blur-sm
        hover:bg-cream-100 transition-all duration-300
        shadow-md hover:shadow-lg transform hover:-translate-y-0.5
        text-cream-600 hover:text-cream-700
        group flex items-center gap-2"
        >
            <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
            <span className="text-sm font-medium opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-300">Back</span>
        </button>
    );
};