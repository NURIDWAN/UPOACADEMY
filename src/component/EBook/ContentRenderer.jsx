import React from 'react';
import { FaInfoCircle } from 'react-icons/fa';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const ContentRenderer = ({ content }) => {
    if (!Array.isArray(content)) {
        console.error('Content is not an array:', content);
        return <p className="text-red-400">Error: Invalid content format</p>;
    }

    return (
        <div className="mb-8 prose-sm prose sm:prose lg:prose-lg xl:prose-xl prose-invert">
            {content.map((item, index) => {
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
                                        style={{ maxHeight: '38vh' }}
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
            })}
        </div>
    );
};

export default React.memo(ContentRenderer);