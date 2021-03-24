const express = require('express');
const {
  getProducts,
  createProduct,
  getProduct,
  updateProduct,
  deleteProduct,
} = require('../services/product-service');

const router = express.Router();

const getHandler = async (req, res) => {
  // get products by calling db
  const products = await getProducts();
  res.status(200).send(products);
};

const getByIdHandler = async (req, res) => {
  const product = await getProduct(req.params.id);
  res.status(200).send(product);
};

const postHandler = async (req, res) => {
  const response = await createProduct(req.body);
  const product = response.ops[0];
  res.status(201).send(product);
};

const putHandler = async (req, res) => {
  const product = { ...req.body };
  const result = await updateProduct(req.params.id, product);
  if (result.result.ok === 1)
    res.status(200).send('The product has been updated');
};

const deleteHandler = async (req, res) => {
  const result = await deleteProduct(req.params.id);
  if (result.deletedCount > 0)
    res.status(200).send('The product has been updated');
};

router.get('/products', getHandler);
router.get('/product/:id', getByIdHandler);
router.post('/product', postHandler);
router.put('/product/:id', putHandler);
router.delete('/product/:id', deleteHandler);

module.exports = router;
