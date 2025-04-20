import { useState, useEffect, useRef } from 'react';
import { useDarkMode } from '../../hooks/useDarkMode';
import { Link } from "react-router-dom";
function Navbar({ navbarItems, logoSrc }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDarkMode, toggleDarkMode] = useDarkMode();
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 text-white bg-gray-900 shadow-xl">
            <div className="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-1 md:flex md:items-center md:gap-12">
                        <a className="block text-blue-400" href="#">
                            <span className="sr-only">Home</span>
                            <img src={logoSrc} alt="Logo" className="h-8" />
                        </a>
                        
                    </div>

                    <div className="md:flex md:items-center md:gap-12">
                        <nav aria-label="Global" className="hidden md:block">
                            <ul className="flex items-center gap-6 text-sm">
                                {navbarItems.map((item, index) => (
                                    <li key={index}>
                                        <Link className="text-gray-300 transition hover:text-white" to={item.href}>
                                            {item.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>

                        <div className="flex items-center gap-4">
                            <div className="sm:flex sm:gap-4">
                                <a
                                    className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-blue-500"
                                    href="#"
                                >
                                    Join NewsLater
                                </a>
                            </div>

                            

                            <div className="block md:hidden">
                                <button
                                    onClick={toggleMenu}
                                    className="p-2 text-gray-300 transition rounded-md hover:text-white"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-5 h-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden">
                    <nav className="px-4 py-2 bg-gray-800">
                        <ul className="space-y-2">
                            {navbarItems.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={item.href}
                                        className="block py-2 text-gray-300 hover:text-white"
                                        onClick={closeMenu}
                                    >
                                        {item.label}
                                    </a>
                                </li>
                            ))}
                            <li>
                                <a
                                    className="block w-full rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow hover:bg-blue-500"
                                    href="#"
                                >
                                    Login
                                </a>
                            </li>
                            <li>
                                <a
                                    className="block w-full rounded-md bg-gray-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-gray-600"
                                    href="#"
                                >
                                    Register
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            )}
        </header>
    );
}

export default Navbar;