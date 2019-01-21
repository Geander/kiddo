module.exports = {
  name: 'test_sender',
  version: 1.0,
  env: process.env.NODE_ENV || 'development',
  amqp: {
    uri: process.env.AMQP_URI || '127.0.0.1',
    port: process.env.AMQP_PORT || '5672',
  }
};
