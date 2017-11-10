let path = require('path');

module.exports = {
  entry: path.resolve(__dirname, '../src/example.js'),
  output: {
    path: path.resolve(__dirname, '../example'),
    filename: 'example.js'
  },
  resolve: {
    alias: {
      vue: 'vue/dist/vue.js'
    }
  }
};
