import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../component/Navbar/Navbar';

const dummyArticles = [
    {
        id: 1,
        title: "Tutorial Laravel 11 untuk Pemula: Langsung Bisa bikin CRUD!",
        excerpt: "Tutorial Laravel 11 cocok untuk pemula disertai latihan membuat CRUD dari awal. Dijamin kamu akan paham Laravel setelah mengikuti tutorial ini.",
        image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
        author: "Sabardi",
            authorImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
        },
        {
            id: 2,
            title: "Memahami Konsep Dasar React Hooks",
            excerpt: "Pelajari cara menggunakan React Hooks untuk mengelola state dan efek samping dalam komponen fungsional React.",
            image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            author: "React Master",
            authorImage: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        },
        {
            id: 3,
            title: "Optimasi Performa Aplikasi Node.js",
            excerpt: "Tips dan trik untuk meningkatkan kinerja aplikasi Node.js Anda, dari pengoptimalan kode hingga konfigurasi server.",
            image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
            author: "Node Ninja",
            authorImage: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=934&q=80",
        },
        {
            id: 4,
            title: "Pengenalan Machine Learning dengan Python",
            excerpt: "Mulai perjalanan Anda dalam dunia Machine Learning menggunakan Python dan library populer seperti scikit-learn.",
            image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            author: "AI Enthusiast",
            authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        },
        {
            id: 5,
            title: "Membangun RESTful API dengan Express.js",
            excerpt: "Panduan langkah demi langkah untuk membuat API RESTful yang kuat menggunakan Express.js dan MongoDB.",
            image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
            author: "Backend Guru",
            authorImage: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        },
        {
            id: 6,
            title: "Dasar-dasar TypeScript untuk Pengembang JavaScript",
            excerpt: "Pelajari cara meningkatkan kode JavaScript Anda dengan fitur-fitur TypeScript untuk pengembangan yang lebih aman dan efisien.",
            image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
            author: "TS Expert",
            authorImage: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
];

const ArticlePage = ({ articles = dummyArticles, navbarItems, logoSrc }) => {
    return (
        <>
            <Navbar navbarItems={navbarItems} logoSrc={logoSrc} />
            <div className="min-h-screen text-white bg-gray-900">
                <div className="container px-4 py-12 mx-auto">
                    <div className="mb-12">
                        <h1 className="mb-4 text-4xl font-bold">Apa yang baru di Petani Kode? 🔥</h1>
                        <p className="text-xl text-gray-300">Baca artikel terbaru yang masih fresh dan hangat.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {articles.map((article, index) => (
                            <Link key={article.id || index} to={`/article/${article.id || index}`} className="block">
                                <div className="overflow-hidden transition-transform duration-300 bg-gray-800 rounded-lg shadow-lg hover:transform hover:scale-105">
                                    <img src={article.image} alt={article.title} className="object-cover w-full h-48" />
                                    <div className="p-6">
                                        <h2 className="mb-2 text-2xl font-semibold">{article.title}</h2>
                                        <p className="mb-4 text-gray-400">{article.excerpt}</p>
                                        <div className="flex items-center text-sm text-gray-500">
                                            <img src={article.authorImage} alt={article.author} className="w-8 h-8 mr-2 rounded-full" />
                                            <span>{article.author}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ArticlePage;