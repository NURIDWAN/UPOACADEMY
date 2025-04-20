import React from 'react';

const CardArticle = React.memo(({ title, description, imageUrl, date, readTime }) => {
  return (
    <article className="flex flex-col overflow-hidden rounded-lg shadow transition hover:shadow-lg h-full bg-gray-800 border border-gray-700">
      <div className="h-48 overflow-hidden">
        <img
          alt={title}
          src={imageUrl}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="flex flex-col flex-grow p-4 sm:p-6">
        <div className="flex-grow">
          <time dateTime={date} className="block text-xs text-gray-400 mb-2">
            {date}
          </time>

          <h3 className="text-lg font-semibold text-gray-100 mb-2">
            {title}
          </h3>

          <p className="text-sm/relaxed text-gray-300 line-clamp-3">
            {description}
          </p>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <span className="text-xs text-gray-400">{readTime}</span>
          <a href="#" className="text-blue-400 hover:text-blue-300 text-sm">Read More</a>
        </div>
      </div>
    </article>
  );
});

export default CardArticle;