const Product = require('./product.model');

exports.getAllProducts = async (req,res) => {
    var products = await Product.getAllProducts();
    if(products){
        res.json({
            'products': products.rows
    });
    }else{
        res.json({
            'error': 'Unable to get products'
    });
    }
}

exports.getProduct = async (req,res) => {
    const { id } = req.params;
    var product = await Product.getProduct(id);
    if(product){
        res.json({
            'product': product.rows[0]
    });
    }else{
        res.json({
            'error': 'Unable to get product'
    });
    }
}

exports.addProduct = async (req,res) => {
    const { body } = req;
    const product = new Product(body.name, body.img, body.description, body.category, body.price, body.quantity, JSON.stringify(body.reviews), body.rating);
    await product.save();
    res.json({
        'product': product
});
}