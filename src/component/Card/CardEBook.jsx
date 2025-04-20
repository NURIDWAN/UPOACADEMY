import React from 'react';

export default function CardEBook({ title, description, imageUrl, price, author }) {
    return (
        <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg">
            <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
            <div className="p-4">
                <h3 className="text-xl font-semibold text-white mb-2">{title || "eBook Title"}</h3>
                <p className="text-gray-300 text-sm mb-4">{description || "eBook description"}</p>
                <div className="flex justify-between items-center">
                    <span className="text-blue-400 font-bold">{price || "$0.00"}</span>
                    <span className="text-gray-400 text-sm">By {author || "Unknown Author"}</span>
                </div>
            </div>
        </div>
    );
}

