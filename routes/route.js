const express = require('express');
const userRoutes = express.Router();
const userctrl = require('../controller/userctrl');

const { LOGIN, REGISTER } = require('../utils/constants/app_constants').ROUTES;

userRoutes.post(REGISTER, userctrl.register);
userRoutes.post(LOGIN, userctrl.login);

module.exports = userRoutes;