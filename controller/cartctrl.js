const repo = require('../DB/repository/cartrepo');
module.exports = {
    addcart(req, res) {
        console.log(req);
        repo.addcart(req)
            .then((data) => {
                res.status(201).send({
                    message: "Product Added to cart Successfully",
                    data,
                });
            })
            .catch((error) => {
                res.status(500).send({
                    message: "Error adding product",
                    error,
                });
            })
    }
}