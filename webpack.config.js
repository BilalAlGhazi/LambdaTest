const path = require('path')
const { IgnorePlugin } = require('webpack');

module.exports = {
  mode: 'production',
  target: 'node',
  externals: {
    sqlite3: 'sqlite3',
    mariasql: 'mariasql',
    mssql: 'mssql',
    mysql2: 'mysql2',
    oracle: 'oracle',
    'strong-oracle': 'strong-oracle',
    oracledb: 'oracledb',
    'pg-query-stream': 'pg-query-stream'
  },
  plugins: [
    new IgnorePlugin(new RegExp('^(mssql*|mariasql|.oracle.|mssql/lib/base|mysql*|mysql.|mssql/.|tedious|node-pre-gyp|pg-native|mssql/package.json)$')),
  ],
  entry: {
    ['registration']: './lambda/registration.js',
  },
  module: {
    rules: [
      {
        test: /.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build')
  }
}
