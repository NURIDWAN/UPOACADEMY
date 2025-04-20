import React from 'react';
import EBookReader from '../component/EBook/EBookReader';
import Navbar from '../component/Navbar/Navbar';

const dummyBook = {
    id: 1,
    title: "JavaScript ES6 Guide",
    chapters: [
        {
            title: "Introduction to ES6",
            sections: [
                { 
                    title: "What is ES6?", 
                    content: [
                        { type: 'text', content: "ES6, also known as ECMAScript 2015, is a major update to JavaScript that introduces many new features and improvements to the language. It was finalized in June 2015 and has since been widely adopted by modern browsers and JavaScript engines." }
                    ]
                },
                { 
                    title: "Why learn ES6?", 
                    content: [
                        { type: 'text', content: "ES6 brings many improvements to the JavaScript language, making it more powerful, expressive, and easier to use. Learning ES6 will help you write more efficient and maintainable code, and keep you up-to-date with modern JavaScript development practices." }
                    ]
                }
            ]
        },
        {
            title: "New Features in ES6",
            sections: [
                { 
                    title: "Let and Const",
                    content: [
                        { type: 'text', content: "The let and const keywords provide block-scoped alternatives to var for declaring variables. let allows you to declare variables that are limited in scope to the block, statement, or expression in which they are used. const is used to declare constants, whose values cannot be reassigned." }
                    ],
                    subsections: [
                        { 
                            title: "Block Scoping", 
                            content: [
                                { type: 'text', content: "Unlike var, which is function-scoped, let and const are block-scoped. This means they are only accessible within the block they are declared in, which can help prevent unintended variable leaks and make your code more predictable." },
                                { type: 'code', language: 'javascript', content: "if (true) {\n  let x = 5;\n}\nconsole.log(x); // ReferenceError: x is not defined" }
                            ]
                        },
                        { 
                            title: "Temporal Dead Zone", 
                            content: [
                                { type: 'text', content: "Variables declared with let and const are not initialized until their definition is evaluated. Accessing them before the initialization results in a ReferenceError. This is known as the Temporal Dead Zone (TDZ)." },
                                { type: 'code', language: 'javascript', content: "console.log(x); // ReferenceError\nlet x = 5;" }
                            ]
                        }
                    ]
                },
                { 
                    title: "Arrow Functions",
                    content: [
                        { type: 'text', content: "Arrow functions provide a more concise syntax for writing function expressions. They allow us to write shorter function syntax and do not have their own this, arguments, super, or new.target." }
                    ],
                    subsections: [
                        { 
                            title: "Syntax", 
                            content: [
                                { type: 'text', content: "The syntax for arrow functions allows for both single-line and multi-line bodies. For single-line bodies, the return is implicit. For multi-line bodies, you need to use curly braces and explicitly return a value." },
                                { type: 'code', language: 'javascript', content: "// Single-line body\nconst add = (a, b) => a + b;\n\n// Multi-line body\nconst greet = (name) => {\n  const message = `Hello, ${name}!`;\n  return message;\n};" }
                            ]
                        },
                        { 
                            title: "Lexical this", 
                            content: [
                                { type: 'text', content: "Arrow functions do not bind their own this. Instead, they inherit the one from the parent scope, known as 'lexical scoping'. This makes arrow functions particularly useful for working with callbacks and in object methods." },
                                { type: 'code', language: 'javascript', content: "const obj = {\n  name: 'John',\n  greet: function() {\n    setTimeout(() => {\n      console.log(`Hello, ${this.name}!`);\n    }, 1000);\n  }\n};\n\nobj.greet(); // Output after 1 second: Hello, John!" }
                            ]
                        }
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
            <EBookReader book={dummyBook} />
        </div>
    );
};

export default EBookPage;

