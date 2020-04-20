import React from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
  <div>
    <img
      src={spinner}
      alt='Loading...'
      style={{
        width: '200px',
        display: 'block',
        margin: 'auto',
        backgroundColor: 'blue',
      }}
    ></img>
  </div>
);

export default Spinner;
