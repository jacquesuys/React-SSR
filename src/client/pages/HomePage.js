import React from 'react';

const Home = () => {
  return [
    <div key={0}>I'm the DANKEST home page!!</div>,
    <button key={1} onClick={() => console.log('woot')}>Press Me!</button>
  ];
};

export default { 
  component: Home 
};