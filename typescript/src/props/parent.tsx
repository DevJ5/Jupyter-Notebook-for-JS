import React from 'react';
import { Child } from './child';

const parent = () => {
  return (
    <Child color="red" onClick={() => console.log('Clicked')}>
      Submit
    </Child>
  );
};

export default parent;
