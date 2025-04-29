import React, { useState, useEffect, useRef } from 'react';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const timeoutId = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }

      timeoutId.current = setTimeout(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setShowNavbar(false); // scroll down -> hide
        } else {
          setShowNavbar(true);  // scroll up -> show
        }

        setLastScrollY(currentScrollY);
      }, 20); // debounce
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, [lastScrollY]);

  return (
    <div className={`fixed top-0 z-[999] w-full py-8 px-18 flex justify-between items-center
      transition-transform duration-300 ease-in-out
      ${showNavbar ? 'translate-y-0' : '-translate-y-full'}
      bg-transparent backdrop-blur-xs`}>
      
      <h1 className='text-3xl text-white'>Logo</h1>
      
      <div className='links flex gap-10'>
        {["About", "Services", "My Work", "Contact Us"].map((item, index) => (
          <a 
            key={index}
            href={`#${item.toLowerCase().replace(' ', '-')}`}
            className={`text-md capitalize hover:underline text-white ${index === 3 ? 'ml-32' : ''}`}
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
