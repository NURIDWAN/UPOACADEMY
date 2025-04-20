const book = {
    id: 1,
    title: "JavaScript ES6 Guide",
    chapters: [
        {
            title: "Introduction to ES6",
            sections: [
                {
                    title: "What is ES6?",
                    content: [
                        { type: 'text', content: "ES6, also known as ECMAScript 2015, is a major update to JavaScript that introduces many new features." },
                        { type: 'image', src: 'https://example.com/es6-logo.png', alt: 'ES6 Logo', caption: 'ECMAScript 2015 Logo' },
                        { type: 'code', language: 'javascript', content: 'const greeting = "Hello, ES6!";' },
                        { type: 'note', content: "ES6 is widely supported in modern browsers and can be used with transpilers for older environments." }
                    ]
                },
                // ... more sections ...
            ]
        },
        // ... more chapters ...
    ]
};
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaBook, FaChevronRight, FaChevronDown, FaBookOpen, FaInfoCircle } from 'react-icons/fa';
import { IoMdMenu } from 'react-icons/io';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const EBookReader = ({ book }) => {
    const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const [currentSubsectionIndex, setCurrentSubsectionIndex] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    if (!book || !book.chapters || book.chapters.length === 0) {
        return <div className="flex items-center justify-center h-screen text-xl text-red-400">eBook not found or has no content.</div>;
    }

    const currentChapter = book.chapters[currentChapterIndex];
    const currentSection = currentChapter.sections[currentSectionIndex];
    const currentContent = currentSubsectionIndex !== null 
        ? currentSection.subsections[currentSubsectionIndex].content 
        : currentSection.content;

    const navigateTo = (chapterIndex, sectionIndex, subsectionIndex = null) => {
        setCurrentChapterIndex(chapterIndex);
        setCurrentSectionIndex(sectionIndex);
        setCurrentSubsectionIndex(subsectionIndex);
    };

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const renderContent = (content) => {
        if (!Array.isArray(content)) {
            console.error('Content is not an array:', content);
            return <p className="text-red-400">Error: Invalid content format</p>;
        }

        return content.map((item, index) => {
            if (!item || typeof item !== 'object') {
                console.error('Invalid content item:', item);
                return null;
            }

            switch (item.type) {
                case 'text':
                    return <p key={index} className="mb-4 text-gray-300">{item.content}</p>;
                case 'image':
                    return (
                        <div key={index} className="mb-4">
                            <img src={item.src} alt={item.alt} className="max-w-full h-auto" />
                            {item.caption && <p className="text-sm text-gray-400 mt-2">{item.caption}</p>}
                        </div>
                    );
                case 'code':
                    return (
                        <div key={index} className="mb-4">
                            <SyntaxHighlighter language={item.language} style={atomOneDark}>
                                {item.content}
                            </SyntaxHighlighter>
                        </div>
                    );
                case 'note':
                    return (
                        <div key={index} className="bg-blue-900 border-l-4 border-blue-500 text-blue-200 p-4 mb-4">
                            <p className="font-bold flex items-center"><FaInfoCircle className="mr-2" /> Note</p>
                            <p>{item.content}</p>
                        </div>
                    );
                default:
                    console.warn('Unknown content type:', item.type);
                    return null;
            }
        });
    };

    return (
        <div className="flex h-screen bg-gray-900">
            {/* Sidebar toggle button for mobile */}
            <button 
                className="fixed z-20 p-2 text-white bg-blue-600 rounded-full shadow-lg md:hidden top-4 left-4"
                onClick={toggleSidebar}
            >
                <IoMdMenu size={24} />
            </button>

            {/* Left side: Table of Contents */}
            <div className={`w-64 bg-gray-800 border-r border-gray-700 overflow-y-auto transition-all duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 fixed md:static h-full z-10`}>
                <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700">
                    <h3 className="text-lg font-semibold text-white">Table of Contents</h3>
                    <FaBook className="text-blue-400" size={20} />
                </div>
                <ul className="p-4">
                    {book.chapters.map((chapter, chapterIndex) => (
                        <li key={chapterIndex} className="mb-4">
                            <button
                                onClick={() => navigateTo(chapterIndex, 0)}
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
                                                onClick={() => navigateTo(chapterIndex, sectionIndex)}
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
            </div>

            {/* Right side: eBook content */}
            <div className="flex-1 p-4 overflow-y-auto bg-gray-900 md:p-8 lg:p-12">
                <div className="max-w-3xl mx-auto">
                    <h1 className="flex items-center mb-6 text-3xl font-bold text-white">
                        <FaBookOpen className="mr-3 text-blue-400" size={32} />
                        {book.title}
                    </h1>
                    <h2 className="mb-4 text-2xl font-semibold text-gray-200">{currentChapter.title}</h2>
                    <h3 className="mb-3 text-xl font-semibold text-gray-300">{currentSection.title}</h3>
                    {currentSubsectionIndex !== null && (
                        <h4 className="mb-2 text-lg font-semibold text-gray-400">{currentSection.subsections[currentSubsectionIndex].title}</h4>
                    )}
                    <div className="mb-8 prose prose-sm sm:prose lg:prose-lg xl:prose-xl prose-invert">
                        {renderContent(currentContent)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EBookReader;