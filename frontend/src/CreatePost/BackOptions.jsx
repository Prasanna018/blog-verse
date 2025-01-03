import React, { useState } from 'react';
import { ArrowLeft, Save, X, AlertTriangle } from 'lucide-react';

export const BackOptions = ({ onBack, onSaveDraft, hasChanges }) => {
    const [showConfirm, setShowConfirm] = useState(false);

    const handleBackClick = () => {
        if (hasChanges) {
            setShowConfirm(true);
        } else {
            onBack();
        }
    };

    return (
        <>
            <div className="absolute left-4 top-4 flex items-center gap-2">
                <button
                    onClick={handleBackClick}
                    className="p-2 rounded-full bg-white/80 backdrop-blur-sm
            hover:bg-cream-100 transition-all duration-300
            shadow-md hover:shadow-lg transform hover:-translate-y-0.5
            text-cream-600 hover:text-cream-700
            group flex items-center gap-2"
                >
                    <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
                    <span className="text-sm font-medium opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-300">
                        Back
                    </span>
                </button>

                {hasChanges && (
                    <button
                        onClick={onSaveDraft}
                        className="p-2 rounded-full bg-white/80 backdrop-blur-sm
              hover:bg-cream-100 transition-all duration-300
              shadow-md hover:shadow-lg transform hover:-translate-y-0.5
              text-cream-600 hover:text-cream-700
              group flex items-center gap-2"
                    >
                        <Save size={20} className="transition-transform group-hover:scale-110" />
                        <span className="text-sm font-medium opacity-0 group-hover:opacity-100 -ml-4 group-hover:ml-0 transition-all duration-300">
                            Save Draft
                        </span>
                    </button>
                )}
            </div>

            {/* Confirmation Dialog */}
            {showConfirm && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 max-w-md mx-4 shadow-xl animate-fade-in">
                        <div className="flex items-center gap-3 mb-4">
                            <AlertTriangle className="text-cream-500" size={24} />
                            <h3 className="text-lg font-semibold">Unsaved Changes</h3>
                        </div>
                        <p className="text-gray-600 mb-6">
                            You have unsaved changes. What would you like to do?
                        </p>
                        <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
                            <button
                                onClick={() => setShowConfirm(false)}
                                className="px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={onSaveDraft}
                                className="px-4 py-2 rounded-lg bg-cream-100 text-cream-600 hover:bg-cream-200 transition-colors"
                            >
                                Save Draft
                            </button>
                            <button
                                onClick={() => {
                                    setShowConfirm(false);
                                    onBack();
                                }}
                                className="px-4 py-2 rounded-lg bg-cream-500 text-white hover:bg-cream-600 transition-colors"
                            >
                                Discard & Leave
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};