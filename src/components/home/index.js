import React from 'react';

import HomeWrapper from './homeWrapper';

const home = ({ isOpen, nominations, handleNominate, handleDelete }) => {
  return (
    <div className="_max_width">
      <HomeWrapper
        isOpen={isOpen}
        nominations={nominations}
        handleNominate={handleNominate}
        handleDelete={handleDelete}
      />
    </div>
  );
};

export default home;
