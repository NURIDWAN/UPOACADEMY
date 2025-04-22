import React from 'react';

const CardArticle = React.memo(({ title, description, imageUrl, date, readTime, author, category }) => {
  return (
    <article className="flex flex-col overflow-hidden text-gray-100 bg-gray-800 rounded-lg shadow-lg">
      <div className="flex-shrink-0">
        <img className="object-cover w-full h-48" src={imageUrl} alt={title} />
      </div>
      <div className="flex flex-col justify-between flex-1 p-6">
        <div className="flex-1">
          {category && (
            <p className="text-sm font-medium text-blue-400">
              <span className="hover:underline">{category}</span>
            </p>
          )}
          <div className="block mt-2">
            <p className="text-xl font-semibold text-white">{title}</p>
            <p className="mt-3 text-base text-gray-400">{description}</p>
          </div>
        </div>
        <div className="flex items-center mt-6">
          {author && (
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {author.image ? (
                  <img className="w-10 h-10 rounded-full" src={author.image} alt={author.name} />
                ) : (
                  <div className="flex items-center justify-center w-10 h-10 bg-gray-600 rounded-full">
                    <span className="text-xl text-white">{author.name.charAt(0)}</span>
                  </div>
                )}
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-300">
                  <span className="hover:underline">{author.name}</span>
                </p>
                <div className="flex space-x-1 text-sm text-gray-400">
                  {date && <time dateTime={date}>{date}</time>}
                  {readTime && (
                    <>
                      <span aria-hidden="true">&middot;</span>
                      <span>{readTime}</span>
                    </>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </article>
  );
});



export default CardArticle;