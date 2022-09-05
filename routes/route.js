const express = require('express');
const userRoutes = express.Router();
const userctrl = require('../controller/userctrl');
const productctrl = require('../controller/productctrl');
const orderctrl = require('../controller/orderctrl');
const cartctrl = require('../controller/cartctrl');

const { AUTH, LOGIN, REGISTER, PRODUCTS, ORDER, CART } = require('../utils/constants/app_constants').ROUTES;

userRoutes.post(REGISTER, userctrl.register);
userRoutes.post(LOGIN, userctrl.login);
userRoutes.get(AUTH, userctrl.authenticate);
userRoutes.post(PRODUCTS.ADD, productctrl.addProduct);
userRoutes.get(PRODUCTS.FETCH, productctrl.fetchProducts);
userRoutes.get(PRODUCTS.FETCHONE, productctrl.fetchProduct);
userRoutes.post(PRODUCTS.DELETE, productctrl.deleteProduct);
userRoutes.post(ORDER.ADD, orderctrl.addOrder);
userRoutes.get(ORDER.FETCH, orderctrl.fetchOrders);
userRoutes.post(CART.ADD, cartctrl.addcart);
userRoutes.get(CART.FETCH, cartctrl.fetchcart);
userRoutes.post(CART.DELETE, cartctrl.deletecart);
userRoutes.post(CART.UPDATE, cartctrl.updatecart);

module.exports = userRoutes;