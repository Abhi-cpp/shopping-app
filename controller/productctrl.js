const repo = require('../DB/repository/productrepo');

module.exports = {
    addProduct(req, res) {
        let productObj = req.body;
        repo.addProduct(productObj)
            .then((data) => {
                res.status(201).send({
                    message: "Product Added Successfully",
                    data,
                });
            })
            .catch((error) => {
                res.status(500).send({
                    message: "Error adding product",
                    error,
                });
            })
    },
    async fetchProducts(req, res) {
        const result = await repo.fetchProducts();
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
    async fetchProduct(req, res) {
        const result = await repo.fetchProduct(req.body)
        if (result) {
            res.status(200).send({
                message: "Product Fetched Successfully",
                result,
            });
        }
        else {
            res.status(401).send({
                message: "No Product Found",
            });
        }
    },
    deleteProduct(req, res) {
        let productObj = req._id;
        repo.deleteProduct(productObj)
            .then((data) => {
                res.status(201).send({
                    message: "Product Deleted Successfully",
                    data,
                });
            })
            .catch((error) => {
                res.status(500).send({
                    message: "Error deleting product",
                    error,
                });
            })
    }

}