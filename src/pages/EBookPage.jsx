import React from 'react';
import EBookReader from '../components/EBookReader';
import Navbar from '../component/Navbar/Navbar';

const chapters = [
    {
        title: "Pendahuluan",
        subChapters: ["Cover", "Kata Pengantar", "Lisensi", "Tentang"],
        content: (
            <>
                <h2>Pendahuluan</h2>
                <p>Selamat datang di eBook ini...</p>
            </>
        )
    },
    {
        title: "Fundamental ES6",
        subChapters: ["JavaScript ES6", "Variable", "Default Parameter"],
        content: (
            <>
                <h2>Default Parameter</h2>
                <p>Kita bisa membuat sebuah function yang memiliki parameter yang bersifat opsional. Dimana jika tidak ditentukan nilainya, maka kita akan berikan nilai secara default.</p>
                <p>Sebelum ada ES6 untuk membuat parameter yang bersifat opsional di dalam function, kita bisa membuatnya seperti berikut ini :</p>
                <pre>
                    <code>
                        {`function hello(message) {
  let message = message || 'Hello World!';
  console.log(message);
}`}
                    </code>
                </pre>
                {/* More content... */}
            </>
        )
    },
    // More chapters...
];

const EBookPage = ({ navbarItems, logoSrc }) => {
    const dummyBook = {
        id: 1,
        title: "JavaScript ES6 Guide",
        chapters: chapters
    };

    return (
        <div>
            <Navbar navbarItems={navbarItems} logoSrc={logoSrc}/>
            <EBookReader book={dummyBook} />
        </div>
    );
};

export default EBookPage;

