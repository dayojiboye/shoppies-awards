import React from 'react';

import Header from '../components/ui/header';
import Footer from '../components/ui/footer';

import './styles.scss';

const Layout = ({ children, toggleSidebar }) => {
  return (
    <>
      <Header clicked={toggleSidebar} />
      <main className="main">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
