module.exports = {
   // run babel on every file type
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        // exclude these directories
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            // comply 2 versions back per browser
            ['env', { targets: { browsers: ['last 2 versions'] } }]
          ]
        }
      }
    ]
  }
}