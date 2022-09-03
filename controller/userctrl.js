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
    async login(req, res) {
        let userObj = req.body;
        console.log(userObj);
        const result = await repo.login(userObj);
        if (result) {
            res.status(200).send({
                message: "User Logged In Successfully",
                result,
            });
        }
        else {
            res.status(401).send({
                message: "Invalid Credentials",
            });
        }

    }
}