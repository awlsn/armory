/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from 'react';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <div className="container">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  </>

);

export default Layout;
