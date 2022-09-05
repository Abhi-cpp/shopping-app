const CartModel = require('../models/cartmodel');

module.exports = {
    addcart(req) {
        const cart = new CartModel(req);
        const count=CartModel.countDocuments({user:req.user._id,product:req.product._id});
    },
    async fetchcart(obj) {
        const result = await CartModel.find({ user: obj.user._id });
        if (result) {
            return result;
        }
        else {
            return null;
        }
    },
    deletecart(obj) {
        const promise = CartModel.deleteOne({ user: obj.user._id, product: obj.product._id });
        return promise;
    },
    updatecart(obj) {
        const promise = CartModel.updateOne({ user: obj.user._id, product: obj.product._id }, { quantity: obj.quantity });
        return promise;
    }

}