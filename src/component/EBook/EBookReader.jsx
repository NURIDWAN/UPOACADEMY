import React, { useState, useEffect } from 'react';
import { FaBook, FaChevronRight, FaChevronDown, FaBookOpen, FaInfoCircle, FaTimes, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { IoMdMenu } from 'react-icons/io';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import TableOfContents from './TableOfContents';
import NavigationButtons from './NavigationButtons';
import ContentRenderer from './ContentRenderer';

const EBookReader = ({ book }) => {
    const [currentChapterIndex, setCurrentChapterIndex] = useState(0);
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const [currentSubsectionIndex, setCurrentSubsectionIndex] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const [readingProgress, setReadingProgress] = useState(0);

    useEffect(() => {
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

    const navigateTo = (chapterIndex, sectionIndex, subsectionIndex = null, isDropdownClick = false) => {
        setCurrentChapterIndex(chapterIndex);
        setCurrentSectionIndex(sectionIndex);
        setCurrentSubsectionIndex(subsectionIndex);
        if (window.innerWidth < 768 && !isDropdownClick) {
            setIsSidebarOpen(false);
        }
    };

    const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

    const handlePrevSubsection = () => {
        if (currentSubsectionIndex !== null && currentSubsectionIndex > 0) {
            setCurrentSubsectionIndex(currentSubsectionIndex - 1);
        } else if (currentSectionIndex > 0) {
            const prevSection = currentChapter.sections[currentSectionIndex - 1];
            setCurrentSectionIndex(currentSectionIndex - 1);
            setCurrentSubsectionIndex(prevSection.subsections ? prevSection.subsections.length - 1 : null);
        } else if (currentChapterIndex > 0) {
            const prevChapter = book.chapters[currentChapterIndex - 1];
            const lastSectionIndex = prevChapter.sections.length - 1;
            const lastSubsectionIndex = prevChapter.sections[lastSectionIndex].subsections
                ? prevChapter.sections[lastSectionIndex].subsections.length - 1
                : null;
            setCurrentChapterIndex(currentChapterIndex - 1);
            setCurrentSectionIndex(lastSectionIndex);
            setCurrentSubsectionIndex(lastSubsectionIndex);
        }
    };

    const handleNextSubsection = () => {
        if (currentSubsectionIndex !== null && currentSubsectionIndex < currentSection.subsections.length - 1) {
            setCurrentSubsectionIndex(currentSubsectionIndex + 1);
        } else if (currentSectionIndex < currentChapter.sections.length - 1) {
            const nextSection = currentChapter.sections[currentSectionIndex + 1];
            setCurrentSectionIndex(currentSectionIndex + 1);
            setCurrentSubsectionIndex(nextSection.subsections ? 0 : null);
        } else if (currentChapterIndex < book.chapters.length - 1) {
            const nextChapter = book.chapters[currentChapterIndex + 1];
            setCurrentChapterIndex(currentChapterIndex + 1);
            setCurrentSectionIndex(0);
            setCurrentSubsectionIndex(nextChapter.sections[0].subsections ? 0 : null);
        }
    };

    return (
        <div className="flex h-screen bg-gray-900">
            <TableOfContents
                book={book}
                currentChapterIndex={currentChapterIndex}
                currentSectionIndex={currentSectionIndex}
                currentSubsectionIndex={currentSubsectionIndex}
                isSidebarOpen={isSidebarOpen}
                toggleSidebar={toggleSidebar}
                navigateTo={navigateTo}
                readingProgress={readingProgress}
            />
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 z-20 bg-black bg-opacity-50 md:hidden"
                    onClick={toggleSidebar}
                ></div>
            )}

            <button
                className="fixed z-30 p-2 text-white bg-blue-600 rounded-full shadow-lg md:hidden top-16 left-4"
                onClick={toggleSidebar}
            >
                {isSidebarOpen ? <FaTimes size={24} /> : <IoMdMenu size={24} />}
            </button>

            <div className={`flex-1 flex flex-col overflow-hidden ${isSidebarOpen ? 'md:ml-64' : ''}`}>
                <div className="p-4 bg-gray-900 md:p-8">
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
                <div className="flex-1 p-4 overflow-y-auto md:p-8">
                    <div className="max-w-3xl mx-auto">
                        <div className="mb-8 prose prose-invert">
                            <ContentRenderer content={currentContent} />
                        </div>
                    </div>
                </div>
            </div>

            <NavigationButtons
                handlePrevSubsection={handlePrevSubsection}
                handleNextSubsection={handleNextSubsection}
            />
        </div>
    );
};

export default EBookReader;
