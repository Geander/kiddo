const config = require('../config');
const amqp = require('amqplib');

const amqpConnection =
  amqp.connect(`amqp://${config.amqp.uri}:${config.amqp.port}`);

const conn = amqpConnection;
module.exports = conn;
