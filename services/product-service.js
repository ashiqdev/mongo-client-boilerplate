const { getCollection } = require('../models/Collection');
const ObjectId = require('mongodb').ObjectID;

const collection = getCollection();

const getProducts = () => {
  const products = collection.find({}).toArray();
  return products;
};

const createProduct = (product) => {
  const newProduct = collection.insertOne(product);
  return newProduct;
};

const getProduct = (id) => {
  const product = collection.findOne({ _id: ObjectId(id) });
  return product;
};

const deleteProduct = (id) => {
  const product = collection.deleteOne({ _id: ObjectId(id) });
  return product;
};

const updateProduct = (id, { name, price, quantity }) => {
  const product = collection.updateOne(
    { _id: ObjectId(id) },
    {
      $set: {
        price: price,
        name: name,
        quantity: quantity,
      },
    }
  );

  return product;
};

module.exports = {
  getProducts,
  createProduct,
  getProduct,
  deleteProduct,
  updateProduct,
};
