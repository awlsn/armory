import React from 'react';
import Nav from './Nav';

const Header = () => (
  <>
    <div className="row">
      <div
        className="u-full-width"
        id="topbar"
        style={{
          position: 'fixed', margin: 'auto', right: '0', left: '0',
        }}
      />
    </div>
    <div className="row" style={{ position: 'relative', left: '-32px' }}>
      <div className="u-full-width" id="banner" />
    </div>

    <div id="floating-nav-content" className="center slideup">
      <div>
        <Nav />
      </div>
    </div>
  </>
);


export default Header;
