const errors = require('restify-errors');
const Languages = require('../models/languages');

module.exports = function (server) {

  server.post('/languages', (req, res, next) => {
    if (!req.is('application/json')) {
      return next(
        new errors.InvalidContentError('Expects \'application/json\'')
      );
    }

    let data = req.body || {};

    let languages = new Languages(data);
    languages.save(err => {
      if (err) {
        console.error(err);
        return next(new errors.InternalError(err.message));
      } else {
        res.send(201);
        next();
      }
    });
  });

  server.get('/', (_req, res, next) => {
    const query = Languages.find({}).select('-_id -__v');
    query.exec((err, docs) => {
      if (err) {
        console.error(err);
        return next(
          new errors.InvalidContentError(err.errors.name.message)
        );
      } else {
        res.send(docs);
        next();
      }
    });
  });

};
