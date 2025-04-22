import React from 'react';
import { FaBook, FaChevronRight, FaChevronDown, FaTimes } from 'react-icons/fa';
import { IoMdMenu } from 'react-icons/io';

const TableOfContents = ({ book, currentChapterIndex, currentSectionIndex, currentSubsectionIndex, isSidebarOpen, toggleSidebar, navigateTo, readingProgress }) => {
    return (
        <>
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}

            <button
                className="fixed z-30 p-2 text-white bg-blue-600 rounded-full shadow-lg md:hidden top-4 left-4"
                onClick={toggleSidebar}
            >
                {isSidebarOpen ? <FaTimes size={24} /> : <IoMdMenu size={24} />}
            </button>

            <div className={`w-64 md:w-80 bg-gray-900 border-r border-gray-700 overflow-y-auto transition-all duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed md:relative md:translate-x-0 h-full z-30 flex flex-col`}>
                <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-gray-900 border-b border-gray-700">
                    <h3 className="text-lg font-semibold text-white">Table of Contents</h3>
                    <FaBook className="text-blue-400" size={20} />
                </div>
                <ul className="flex-grow p-4 overflow-y-auto">
                    {book.chapters.map((chapter, chapterIndex) => (
                        <li key={chapterIndex} className="mb-4">
                            <button
                                onClick={() => navigateTo(chapterIndex, 0, null)}
                                className={`flex items-center justify-between w-full text-left font-semibold ${currentChapterIndex === chapterIndex ? 'text-blue-400' : 'text-gray-300'}`}
                            >
                                <span>{chapter.title}</span>
                                <FaChevronRight size={12} className={currentChapterIndex === chapterIndex ? 'transform rotate-90' : ''} />
                            </button>
                            {currentChapterIndex === chapterIndex && (
                                <ul className="mt-2 ml-4">
                                    {chapter.sections.map((section, sectionIndex) => (
                                        <li key={sectionIndex} className="mb-2">
                                            <button
                                                onClick={() => navigateTo(chapterIndex, sectionIndex, null)}
                                                className={`flex items-center justify-between w-full text-left ${currentChapterIndex === chapterIndex && currentSectionIndex === sectionIndex ? 'text-blue-400' : 'text-gray-400'}`}
                                            >
                                                <span>{section.title}</span>
                                                {section.subsections && <FaChevronDown size={12} className={currentSectionIndex === sectionIndex ? 'transform rotate-180' : ''} />}
                                            </button>
                                            {currentSectionIndex === sectionIndex && section.subsections && (
                                                <ul className="mt-1 ml-4">
                                                    {section.subsections.map((subsection, subsectionIndex) => (
                                                        <li key={subsectionIndex}>
                                                            <button
                                                                onClick={() => navigateTo(chapterIndex, sectionIndex, subsectionIndex)}
                                                                className={`w-full text-left text-sm ${currentChapterIndex === chapterIndex && currentSectionIndex === sectionIndex && currentSubsectionIndex === subsectionIndex ? 'text-blue-400' : 'text-gray-500'}`}
                                                            >
                                                                {subsection.title}
                                                            </button>
                                                        </li>
                                                    ))}
                                                </ul>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
                <div className="sticky bottom-0 left-0 right-0 p-4 bg-gray-900 border-t border-gray-700">
                    <div className="flex items-center justify-between mb-2 text-sm text-gray-300">
                        <span>Reading Progress</span>
                        <span>{readingProgress}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2.5">
                        <div
                            className="bg-blue-400 h-2.5 rounded-full"
                            style={{ width: `${readingProgress}%` }}
                        ></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default React.memo(TableOfContents);