// const path = require('path')
import path from 'path'
export default {
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~boostrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 8080,
    hot: true
  }
}