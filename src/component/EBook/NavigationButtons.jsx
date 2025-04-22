import React from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const NavigationButtons = ({ handlePrevSubsection, handleNextSubsection }) => (
    <div className="fixed z-50 flex flex-col items-center space-y-2 bottom-4 right-4">
        <button 
            onClick={handlePrevSubsection} 
            className="p-3 text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700"
        >
            <FaArrowLeft />
        </button>
        <button 
            onClick={handleNextSubsection} 
            className="p-3 text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700"
        >
            <FaArrowRight />
        </button>
    </div>
);

export default NavigationButtons;