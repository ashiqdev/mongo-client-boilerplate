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

async function getClient() {
  if (!client) {
    client = await MongoClient.connect(DATABASE, mongodbOptions).catch((err) =>
      console.log(err)
    );
  }
  return client;
}



module.exports = { getClient };

// const connectWithMongoDb = (client) => {
//   client.connect((err, connection) => {
//     if (err) {
//       throw err;
//     } else {
//       console.log('db connected', connection);
//     }
//   });
// };

// const client = MongoClient.connect(DATABASE, mongodbOptions)
//   .then()
//   .catch((err) => console.log(err));

// module.exports = { client, connectWithMongoDb };
