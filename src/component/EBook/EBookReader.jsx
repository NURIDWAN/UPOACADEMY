
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaBook, FaChevronRight, FaChevronDown, FaBookOpen, FaInfoCircle, FaTimes } from 'react-icons/fa';
import { IoMdMenu } from 'react-icons/io';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const EBookReader = ({ book }) => {
    const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const [currentSubsectionIndex, setCurrentSubsectionIndex] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const [readingProgress, setReadingProgress] = useState(0);

    useEffect(() => {
        // Hitung total subbab dan subbab yang telah dibaca
        let totalSubsections = 0;
        let readSubsections = 0;

        book.chapters.forEach((chapter, chapterIdx) => {
            chapter.sections.forEach((section, sectionIdx) => {
                if (section.subsections && section.subsections.length > 0) {
                    totalSubsections += section.subsections.length;
                    if (chapterIdx < currentChapterIndex || (chapterIdx === currentChapterIndex && sectionIdx < currentSectionIndex)) {
                        readSubsections += section.subsections.length;
                    } else if (chapterIdx === currentChapterIndex && sectionIdx === currentSectionIndex) {
                        readSubsections += currentSubsectionIndex !== null ? currentSubsectionIndex + 1 : 0;
                    }
                } else {
                    totalSubsections += 1;
                    if (chapterIdx < currentChapterIndex || (chapterIdx === currentChapterIndex && sectionIdx <= currentSectionIndex)) {
                        readSubsections += 1;
                    }
                }
            });
        });

        const progress = (readSubsections / totalSubsections) * 100;
        setReadingProgress(Math.round(progress));
    }, [currentChapterIndex, currentSectionIndex, currentSubsectionIndex, book.chapters]);

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
        if (window.innerWidth < 768) {
            setIsSidebarOpen(false);
        }
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
                        <div key={index} className="mb-6">
                            <div className="flex justify-center ">
                                <img 
                                    src={item.src} 
                                    alt={item.alt} 
                                    className="h-auto max-w-full rounded-lg shadow-lg" 
                                    style={{ maxHeight: '38vh' }} // Batasi tinggi maksimum gambar
                                />
                            </div>
                            {item.caption && (
                                <p className="mt-2 text-sm text-center text-gray-400">
                                    {item.caption}
                                </p>
                            )}
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
                        <div key={index} className="p-4 mb-4 text-blue-200 bg-blue-900 border-l-4 border-blue-500">
                            <p className="flex items-center font-bold"><FaInfoCircle className="mr-2" /> Note</p>
                            <p>{item.content}</p>
                        </div>
                    );
                default:
                    console.warn('Unknown content type:', item.type);
                    return null;
            }
        });
    };

    const ReadingProgress = () => (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-700">
            <div className="flex items-center justify-between mb-2 text-sm text-gray-300">
                <span>Reading Progress</span>
                <span>{readingProgress}%</span>
            </div>
            <div className="w-full bg-gray-600 rounded-full h-2.5">
                <div
                    className="bg-blue-400 h-2.5 rounded-full"
                    style={{ width: `${readingProgress}%` }}
                ></div>
            </div>
        </div>
    );

    return (
        <div className="flex h-screen bg-gray-900 ">
            {/* Overlay untuk mobile ketika sidebar terbuka */}
            {isSidebarOpen && (
                <div 
                    className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}

            {/* Sidebar toggle button untuk mobile */}
            <button
                className="fixed z-30 p-2 text-white bg-blue-600 rounded-full shadow-lg md:hidden top-16 left-4" // Ubah top-4 menjadi top-16
                onClick={toggleSidebar}
            >
                {isSidebarOpen ? <FaTimes size={24} /> : <IoMdMenu size={24} />}
            </button>

            {/* Left side: Table of Contents */}
            <div className={`w-64 bg-gray-800 border-r border-gray-700 overflow-y-auto transition-all duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} fixed md:translate-x-0 md:static h-full z-30 flex flex-col`}>
                <div className="sticky top-0 z-10 flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700">
                    <h3 className="text-lg font-semibold text-white">Table of Contents</h3>
                    <FaBook className="text-blue-400" size={20} />
                </div>
                <ul className="flex-grow p-4 overflow-y-auto">
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
                <ReadingProgress />
            </div>

            {/* Right side: eBook content */}
            <div className={`flex-1 p-4 pt-16 bg-gray-900 md:p-8 md:pt-20 transition-all duration-300 ease-in-out overflow-hidden flex flex-col`}>
                <div className="max-w-3xl mx-auto w-full flex-shrink-0">
                    <h1 className="flex items-center mb-6 text-3xl font-bold text-white">
                        <FaBookOpen className="mr-3 text-blue-400" size={32} />
                        {book.title}
                    </h1>
                    <h2 className="mb-4 text-2xl font-semibold text-gray-200">{currentChapter.title}</h2>
                    <h3 className="mb-3 text-xl font-semibold text-gray-300">{currentSection.title}</h3>
                    {currentSubsectionIndex !== null && (
                        <h4 className="mb-2 text-lg font-semibold text-gray-400">{currentSection.subsections[currentSubsectionIndex].title}</h4>
                    )}
                </div>
                <div className="overflow-y-auto flex-grow">
                    <div className="max-w-3xl mx-auto">
                        <div className="mb-8 prose-sm prose sm:prose lg:prose-lg xl:prose-xl prose-invert">
                            {renderContent(currentContent)}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EBookReader;