const path = require('path');
const PugPlugin = require('pug-plugin');

module.exports = {
  output: {
    path: path.join(__dirname, 'dist/'),
  },

  plugins: [
    new PugPlugin({
      entry: 'src/pages/',
      entry: {
        index: 'src/pages/home.pug', // => dist/index.html
        'about': { // => dist/news/sport.html
          import: 'src/pages/about.pug', // template file
          data: { title: 'Sport news' }, // pass variables into template
        },
      },
      js: {
        // JS output filename, used if `inline` option is false (defaults)
        filename: 'js/[name].[contenthash:8].js',
        //inline: true, // inlines JS into HTML
      },
      css: {
        // CSS output filename, used if `inline` option is false (defaults)
        filename: 'css/[name].[contenthash:8].css',
        //inline: true, // inlines CSS into HTML
      },
    })
  ],

  module: {
    rules: [
      {
        test: /\.(s?css|sass)$/,
        use: ['css-loader', 'sass-loader']
      },
      {
        test: /\.(ico|png|jp?g|webp|svg)$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name].[hash:8][ext][query]',
        },
      },
    ],
  },
};