import React, { useEffect, useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import Loader from './components/ui/loader';

// layout

import Layout from './layout';

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
        {loading && <Loader />}

        {!loading && (
          <Layout toggleSidebar={handleSidebarToggle} isSidebar={showSidebar} />
        )}
      </AnimatePresence>
    </>
  );
}

export default App;
