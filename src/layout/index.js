import React from 'react';

import './styles.scss';

const Layout = ({ children }) => {
  return (
    <>
      <main className="main">{children}</main>
    </>
  );
};

export default Layout;
