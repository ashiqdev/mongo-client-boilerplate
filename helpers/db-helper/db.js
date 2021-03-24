const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectID;
// const { DATABASE } = process.env;
const DATABASE =
  'mongodb+srv://ashik:5470@cluster0.n2aoz.mongodb.net/organicdb?retryWrites=true&w=majority';

const mongodbOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let client;

async function connect() {
  if (!client) {
    client = await MongoClient.connect(DATABASE, mongodbOptions).catch((err) =>
      console.log(err)
    );
  }
  return client;
}

const getConectedClient = () => client;

module.exports = { connect, getConectedClient };
