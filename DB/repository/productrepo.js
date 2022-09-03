const ProductModel = require('../models/productmodel');


module.exports = {
    addProduct(productObj) {
        var promise = ProductModel.create(productObj);
        return promise;
    },
    async fetchProducts() {
        const result = await ProductModel.find();
        if (result) {
            return result;
        }
        else {
            return null;
        }
    },
    deleteProduct(productObj) {
        var promise = ProductModel.deleteOne({ _id: productObj });
        return promise;
    }
}