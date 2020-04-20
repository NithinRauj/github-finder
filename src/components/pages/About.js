import React, { Fragment } from 'react';

export const About = () => {
  return (
    <Fragment>
      <h1>About the app</h1>
      <p className='lead'>
        An app that searches github users and thier repositories.
      </p>
      <p className='lead'>Version: 1.0.0</p>
    </Fragment>
  );
};
