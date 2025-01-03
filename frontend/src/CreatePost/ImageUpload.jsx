import React from 'react';
import { ImagePlus, X } from 'lucide-react';

export const ImageUpload = ({ previewUrl, onImageChange, onRemoveImage }) => {
    return (
        <div className="group">
            <label className="block text-sm font-medium text-gray-700 mb-2 group-hover:text-cream-600 transition-colors">
                Cover Image
            </label>
            <div className="relative">
                <input
                    type="file"
                    id="coverImage"
                    accept="image/*"
                    onChange={onImageChange}
                    className="hidden"
                />
                <label
                    htmlFor="coverImage"
                    className={`relative flex items-center justify-center w-full h-32 
            border-2 border-dashed rounded-lg cursor-pointer
            ${previewUrl ? 'border-transparent' : 'border-gray-300 hover:border-cream-300'}
            transition-all duration-300 group/upload`}
                >
                    {previewUrl ? (
                        <div className="relative w-full h-full">
                            <img
                                src={previewUrl}
                                alt="Preview"
                                className="w-full h-full object-cover rounded-lg"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/upload:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                                <p className="text-white text-sm">Click to change image</p>
                            </div>
                            {onRemoveImage && (
                                <button
                                    type="button"
                                    onClick={onRemoveImage}
                                    className="absolute -top-2 -right-2 p-1 bg-red-500 rounded-full text-white 
                    hover:bg-red-600 transition-colors z-10"
                                >
                                    <X size={16} />
                                </button>
                            )}
                        </div>
                    ) : (
                        <div className="text-center">
                            <ImagePlus className="mx-auto h-8 w-8 text-gray-400 group-hover:text-cream-500 transition-colors" />
                            <p className="mt-1 text-sm text-gray-500 group-hover:text-cream-600 transition-colors">
                                Click to upload cover image
                            </p>
                        </div>
                    )}
                </label>
            </div>
        </div>
    );
};