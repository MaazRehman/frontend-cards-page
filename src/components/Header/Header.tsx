import React, { useState, useEffect } from 'react';
import './Header.css'; // Assuming you have a CSS file for styling

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState<number>(0);
  const [visible, setVisible] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <header className={`header ${visible ? 'visible' : 'hidden'}`}>
      <div className="logo-container">
        <img src="logo192.png" alt="Wunderflats Logo" className="logo" />
        <span className="brand-name">WUNDERFLATS</span>
      </div>
      <div className="login-container">
        J
      </div>
    </header>
  );
};

export default Header;
