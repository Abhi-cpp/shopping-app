const repo = require("../DB/repository/cartrepo");
const productRepo = require("../DB/repository/productrepo");
const userRepo = require("../DB/repository/userrepo");

module.exports = {
    async add(request, response) {
        const cartObject = request.body;
        const result = await repo.getByProduct(cartObject);
        console.log("### " + result);
        if (result) {
            response.status(500).send({
                message: "Already in Cart"
            })
        }
        else {
            repo.add(cartObject).then(data => {
                response.status(201).send({
                    message: "Product added to cart Successfully",
                    data,
                });
            }).catch(err => {
                response.status(401).send({
                    message: "Some error occured"
                });
            })

        }
    },
    update(request, response) {
        const cartObject = request.body;
        repo.update(cartObject).then(data => {
            response.status(201).send({
                message: "Updated Successfully",
                data,
            });
        }).catch(err => {
            response.status(401).send({
                message: "Some error occured", err,
            })
        })


    },
    delete(request, response) {
        const cartObject = request.body;
        repo.delete(cartObject).then(data => {
            response.status(201).send({
                message: "Deleted Successfully",
                data,
            });
        }).catch(err => {
            response.status(401).send({
                message: "Some error occured", err,
            })
        })
    },
    async fetch(request, response) {
        const userObject = request.body;
        // console.log(userObject);
        const user = await userRepo.find(userObject);
        const result = await repo.getByUser(user);

        if (result) {
            response.status(201).send({
                message: "Users Data Found", result
            })

        }
        else {
            response.status(404).send({
                message: "error"
            })
        }
    },
}