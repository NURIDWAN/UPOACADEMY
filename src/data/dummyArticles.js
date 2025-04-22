

 const dummyArticles = [
  {
    id: 1,
    title: "Tutorial Laravel 11 untuk Pemula: Langsung Bisa bikin CRUD!",
    excerpt: "Tutorial Laravel 11 cocok untuk pemula disertai latihan membuat CRUD dari awal. Dijamin kamu akan paham Laravel setelah mengikuti tutorial ini.",
    image: "https://via.placeholder.com/300x200?text=Laravel+Tutorial",
    author: "Sabardi",
    authorImage: "https://via.placeholder.com/50x50?text=S",
  },
  {
    id: 2,
    title: "Tutorial Membuat Sistem Notifikasi dengan Redis Pub/Sub di Golang",
    excerpt: "Step-by-step cara membuat sistem notifikasi secara realtime dengan Redis Pub/Sub di Golang",
    image: "https://via.placeholder.com/300x200?text=Golang+Redis",
    author: "Petani Kode",
    authorImage: "https://via.placeholder.com/50x50?text=PK",
  },
  {
    id: 3,
    title: "Belajar C++ #13: Mengenal Tipe Data Union",
    excerpt: "Pada tutorial ini, kita akan belajar tentang tipe data union di C++. Mengapa kita butuh Union dan apa bedanya dengan Struct? Simak selengkapnya...",
    image: "https://via.placeholder.com/300x200?text=C%2B%2B+Union",
    author: "Petani Kode",
    authorImage: "https://via.placeholder.com/50x50?text=PK",
  },
  {
    id: 4,
    title: "Memahami Asynchronous JavaScript: Promises, Async/Await, dan Callbacks",
    excerpt: "Pelajari cara menangani operasi asynchronous di JavaScript menggunakan Promises, Async/Await, dan Callbacks.",
    image: "https://example.com/images/async-js.jpg",
    author: "JavaScript Master",
    authorImage: "https://example.com/images/js-master.jpg",
  },
  {
    id: 5,
    title: "Pengenalan Docker untuk Pemula: Konsep dan Praktik",
    excerpt: "Mulai perjalanan Anda dengan Docker. Pelajari konsep dasar dan cara menggunakan Docker dalam pengembangan aplikasi.",
    image: "https://example.com/images/docker-intro.jpg",
    author: "Docker Expert",
    authorImage: "https://example.com/images/docker-expert.jpg",
  },
  {
    id: 6,
    title: "Machine Learning dengan Python: Implementasi Algoritma K-Means",
    excerpt: "Pelajari cara mengimplementasikan algoritma clustering K-Means menggunakan Python dan library scikit-learn.",
    image: "https://example.com/images/ml-kmeans.jpg",
    author: "AI Enthusiast",
    authorImage: "https://example.com/images/ai-enthusiast.jpg",
  }
];

const ArticlePage = ({ articles = dummyArticles, navbarItems, logoSrc }) => {
  // ... rest of the component
};