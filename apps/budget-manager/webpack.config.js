const { merge } = require('webpack-merge');

module.exports = (config) => {
  return merge(config, {
    output: {
      publicPath: '',
    },
  });
};
