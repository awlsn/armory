import React, { useEffect } from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const updateNav = () => {
    if (document.documentElement.scrollTop >= 400) {
      document.querySelector('#floating-nav-content').style.display = 'block';
    }

    if (document.documentElement.scrollTop < 400) {
      document.querySelector('#floating-nav-content').style.display = 'none';
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', updateNav);
    return () => window.removeEventListener('scroll', updateNav);
  }, []);


  return (
    <>
      <div onScroll={updateNav} className="container">
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>

  );
};

export default Layout;
