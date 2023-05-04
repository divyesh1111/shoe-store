import React, { useState, useEffect } from 'react'
import wrapper from './wrapper';

const Header = () => {
  const [mobileMenu, setMobileMneu] = useState(false);
  const [showCatMenu, setShowCatMenu] = useState(false);
  const [show, setShow] = useState("translate-y-0");
  const [lastScrolly, setLastScrolly] = useState(0);

  return <header classname={`w-full h-[50px] md:h[80px] bg-white flex items-center justify-between z-20 sticky top-0 transition-transform duration-300 ${show}`}>
    <wrapper>hellooooo</wrapper>
  </header>
};

export default Header;