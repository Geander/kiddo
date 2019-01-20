const config = require('../config');
const amqp = require('amqplib/callback_api');
const Languages = require('./models/languages');
const db = require('./database');

db.on('error', err => {
  console.error(err);
  process.exit(1);
});

amqp.connect(`amqp://${config.amqp.uri}:${config.amqp.port}`, (err, conn) => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    conn.createChannel((err, ch) => {
      if (err) {
        console.error(err);
        process.exit(1);
      } else {
        const q = 'languages';

        ch.assertQueue(q, { durable: false });
        console.log(' [*] Waiting for messages in %s.', q);
        ch.consume(q, msg => {
          console.log(' [x] Received %s', msg.content.toString());
          const msgParsed = JSON.parse(msg.content);

          let languages = new Languages(
            {
              'name': msgParsed.name,
              'wikipedia_url': msgParsed.wikipedia_url
            }
          );

          languages.save(err => {
            if (err) {
              console.error(err);
              process.exit(1);
            }
          });

        }, { noAck: true });

      }

    });
  }
});
