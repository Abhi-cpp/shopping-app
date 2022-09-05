const repo = require('../DB/repository/userrepo');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const SECRET = 'MY_SECRET_KEY';

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
            // console.log(result);
            const token = jwt.sign({
                userId: result._id,
                email: result.email,
            },
                SECRET,
                { expiresIn: "24h" }
            );
            const email = userObj.email;
            res.status(200).send({
                message: "User Logged In Successfully",
                token,
                email,
            });
        }
        else {
            res.status(401).send({
                message: "Invalid Credentials",
            });
        }

    },
    async authenticate(req, res) {
        const body = req.body;
        console.log(body);
        const token = body.token;
        console.log(token);
        const decoded = jwt.verify(token, SECRET);
        console.log(decoded);
        const user = await repo.checkUser(decoded);
        if (user) {
            res.status(200).send({
                message: "User Authenticated Successfully",
                user,
            });
        }
        else {
            res.status(401).send({
                message: "Invalid Credentials",
            });
        }
    }
}