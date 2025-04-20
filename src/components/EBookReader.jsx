import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

const EBookReader = ({ book }) => {
    
    const [currentChapterIndex, setCurrentChapterIndex] = useState(0);

    // If book is not found or doesn't have chapters, display an error message
    if (!book || !book.chapters || book.chapters.length === 0) {
        return <div className="text-center text-red-500">eBook not found or has no content.</div>;
    }

    const currentChapter = book.chapters[currentChapterIndex];

    const goToNextChapter = () => {
        if (currentChapterIndex < book.chapters.length - 1) {
            setCurrentChapterIndex(currentChapterIndex + 1);
        }
    };

    const goToPreviousChapter = () => {
        if (currentChapterIndex > 0) {
            setCurrentChapterIndex(currentChapterIndex - 1);
        }
    };

    return (
        <div className="max-w-3xl p-4 mx-auto">
            <h1 className="mb-4 text-2xl font-bold">{book.title}</h1>
            <h2 className="mb-2 text-xl font-semibold">{currentChapter.title}</h2>
            <div className="mb-4 prose-sm prose sm:prose lg:prose-lg xl:prose-xl">{currentChapter.content}</div>
            <div className="flex justify-between mt-4">
                <button 
                    onClick={goToPreviousChapter} 
                    disabled={currentChapterIndex === 0}
                    className="px-4 py-2 text-white bg-blue-500 rounded disabled:bg-gray-300"
                >
                    Previous Chapter
                </button>
                <button 
                    onClick={goToNextChapter} 
                    disabled={currentChapterIndex === book.chapters.length - 1}
                    className="px-4 py-2 text-white bg-blue-500 rounded disabled:bg-gray-300"
                >
                    Next Chapter
                </button>
            </div>
        </div>
    );
};

export default EBookReader;