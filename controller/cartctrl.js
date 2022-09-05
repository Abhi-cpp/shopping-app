const repo = require('../DB/repository/cartrepo');
module.exports = {
    async addcart(req, res) {
        const obj = req.body;
        console.log(obj);
        const promise = await repo.addcart(obj)
        promise.then((data) => {
            res.status(200).json({
                message: 'Cart Added',
                data: data
            })
        })
            .catch((err) => {
                res.status(500).json({
                    message: 'Error Occured',
                    err: err
                })
            })
    },
    async fetchcart(req, res) {
        const obj = req.body;
        const result = await repo.fetchcart(obj);
        if (result) {
            res.status(200).send({
                message: "Products Fetched Successfully",
                result,
            });
        }
        else {
            res.status(401).send({
                message: "No Product Found",
            });
        }
    },
    deletecart(req, res) {
        const obj = req.body;
        repo.deletecart(obj)
            .then((data) => {
                res.status(200).send({
                    message: "Product Deleted Successfully",
                    data,
                });
            })
            .catch((error) => {
                res.status(500).send({
                    message: "Error Deleting Product",
                    error,
                });
            })
    },
    updatecart(req, res) {
        const obj = req.body;
        repo.updatecart(obj)
            .then((data) => {
                res.status(200).send({
                    message: "Product Updated Successfully",
                    data,
                });
            })
            .catch((error) => {
                res.status(500).send({
                    message: "Error Updating Product",
                    error,
                });
            })
    }
}