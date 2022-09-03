const express = require('express');
const userRoutes = express.Router();
const userctrl = require('../controller/userctrl');
const productctrl = require('../controller/productctrl');

const { LOGIN, REGISTER, PRODUCTS } = require('../utils/constants/app_constants').ROUTES;

userRoutes.post(REGISTER, userctrl.register);
userRoutes.post(LOGIN, userctrl.login);
userRoutes.post(PRODUCTS.ADD, productctrl.addProduct);
userRoutes.get(PRODUCTS.FETCH, productctrl.fetchProducts);
userRoutes.post(PRODUCTS.DELETE, productctrl.deleteProduct);

module.exports = userRoutes;