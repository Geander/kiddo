const config = require('../config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(
  `mongodb://${config.db.uri}:${config.db.port}/${config.db.base}`,
  { useNewUrlParser: true }
);

const db = mongoose.connection;
module.exports = db;
