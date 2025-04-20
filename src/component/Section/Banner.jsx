import React from "react";
import LetterGlitch from "../../blocks/Backgrounds/LetterGlitch/LetterGlitch";
import CircularText from "../../blocks/TextAnimations/CircularText/CircularText"

const BackgroundElements = React.memo(() => (
  <>
    <div className="absolute inset-0">
      <LetterGlitch
        glitchSpeed={50}
        centerVignette={true}
        outerVignette={true}
        smooth={true}
        className="w-full h-full"
      />
    </div>
    <div className="absolute inset-0 bg-gradient-radial from-transparent via-gray-900/70 to-gray-900 opacity-80"></div>
    <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
    {/* Add a semi-transparent overlay */}
    <div className="absolute inset-0 bg-black opacity-50"></div>
  </>
));

const BannerContent = React.memo(({
  title = "Default Title",
  description = "Default description",
  primaryButtonText = "Get Started",
  primaryButtonLink = "#",
  secondaryButtonText = "Learn More",
  secondaryButtonLink = "#",
  circularText = "REACT*BITS*COMPONENTS*",
  centerText = "React Bits"
}) => (
  <div className="w-full max-w-screen-xl mx-auto md:grid md:grid-cols-2 md:items-center md:gap-4">
    <div className="text-left max-w-prose">
      <h1 className="text-4xl font-bold text-white sm:text-5xl">
        {title.split(' ').map((word, index) => 
          word.toLowerCase() === 'increase' ? 
            <strong key={index} className="text-indigo-400">{word} </strong> : 
            `${word} `
        )}
      </h1>
      <p className="mt-4 text-base text-gray-100 sm:text-lg">
        {description}
      </p>
      <div className="flex gap-4 mt-6">
        <a
          className="inline-block px-5 py-3 font-medium text-white transition-colors bg-blue-600 border border-indigo-600 rounded shadow-sm hover:bg-indigo-700"
          href={primaryButtonLink}
        >
          {primaryButtonText}
        </a>
        <a
          className="inline-block px-5 py-3 font-medium text-white transition-colors border border-white rounded shadow-sm hover:bg-gray-700 hover:text-white"
          href={secondaryButtonLink}
        >
          {secondaryButtonText}
        </a>
      </div>
    </div>
    <div className="relative items-center justify-center hidden mt-8 md:flex md:mt-0">
      <CircularText
        text={circularText}
        onHover="speedUp"
        spinDuration={20}
        className="w-64 h-64 text-blue-400"
      />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-bold text-white">{centerText}</span>
      </div>
    </div>
  </div>
));

function Banner(props) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gray-900">
      <BackgroundElements />
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="container px-4 py-8 mx-auto">
          <BannerContent {...props} />
        </div>
      </div>
    </div>
  );
}

export default React.memo(Banner);
