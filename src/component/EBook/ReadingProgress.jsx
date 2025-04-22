import React from 'react';

const ReadingProgress = ({ progress }) => (
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-900">
        <div className="flex items-center justify-between mb-2 text-sm text-gray-300">
            <span>Reading Progress</span>
            <span>{progress}%</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div
                className="bg-blue-400 h-2.5 rounded-full"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    </div>
);

export default ReadingProgress;