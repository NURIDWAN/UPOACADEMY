import React from 'react';

export default function CardEBook({ title, description, imageUrl, price, author }) {
    return (
        <article className="relative overflow-hidden transition bg-gray-800 rounded-lg shadow-sm hover:shadow-lg h-[400px] group">
            <img
                alt={title}
                src={imageUrl}
                className="absolute inset-0 object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent"></div>

            <div className="absolute inset-x-0 bottom-0 p-6 transition-all duration-300 ease-in-out transform translate-y-2 group-hover:translate-y-0">
                <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>

                <p className="mb-4 text-sm text-gray-300 transition-opacity duration-300 opacity-0 group-hover:opacity-100 line-clamp-3">
                    {description}
                </p>

                <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-white">{price}</span>
                    <span className="text-xs text-gray-400">By {author}</span>
                </div>
            </div>
        </article>
    );
}

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

