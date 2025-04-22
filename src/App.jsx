import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Home from './pages/Home'
import RoutesIndex from './routes/index';



function App() {

  const menuItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Articles', href: '/articles' },
    // ... other menu items
  ];

  const logoSrc = viteLogo;

  
  return (
    <>
    <div className="dark:bg-gray-800">

      <RoutesIndex navbarItems={menuItems} logoSrc={logoSrc} />
    </div>
    </>
  )
}

export default App
