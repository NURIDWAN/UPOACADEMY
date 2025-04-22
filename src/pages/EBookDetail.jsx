// src/pages/EBookDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../component/Navbar/Navbar';
import Footer from '../component/Footer/Footer';

// Data dummy untuk eBooks
const dummyEBooks = [
  {
    id: 1,
    title: "FullStack JavaScript Developer dengan Express dan React Native",
    description: "Belajar menjadi FullStack JavaScript Developer dengan Express.js dan React Native.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    price: "Gratis",
    author: "Fika Ridaul Maulayya",
    category: "FULLSTACK JAVASCRIPT",
    rating: "5.0",
    members: 601,
    about: "Buku ini berjudul 'FullStack JavaScript Developer dengan Express dan React Native' dan dibuat khusus untuk para developer pemula yang ingin menguasai skill FullStack JavaScript menggunakan dua teknologi paling populer di ekosistem JavaScript, yaitu Express dan React Native.",
    tableOfContents: [
      "Pendahuluan",
      "Fundamental ES6",
      "Express.js Basics",
      "React Native Fundamentals",
      "Building a Full Stack App"
    ]
  },
  {
    id: 2,
    title: "Mastering React Hooks",
    description: "A comprehensive guide to React Hooks and functional components.",
    imageUrl: "https://example.com/react-hooks.jpg",
    price: "$19.99",
    author: "John Doe",
    category: "REACT",
    rating: "4.8",
    members: 450,
    about: "This book provides an in-depth look at React Hooks, helping you master functional components in React applications.",
    tableOfContents: [
      "Introduction to React Hooks",
      "useState and useEffect",
      "useContext and useReducer",
      "Custom Hooks",
      "Performance Optimization with Hooks"
    ]
  },
  // Tambahkan lebih banyak eBook dummy jika diperlukan
];

const EBookDetail = ({ navbarItems, logoSrc }) => {
  const { id } = useParams();
  const book = dummyEBooks.find(book => book.id === parseInt(id));

  if (!book) return <div>Book not found</div>;

  return (
    <div className="min-h-screen text-white bg-gray-800">
      <Navbar navbarItems={navbarItems} logoSrc={logoSrc} />
      <div className="container px-4 py-8 mx-auto">
        <div className="flex flex-col items-center space-y-8 md:flex-row md:items-start md:space-y-0 md:space-x-8">
          <img src={book.imageUrl} alt={book.title} className="w-64 h-auto rounded-lg shadow-lg" />
          <div className="flex-1">
            <h1 className="mb-4 text-3xl font-bold">{book.title}</h1>
            <div className="mb-4">
              <span className="px-3 py-1 text-sm font-semibold text-white bg-blue-500 rounded-full">
                {book.category}
              </span>
            </div>
            <div className="flex items-center mb-4">
              <span className="mr-1 text-yellow-400">★</span>
              <span>{book.rating}</span>
              <span className="mx-2">•</span>
              <span>{book.members} members</span>
            </div>
            <p className="mb-4 text-xl">{book.price}</p>
            <p className="mb-6 text-gray-300">{book.description}</p>
            <Link 
              to={`/ebook/${id}`} 
              className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-600"
            >
              LANJUT BELAJAR →
            </Link>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="mb-4 text-2xl font-bold">TENTANG</h2>
          <p className="text-gray-300">{book.about}</p>
        </div>
        <div className="mt-12">
          <h2 className="mb-4 text-2xl font-bold">DAFTAR ISI</h2>
          <ul className="text-gray-300 list-disc list-inside">
            {book.tableOfContents.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default EBookDetail;