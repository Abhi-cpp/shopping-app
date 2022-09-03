const UserModel = require('../models/usermodel');
const { response } = require('express');

module.exports = {
    register(userObj) {
        var promise = UserModel.create(userObj);
        return promise;
    },
    login(userObj) {
        var promise = UserModel.findOne({ email: userObj.email, password: userObj.password });
        return promise;
    }
}