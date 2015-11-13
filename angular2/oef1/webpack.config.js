module.exports = {
      devtool: "eval-source-map",
      entry: "./app/app",
      output: {
        path: __dirname + "/app/dist",
        publicPath: 'dist/',
        filename: "bundle.js"
      },
      resolve: {
        extensions: ['', '.js', '.ts']
      },
      module: {
        loaders: [
            {
                // Typescript loader
                test: /\.ts/, loaders: ['ts'], exclude: /node_modules/
            }
        ]
      }
    };
