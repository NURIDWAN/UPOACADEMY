import React from "react";
import CardEBook from "../Card/CardEBook";

export default function NewEBook({ Title, Description, seeAllSrc, EBook }) {
    return (
        <div className="container px-4 py-8 mx-auto overflow-x-hidden">
            <div className="text-center">
                <h2 className="mb-2 text-3xl font-semibold text-gray-200">{Title}</h2>
                <p className="mb-4 text-gray-200">
                    {Description}
                </p>

                <a href={seeAllSrc} className="block mt-4 text-blue-500 hover:text-blue-700">See All→</a>
            </div>

            <div className="grid grid-cols-1 gap-8 px-4 py-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {EBook && EBook.length > 0 ? (
                    EBook.map((book, index) => (
                        <CardEBook key={index} {...book} />
                    ))
                ) : (
                    <>
                        <CardEBook />
                        <CardEBook />
                        <CardEBook />
                        <CardEBook />
                    </>
                )}
            </div>
        </div>
    );
}