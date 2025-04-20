import React from 'react';
import EBookReader from '../component/EBook/EBookReader';
import Navbar from '../component/Navbar/Navbar';

const dummyBook = {
    id: 1,
    title: "Comprehensive JavaScript ES6+ Guide",
    chapters: [
        {
            title: "Introduction to Modern JavaScript",
            sections: [
                { 
                    title: "The Evolution of JavaScript",
                    content: [
                        { type: 'text', content: "JavaScript has come a long way since its creation in 1995. This section explores the major milestones in JavaScript's evolution, leading up to ES6 and beyond." },
                        { type: 'image', src: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80', alt: 'JavaScript Timeline', caption: 'Timeline of JavaScript Evolution' }
                    ]
                },
                { 
                    title: "Why ES6+ Matters",
                    content: [
                        { type: 'text', content: "ES6 and subsequent versions have introduced features that make JavaScript more powerful, expressive, and easier to use. This section discusses the importance of staying up-to-date with modern JavaScript practices." },
                        { type: 'image', src: 'https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Modern JavaScript', caption: 'The power of modern JavaScript' }
                    ]
                }
            ]
        },
        {
            title: "ES6 Fundamentals",
            sections: [
                { 
                    title: "Let and Const",
                    content: [
                        { type: 'text', content: "The let and const keywords provide block-scoped alternatives to var for declaring variables." },
                        { type: 'image', src: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80', alt: 'Variable Declaration', caption: 'Modern variable declaration in JavaScript' }
                    ],
                    subsections: [
                        { 
                            title: "Block Scoping", 
                            content: [
                                { type: 'text', content: "Unlike var, which is function-scoped, let and const are block-scoped." },
                                { type: 'code', language: 'javascript', content: "if (true) {\n  let x = 5;\n}\nconsole.log(x); // ReferenceError: x is not defined" }
                            ]
                        },
                        { 
                            title: "Temporal Dead Zone", 
                            content: [
                                { type: 'text', content: "Variables declared with let and const are not initialized until their definition is evaluated." },
                                { type: 'code', language: 'javascript', content: "console.log(x); // ReferenceError\nlet x = 5;" }
                            ]
                        }
                    ]
                },
                { 
                    title: "Arrow Functions",
                    content: [
                        { type: 'text', content: "Arrow functions provide a more concise syntax for writing function expressions." },
                        { type: 'image', src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1528&q=80', alt: 'Arrow Functions', caption: 'Syntax comparison: Traditional vs Arrow Functions' }
                    ],
                    subsections: [
                        { 
                            title: "Syntax", 
                            content: [
                                { type: 'text', content: "The syntax for arrow functions allows for both single-line and multi-line bodies." },
                                { type: 'code', language: 'javascript', content: "// Single-line body\nconst add = (a, b) => a + b;\n\n// Multi-line body\nconst greet = (name) => {\n  const message = `Hello, ${name}!`;\n  return message;\n};" }
                            ]
                        },
                        { 
                            title: "Lexical this", 
                            content: [
                                { type: 'text', content: "Arrow functions do not bind their own this. Instead, they inherit the one from the parent scope." },
                                { type: 'code', language: 'javascript', content: "const obj = {\n  name: 'John',\n  greet: function() {\n    setTimeout(() => {\n      console.log(`Hello, ${this.name}!`);\n    }, 1000);\n  }\n};\n\nobj.greet(); // Output after 1 second: Hello, John!" }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            title: "Advanced ES6+ Features",
            sections: [
                {
                    title: "Destructuring",
                    content: [
                        { type: 'text', content: "Destructuring allows you to extract values from arrays or properties from objects into distinct variables." },
                        { type: 'code', language: 'javascript', content: "const [a, b] = [1, 2];\nconst { x, y } = { x: 3, y: 4 };\nconsole.log(a, b, x, y); // 1 2 3 4" }
                    ]
                },
                {
                    title: "Spread and Rest Operators",
                    content: [
                        { type: 'text', content: "The spread operator (...) allows an iterable to be expanded in places where zero or more arguments or elements are expected." },
                        { type: 'code', language: 'javascript', content: "const arr1 = [1, 2, 3];\nconst arr2 = [...arr1, 4, 5];\nconsole.log(arr2); // [1, 2, 3, 4, 5]" },
                        { type: 'image', src: 'https://example.com/spread-operator.png', alt: 'Spread Operator', caption: 'Visual representation of the spread operator' }
                    ]
                },
                {
                    title: "Async/Await",
                    content: [
                        { type: 'text', content: "Async/await is a way to handle asynchronous operations in a more synchronous-looking manner." },
                        { type: 'code', language: 'javascript', content: "async function fetchData() {\n  try {\n    const response = await fetch('https://api.example.com/data');\n    const data = await response.json();\n    console.log(data);\n  } catch (error) {\n    console.error('Fetching data failed', error);\n  }\n}" }
                    ]
                }
            ]
        },
        {
            title: "ES6+ in Practice",
            sections: [
                {
                    title: "Building Modern Web Applications",
                    content: [
                        { type: 'text', content: "This section explores how ES6+ features can be used to build efficient and maintainable web applications." },
                        { type: 'image', src: 'https://example.com/modern-web-app.png', alt: 'Modern Web Application Architecture', caption: 'Architecture of a modern web application using ES6+ features' }
                    ]
                },
                {
                    title: "Performance Optimization",
                    content: [
                        { type: 'text', content: "Learn how to leverage ES6+ features to write more performant JavaScript code." },
                        { type: 'code', language: 'javascript', content: "// Using destructuring and arrow functions for cleaner, faster code\nconst processData = ({ id, name }) => {\n  // Process data\n};\n\ndata.forEach(processData);" }
                    ]
                }
            ]
        }
    ]
};

const EBookPage = ({ navbarItems, logoSrc }) => {
    return (
        <div className='min-h-screen bg-gray-800'>
            <Navbar navbarItems={navbarItems} logoSrc={logoSrc}/>
            <div className=""> {/* Tambahkan padding-top di sini */}
                <EBookReader book={dummyBook} />
            </div>
        </div>
    );
};

export default EBookPage;

