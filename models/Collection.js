const { getClient} = require('../helpers/db-helper/db');

// exports.collection = client.db('organicdb').collection('products');

async function getCollection() {
  const client = await getClient();
  const collection = client.db('organicdb').collection('products');

  return collection;
}

module.exports = {getCollection}