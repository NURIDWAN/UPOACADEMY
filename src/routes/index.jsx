//import react router dom
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";

function RoutesIndex({navbarItems, logoSrc  }) {
    console.log("RoutesIndex rendered");
    return (
        <Routes>

            {/* route "/" */}
            <Route path="/" element={<Home navbarItems={navbarItems} logoSrc={logoSrc}/>} />
            <Route path="/about" element={<About navbarItems={navbarItems} logoSrc={logoSrc}/>} />
            <Route path="*" element={<div>404 Not Found</div>} />



        </Routes>
    )
}

export default RoutesIndex