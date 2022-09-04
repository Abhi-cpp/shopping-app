const CartModel = require('../models/cartmodel');

module.exports = {
    addcart(req) {
        cart.findOne({ user: req.user._id })
            .exec((error, cart) => {
                if (cart) {
                    const product = req.body.cartItems.product;
                    const item = cart.cartItems.find(c => c.product == product);
                    if (item) {
                        CartModel.findOneAndUpdate({ "user": req.user._id, "cartItems.product": product }, { "$set": { "cartItems.$.quantity": item.quantity + 1 } })
                            .exec((error, _cart) => {
                                if (error) return error;
                                if (_cart) {
                                    return _cart;
                                }
                            });
                    }
                    else {
                        CartModel.findOneAndUpdate({ user: req.user._id }, { $push: { cartItems: req.body.cartItems } })
                            .exec((error, _cart) => {
                                if (error) return res.status(400).json({ error });
                                if (_cart) {
                                    return res.status(201).json({ cart: _cart });
                                }
                            });
                    }
                }
                else {
                    const cart = new CartModel({
                        user: req.user._id,
                        cartItems: req.body.cartItems
                    });

                    cart.save((err, cart) => {
                        if (err) {
                            return err;
                        }
                        if (cart) return cart;
                    }
                    )
                }
            });

    }
}