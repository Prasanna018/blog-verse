import React from 'react';

export const AnimatedBackground = () => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            <div className="absolute w-[600px] h-[600px] bg-cream-200/30 rounded-full blur-3xl animate-float top-[-300px] left-[-200px]"></div>
            <div className="absolute w-[500px] h-[500px] bg-cream-300/20 rounded-full blur-3xl animate-float-delayed right-[-100px] bottom-[-100px]"></div>
            <div className="absolute w-[300px] h-[300px] bg-cream-400/10 rounded-full blur-2xl animate-float top-[20%] right-[20%]"></div>
        </div>
    );
};