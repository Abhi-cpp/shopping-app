const UserModel = require('../models/usermodel');
const { response } = require('express');
const bcrypt = require('bcrypt');



module.exports = {
    register(userObj) {
        var promise = UserModel.create(userObj);
        return promise;
    },
    async login(userObj) {
        const user = await UserModel.findOne({ email: userObj.email });
        if (user) {
            const result = await bcrypt.compare(userObj.password, user.password);
            if (result) {
                return user;
            }
            else {
                return null;
            }
        }
    }
}