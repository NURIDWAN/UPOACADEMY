//import react router dom
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import EBookPage from "../pages/EBookPage";

function RoutesIndex({navbarItems, logoSrc, books }) {
    console.log("RoutesIndex rendered");
    return (
        <Routes>

            {/* route "/" */}
            <Route path="/" element={<Home navbarItems={navbarItems} logoSrc={logoSrc}/>} />
            <Route path="/about" element={<About navbarItems={navbarItems} logoSrc={logoSrc}/>} />
            <Route path="/ebook/:id" element={<EBookPage books={books} navbarItems={navbarItems} logoSrc={logoSrc}/>} /> {/* New route for eBook reader */}
            <Route path="*" element={<div>404 Not Found</div>} />



        </Routes>
    )
}

export default RoutesIndex