const Cart = require('./cart.model');

exports.getCart = async (req,res) => {
    const {user_id} = req.params;
    var cart = await Cart.getCart(user_id);
    if(cart){
        res.json({
            'cart': cart.rows
            
    });
    }
else{
    res.json({
        'error': 'Unable to get cart'
});
}
}

exports.addCart = async (req,res) => {
    const { body } = req;
    const cart = new Cart(body.user_id, body.products_ids);
    await cart.save();
    res.json({
        'cart': cart
});
}