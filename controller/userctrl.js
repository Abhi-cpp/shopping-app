const repo = require('../DB/repository/userrepo');
const bcrypt = require('bcrypt');

module.exports = {
    register(req, res) {
        let userObj = req.body;
        console.log(userObj);
        bcrypt.hash(userObj.password, 10)
            .then((hash) => {
                userObj.password = hash;
                repo.register(userObj)
                    .then((data) => {
                        res.status(201).send({
                            message: "User Created Successfully",
                            data,
                        });
                    })
                    .catch((error) => {
                        res.status(500).send({
                            message: "Error creating user",
                            error,
                        });
                    })
            })
            .catch((e) => {
                res.status(500).send({
                    message: "Password was not hashed successfully",
                    e,
                });
            });
    }
    ,
    login(req, res) {
        let userObj = req.body;
        console.log(userObj);
        bcrypt.hash(userObj.password, 10)
            .then((hash) => {
                userObj.password = hash;
                repo.login(userObj)
                    .then((data) => {
                        res.status(201).send({
                            message: "User login Successfully",
                            data,
                        });
                    })
                    .catch((error) => {
                        res.status(500).send({
                            message: "Error login user",
                            error,
                        });
                    })
            })
            .catch((e) => {
                res.status(500).send({
                    message: "Password was not hashed successfully",
                    e,
                });
            });

    }
}