import React from 'react';

// class not const to enable hot reloading
class AboutPage extends React.Component {
  render() {
    return (
      <div>
        <h1>About</h1>
        <p>
          This interview app is adapted from part of the <a href="https://github.com/coryhouse/pluralsight-redux-starter">Pluralsight's tutorial and React-Slingshot
          starter kit</a>.
        </p>
      </div>
    );
  }
}

export default AboutPage;
