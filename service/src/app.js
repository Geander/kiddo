const config = require('../config');
const restify = require('restify');
const mongoose = require('mongoose');
const helmet = require('helmet');

const server = restify.createServer({
  name: config.name,
  version: config.version,
});

server.use(helmet.xssFilter());

server.listen(config.port, () => {

  mongoose.Promise = global.Promise;
  mongoose.connect(
    `mongodb://${config.db.uri}:${config.db.port}/${config.db.base}`,
    { useNewUrlParser: true }
  );

  const db = mongoose.connection;

  db.on('error', err => {
    console.error(err);
    process.exit(1);
  });

  db.once('open', () => {
    require('./routes')(server);
    console.log(`Server is listening on port ${config.port}`);
  });
});
