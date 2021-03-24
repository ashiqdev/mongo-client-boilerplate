const { getConectedClient } = require('../helpers/db-helper/db');

function getCollection() {
  const client = getConectedClient();
  const collection = client.db('organicdb').collection('products');

  return collection;
}

module.exports = { getCollection };
