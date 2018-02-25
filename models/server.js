var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
var mongoose = require('mongoose');
var product = require('./product');
var category=require('./category')
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8090;
var router = express.Router();

mongoose.connect('mongodb://hakim:hakim123@ds145208.mlab.com:45208/productdb-shoppingmart');

// Middle Route 

router.use(function (req, res, next) {
    // do logging 
    // do authentication 
    console.log('Logging of request will be done here');
    next(); // make sure we go to the next routes and don't stop here
});

router.route('/addcategory').post(function (req, res) {
    console.log("in category");
    var c = new category();
    c.title = req.body.title;
    c.key = req.body.key;
    c.featured = req.body.featured;
    c.imageUrl = req.body.imageUrl;
    c.save(function (err) {
        if (err) {
            res.send(err);
        }
        console.log("added");
        res.send({ message: 'Category Added !' })
    })
});

router.route('/getCategory').get(function (req, res) {
    category.find(function (err, products) {
        if (err) {
            res.send(err);
        }
        res.send(products);
    });
});

router.route('/products').post(function (req, res) {
    console.log("in add");
    var p = new product();
    p.title = req.body.title;
    p.price = req.body.price;
    p.instock = req.body.instock;
    p.photo = req.body.photo;
    p.save(function (err) {
        if (err) {
            res.send(err);
        }
        console.log("added");
        res.send({ message: 'Product Created !' })
    })
});

router.route('/getProducts').get(function (req, res) {
    product.find(function (err, products) {
        if (err) {
            res.send(err);
        }
        res.send(products);
    });
});

router.route('/getProduct/:product_id').get(function (req, res) {


    product.findById(req.params.product_id, function (err, prod) {
        if (err)
            res.send(err);
        res.json(prod);
    });
});

router.route('/updateProduct/:product_id').put(function (req, res) {

    product.findById(req.params.product_id, function (err, prod) {
        if (err) {
            res.send(err);
        }
        prod.category = req.body.category;
        prod.description = req.body.description;
        prod.title = req.body.title;
        prod.price = req.body.price;
		prod.imageUrl=req.body.imageUrl
        prod.save(function (err) {
            if (err)
                res.send(err);

            res.json({ message: 'Product updated!' });
        });

    });
});

router.route('/deleteProduct/:product_id').delete(function (req, res) {

    product.remove({ _id: req.param.product_id }, function (err, prod) {
        if (err) {
            res.send(err);
        }
        res.json({ message: 'Successfully deleted' });
    })

});


app.use(cors());
app.use('/api', router);
app.listen(port);

console.log('REST API is runnning at ' + port);