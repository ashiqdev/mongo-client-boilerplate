const { getCollection } = require('../models/Collection');

const getProducts = async () => {
  const collection = await getCollection();
  const products = await collection.find({}).toArray();
  return products;
};

const createProduct = async (product) => {
  const collection = await getCollection();

  const newProduct = await collection.insertOne(product);
  return newProduct;
};

module.exports = { getProducts, createProduct };
