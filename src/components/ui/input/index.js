import React from 'react';

const input = ({ inputRef, ...props}) => {
  return <input ref={inputRef} {...props} />;
};

export default input;
