import React, { useEffect, useState } from 'react';

import { AnimatePresence } from 'framer-motion';

import Loader from './components/ui/loader';

// layout

import Layout from './layout';

// pages

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1700);
  }, []);

  return (
    <>
      <AnimatePresence exitBeforeEnter>
        {loading && <Loader />}

        {!loading && <Layout></Layout>}
      </AnimatePresence>
    </>
  );
}

export default App;
