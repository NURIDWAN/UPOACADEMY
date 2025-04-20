import React from "react";
import Navbar from "../component/Navbar/Navbar";

const AboutContent = React.memo(() => (
  <div className="container mx-auto px-4 py-8">
    <h1 className="text-4xl font-bold text-center text-white mb-4">About Us</h1>
    <p className="text-lg text-center text-white max-w-2xl mx-auto">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vel
      vulputate metus, non viverra neque. Sed vel dui vel felis sagittis
      ullamcorper.
    </p>
  </div>
));

const About = React.memo(({ navbarItems, logoSrc }) => {
  return (
    <div className="min-h-screen bg-gray-800 flex flex-col">
      <Navbar navbarItems={navbarItems} logoSrc={logoSrc} />
      <AboutContent />
    </div>
  );
});

export default About;
