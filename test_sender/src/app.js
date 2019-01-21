const csv = require('csvtojson');
const path = require('path');
const amqp = require('./amqp');

const csvFilePath = path.resolve(__dirname, '../programming-languages.csv');

(async () => {

  const options = {
    noheader: false,
    output: 'json'
  };

  const jsonArray = await csv(options).fromFile(csvFilePath);

  jsonArray.map(i => {

    amqp.then(conn => conn.createChannel()).then(ch => {
      const q = 'languages';
      return ch.assertQueue(q, { durable: false }).then(() =>
        ch.sendToQueue(q, Buffer.from(JSON.stringify(i)))
      );
    }).catch(err => {
      console.error(err);
      process.exit(1);
    });

  });

  console.log('Done!');

})();
