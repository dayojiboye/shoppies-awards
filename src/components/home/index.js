import React from 'react';

import Container from './homeContainer';

const home = ({ isOpen }) => {
  return (
    <div className="_max_width">
      <Container isOpen={isOpen} />
    </div>
  );
};

export default home;
