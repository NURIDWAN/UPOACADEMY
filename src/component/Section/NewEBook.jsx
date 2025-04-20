import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import CardEBook from "../Card/CardEBook";

const dummyEBooks = [
  {
    id: 1,
    title: "Mastering React Hooks",
    description: "A comprehensive guide to React Hooks and functional components.",
    imageUrl: "https://example.com/react-hooks.jpg",
    price: "$19.99",
    author: "John Doe"
  },
  // ... other books
];

export default function NewEBook({ Title, Description, seeAllSrc, EBook }) {
    return (
        <div className="container px-4 py-8 mx-auto overflow-x-hidden">
            <div className="text-center">
                <h2 className="mb-2 text-3xl font-semibold text-gray-200">{Title || "Featured eBooks"}</h2>
                <p className="mb-4 text-gray-200">
                    {Description || "Expand your coding knowledge with our curated collection of eBooks."}
                </p>
                <Link to={seeAllSrc || "/ebooks"} className="inline-block mt-4 text-blue-500 hover:text-blue-700">
                    See All →
                </Link>
            </div>

            <div className="grid grid-cols-1 gap-8 px-4 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {EBook && EBook.length > 0 ? (
                    EBook.map((book, index) => (
                        <Link key={index} to={`/ebook/${book.id}`} className="block transition duration-300 transform hover:scale-105">
                            <CardEBook
                                title={book.title}
                                description={book.description}
                                imageUrl={book.imageUrl}
                                price={book.price}
                                author={book.author}
                            />
                        </Link>
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-400">
                        No eBooks available at the moment.
                    </div>
                )}
            </div>
        </div>
    );
}