import React from 'react';
import Navbar from "../component/Navbar/Navbar";
import Banner from "../component/Section/Banner";
import NewEBook from "../component/Section/NewEBook";
import Article from "../component/Section/Article";
import Squares from "../blocks/Backgrounds/Squares/Squares";
import CtasFrom from '../component/Ctas/CtasFrom';
import Footer from '../component/Footer/Footer';

const dummyArticles = [
  {
    title: "Getting Started with React",
    description: "Learn the basics of React and start building your first application.",
    imageUrl: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "2023-06-01",
    readTime: "5 min read"
  },
  {
    title: "Advanced JavaScript Techniques",
    description: "Dive deep into advanced JavaScript concepts and improve your coding skills.",
    imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    date: "2023-06-05",
    readTime: "8 min read"
  },
  {
    title: "CSS Grid Layout Mastery",
    description: "Master CSS Grid Layout and create responsive designs with ease.",
    imageUrl: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "2023-06-10",
    readTime: "6 min read"
  },
  {
    title: "Node.js for Beginners",
    description: "Start your journey with Node.js and learn server-side JavaScript.",
    imageUrl: "https://images.unsplash.com/photo-1598425237654-4fc758e50a93?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    date: "2023-06-15",
    readTime: "7 min read"
  },
  {
    title: "Introduction to TypeScript",
    description: "Discover the benefits of TypeScript and how it enhances your JavaScript code.",
    imageUrl: "https://images.unsplash.com/photo-1470173274384-c4e8e2f9ea4c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    date: "2023-06-20",
    readTime: "6 min read"
  },
  {
    title: "RESTful API Design Principles",
    description: "Learn best practices for designing RESTful APIs for your web applications.",
    imageUrl: "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1489&q=80",
    date: "2023-06-25",
    readTime: "9 min read"
  }
];

const dummyEBooks = [
  {
    id: 1,
    title: "Mastering React Hooks",
    description: "A comprehensive guide to React Hooks and functional components.",
    imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    price: "$19.99",
    author: "John Doe"
  },
  {
    id: 2,
    title: "Advanced JavaScript Patterns",
    description: "Explore advanced design patterns and techniques in JavaScript.",
    imageUrl: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    price: "$24.99",
    author: "Jane Smith"
  },
  {
    id: 3,
    title: "CSS Grid and Flexbox Mastery",
    description: "Master modern CSS layout techniques with Grid and Flexbox.",
    imageUrl: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    price: "$14.99",
    author: "Alice Johnson"
  },
  {
    id: 4,
    title: "Node.js Microservices",
    description: "Build scalable microservices architecture with Node.js.",
    imageUrl: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    price: "$29.99",
    author: "Bob Wilson"
  }
];

const BackgroundSquares = React.memo(() => (
  <Squares
    speed={0.5}
    squareSize={40}
    direction='diagonal'
    borderColor='rgba(255, 255, 255, 0.05)'
    hoverFillColor='rgba(59, 130, 246, 0.1)'
  />
));

const HomeContent = React.memo(() => (
  <>
    <NewEBook 
      Title="Featured eBooks" 
      Description="Expand your coding knowledge with our curated collection of eBooks."
      seeAllSrc="/ebooks"
      EBook={dummyEBooks}
    />
    <Article articles={dummyArticles} />
    <CtasFrom />
  </>
));

const Home = React.memo(({ navbarItems, logoSrc }) => {
  return (
    <div className="min-h-screen text-white bg-gray-700">
      <Navbar navbarItems={navbarItems} logoSrc={logoSrc} />
      <Banner />
      <div className="relative">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <BackgroundSquares />
        </div>
        <div className="relative z-10">
          <HomeContent />
          <Footer />
        </div>
      </div>
    </div>
  );
});

export default Home;