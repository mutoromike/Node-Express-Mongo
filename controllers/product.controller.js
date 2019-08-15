const Product = require('../models/product.models');

//Simple version, without validation or sanitation
exports.product_create = function (req, res) {
    let product = new Product(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    product.save(function (err) {
        if (err) throw err;
        res.send('Product Created successfully')
    })
};

exports.product_detail = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) throw err;
        res.send(product);
    })
};

exports.products = function (req, res) {
    Product.find({}, (function(err, result) {
        if (err) throw err;
        console.log("The products are", result);
        res.json(result);
    }));
};
