// webpack node API: https://webpack.github.io/docs/node.js-api/html

/*eslint-disable no-console */
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production'; // be sure babel dev config doesn't apply

console.log('Generating minified bundle for production via Webpack. This will take a moment...'.blue);

webpack(webpackConfig).run((err, stats) => {
  if (err) { // fatal error, exit
    console.log(err.bold.red);
    return 1;
  }

  const jsonStats = stats.toJson();

  if (jsonStats.hasErrors) {
    return jsonStats.errors.map(error => console.log(error.red));
  }

  if (jsonStats.hasWarnings) {
    console.log('Webpack generated the following warnings: '.bold.yellow);
    jsonStats.warning.map(warning => console.log(warning.yellow));
  }

  console.log(`Webpack stats: ${stats}`);

  // if we get here, we have succeeded with the build
  console.log('Your app has been compiled in production mode and written to /dist. It\'s ready to roll!'.green);

  return 0;
});
