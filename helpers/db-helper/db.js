const MongoClient = require('mongodb').MongoClient;

const {DATABASE} = process.env

const mongodbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;

async function connect() {
  if (!client) {
    client = await MongoClient.connect(DATABASE, mongodbOptions).catch(
      (err) => {
        console.log(err);
      }
    );
  }
  return client;
}

const getConectedClient = () => client;

module.exports = { connect, getConectedClient };
