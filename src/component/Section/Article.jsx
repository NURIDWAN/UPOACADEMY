import React from 'react';
import CardArticle from "../Card/CardArticle";
import SidebarCategory from "../Sidebar/SidebarCategory";

const ArticleHeader = React.memo(() => (
  <div className="mb-8 text-center">
    <h2 className="text-3xl font-semibold text-blue-400">Artikel</h2>
    <p className="mt-2 text-gray-300">
      Kumpulan rangkaian tutorial berdasarkan teknologi tertentu untuk mempermudah
      kamu belajar koding dengan cepat dan terstruktur.
    </p>
    <a href="#" className="text-blue-400 hover:text-blue-300">Lihat Semua →</a>
  </div>
));

const ArticleGrid = React.memo(({ articles }) => (
  <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
    {articles.map((article, index) => (
      <CardArticle key={index} {...article} />
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
