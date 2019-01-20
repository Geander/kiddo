module.exports = {
  name: 'service',
  version: 1.0,
  env: process.env.NODE_ENV || 'development',
  port: process.env.PORT || 8080,
  db: {
    uri: process.env.MONGODB_URI || '127.0.0.1',
    port: process.env.MONGODB_PORT || '27017',
    base: process.env.MONGODB_BASE || 'languages'
  },
};
