const config = require('../config');
const restify = require('restify');
const helmet = require('helmet');
const db = require('./database');

const server = restify.createServer({
  name: config.name,
  version: config.version,
});

server.use(helmet.xssFilter());

server.listen(config.port, () => {

  db.on('error', err => {
    console.error(err);
    process.exit(1);
  });

  db.once('open', () => {
    require('./routes')(server);
    console.log(`Server is listening on port ${config.port}`);
  });

});
