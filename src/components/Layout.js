import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  const updateNav = () => {
    if (document.documentElement.scrollTop >= 400) {
      document.querySelector('#floating-nav-content').classList.remove('slideup');
      document.querySelector('#floating-nav-content').classList.add('slidedown');
    }

    if (document.documentElement.scrollTop < 400) {
      document.querySelector('#floating-nav-content').classList.remove('slidedown');
      document.querySelector('#floating-nav-content').classList.add('slideup');
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
