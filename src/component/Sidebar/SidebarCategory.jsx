import { BiSolidCategory } from "react-icons/bi";
import { FaReact, FaVuejs, FaAngular, FaNodeJs, FaPython, FaJava, FaPhp } from "react-icons/fa";
import { SiNextdotjs, SiLaravel, SiSpring, SiDjango, SiExpress,  } from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

export default function SidebarCategory() {
    const categories = [
        { name: 'Laravel', path: '/kategori/laravel', icon: <SiLaravel /> },
        { name: 'React', path: '/kategori/react', icon: <FaReact /> },
        { name: 'Next.js', path: '/kategori/next', icon: <SiNextdotjs /> },
        { name: 'Vue.js', path: '/kategori/vue', icon: <FaVuejs /> },
        { name: 'Angular', path: '/kategori/angular', icon: <FaAngular /> },
        { name: 'Node.js', path: '/kategori/nodejs', icon: <FaNodeJs /> },
        { name: 'Express.js', path: '/kategori/express', icon: <SiExpress /> },
        { name: 'Python', path: '/kategori/python', icon: <FaPython /> },
        { name: 'Django', path: '/kategori/django', icon: <SiDjango /> },
        { name: 'Java', path: '/kategori/java', icon: <FaJava /> },
        { name: 'Spring', path: '/kategori/spring', icon: <SiSpring /> },
        { name: 'PHP', path: '/kategori/php', icon: <FaPhp /> },
        { name: 'Go', path: '/kategori/go', icon: <TbBrandGolang /> },
        
    ];

    return (
        <div className="flex flex-col p-4 bg-gray-800 rounded-lg shadow-md">
            <h2 className="flex items-center mb-4 text-lg font-semibold text-white">
                <i className="mr-2 text-blue-400"><BiSolidCategory /></i> Kategori
            </h2>
            <ul className="flex-1 p-2 space-y-2 overflow-y-auto max-h-80">
                {categories.map((category) => (
                    <li key={category.name} className="flex items-center p-2 transition-colors duration-200 bg-gray-700 rounded-xl hover:bg-gray-600">
                        <i className="mr-2 text-blue-400">{category.icon}</i>
                        <a href={category.path} className="text-gray-300 hover:text-white">
                            {category.name}
                        </a>
                    </li>
                ))}
            </ul>
            <a href="/kategori" className="mt-4 text-blue-400 hover:text-blue-300 hover:underline">Lihat Semua</a>
        </div>
    );
}
