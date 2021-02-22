import React, { useState, useEffect } from 'react';

import Header from '../components/ui/header';
import Footer from '../components/ui/footer';
import { HomePage } from '../pages/home';

import './styles.scss';

const Layout = ({ toggleSidebar, isSidebar }) => {
  const [nominations, setNominations] = useState(
    JSON.parse(localStorage.getItem('nominations')) || []
  );

  const nominateMovie = (payload) => {
    setNominations([payload, ...nominations]);
  };

  const handleDeleteMovie = (payload) => {
    const deleteMovie = nominations.filter((item) => payload !== item.id);

    setNominations(deleteMovie);
  };

  useEffect(() => {
    localStorage.setItem('nominations', JSON.stringify(nominations));
  }, [nominations]);

  return (
    <>
      <Header
        clicked={toggleSidebar}
        isSidebar={isSidebar}
        nominations={nominations}
      />
      <main className="main">
        <HomePage
          isOpen={isSidebar}
          nominations={nominations}
          handleNominate={nominateMovie}
          handleDelete={handleDeleteMovie}
        />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
