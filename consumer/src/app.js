const amqp = require('./amqp');
const Languages = require('./models/languages');
const db = require('./database');

db.on('error', err => {
  console.error(err);
  process.exit(1);
});

amqp.then(conn => conn.createChannel()).then(ch => {
  const q = 'languages';
  return ch.assertQueue(q, { durable: false }).then(() => {
    console.log('Waiting for messages in %s.', q);
    return ch.consume(q, msg => {
      if (msg) {
        save(msg);
        ch.ack(msg);
      }
    });
  });
}).catch(err => {
  console.error(err);
  process.exit(1);
});

const save = msg => {
  console.log('Received %s', msg.content.toString());
  const msgParsed = JSON.parse(msg.content);
  let languages = new Languages({
    'name': msgParsed.name,
    'wikipedia_url': msgParsed.wikipedia_url
  });
  languages.save(err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
};
