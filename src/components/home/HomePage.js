import React from 'react';
import {Link} from 'react-router';

const HomePage = () => {
  return (
    <div className="jumbotron">
      <h1>Sample coursework</h1>
      <p>Uses React, Redux and React Router in ES6</p>
      <Link to="about" className="btn btn-primary btn-lg">Learn More</Link>
    </div>
  );
};

export default HomePage;
