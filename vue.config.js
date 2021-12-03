module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/motivately/' : '/',
  pages: {
    'index': {
      entry: './src/pages/Home/main.js',
      template: 'public/index.html',
      title: 'Home',
      chunks: [ 'chunk-vendors', 'chunk-common', 'index' ]
    },
    'kanban': {
      entry: './src/pages/Kanban/main.js',
      template: 'public/index.html',
      title: 'Kanban',
      chunks: [ 'chunk-vendors', 'chunk-common', 'kanban' ]
    }
  }
}
