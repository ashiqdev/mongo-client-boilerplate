const express = require('express');
const { getProducts, createProduct } = require('../services/product-service');

const router = express.Router();

const getHandler = async (req, res) => {
  // get products by calling db
  const products = await getProducts();
  res.status(200).send(products);
};

const postHandler = async (req, res) => {
  const response = await createProduct(req.body);
  const product = response.ops[0];
  res.status(201).send(product);
};

router.get('/', getHandler);
router.post('/product', postHandler);

module.exports = router;
