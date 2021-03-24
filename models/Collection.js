const { getConectedClient } = require('../helpers/db-helper/db');

function getCollection() {
  const client = getConectedClient();
  console.log({client})
  const collection = client.db('organicdb').collection('products');
  console.log(collection);

  return collection;
}

module.exports = { getCollection };
