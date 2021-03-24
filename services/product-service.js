const { getCollection } = require('../models/Collection');

const collection = getCollection();

const getProducts = async () => {
  const products = collection.find({}).toArray();
  return products;
};

const createProduct = async (product) => {
  const newProduct = collection.insertOne(product);
  return newProduct;
};

module.exports = { getProducts, createProduct };
