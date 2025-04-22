import React from 'react';
import { Link } from 'react-router-dom';
import CardArticle from "../Card/CardArticle";
import SidebarCategory from "../Sidebar/SidebarCategory";

const ArticleHeader = React.memo(() => (
  <div className="mb-8 text-center">
    <h2 className="text-3xl font-semibold text-blue-400">Artikel</h2>
    <p className="mt-2 text-gray-300">
      Kumpulan rangkaian tutorial berdasarkan teknologi tertentu untuk mempermudah
      kamu belajar koding dengan cepat dan terstruktur.
    </p>
    <Link to="/articles" className="text-blue-400 hover:text-blue-300">Lihat Semua →</Link>
  </div>
));

const ArticleGrid = React.memo(({ articles }) => (
  <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
    {articles.map((article, index) => (
      <CardArticle
        key={index}
        title={article.title}
        description={article.description}
        imageUrl={article.imageUrl}
        date={article.date}
        readTime={article.readTime}
        author={article.author}
        category={article.category}
      />
    ))}
  </div>
));

export default function Article({ articles }) {
  return (
    <div className="container px-4 py-8 mx-auto text-white">
      <ArticleHeader />
      
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <div className="sticky top-0 md:py-20">
            <SidebarCategory />
          </div>
        </div>

        <div className="lg:col-span-3">
          <ArticleGrid articles={articles} />
        </div>
      </div>
    </div>
  );
}
