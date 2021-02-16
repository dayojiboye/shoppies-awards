import React, { useEffect, useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import Loader from './components/ui/loader';

// context

import Store from './context';

// layout

import Layout from './layout';

// pages

import { HomePage } from './pages/home';

function App() {
  const [loading, setLoading] = useState(true);

  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebarToggle = () => {
    setShowSidebar(!showSidebar);

    document.documentElement.classList.toggle('_fixed');
    document.body.classList.toggle('_fixed');
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1700);
  }, []);

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Store>
          {loading && <Loader />}

          {!loading && (
            <Layout toggleSidebar={handleSidebarToggle}>
              <HomePage isOpen={showSidebar} />
            </Layout>
          )}
        </Store>
      </AnimatePresence>
    </>
  );
}

export default App;
