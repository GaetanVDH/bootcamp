var express = require('express');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var app = express();

app.use(cors());
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

//setup db
mongoose.connect('mongodb://localhost/demo');

var Product = mongoose.model('Product', {
    name: String,
    price: Number
});

//routes
app.get('/api/users', function(req, res, next){
    res.status(200).send('Get working');
});

app.get('/api/products', function(req, res, next){
    Product.find(function(err, products){
        res.status(200).send(products);
    });
});

app.get('/api/products/:id', function(req, res, next){
    Product.findOne({ _id: req.params.id }, function(err, product){
        if(product){
            return res.status(200).send(product);
        }
        return res.status(404).send('Resource not found!');
    });
});

app.post('/api/products', function(req, res, next){
    var product = new Product({
        name: req.body.name,
        price: req.body.price
    });
    console.log('first: ' + product);
    product.save(function(err){
        console.log('second: ' + product);
        res.status(201).send(product);
    });
});

//-----------------------------

// var product = new Product({
//     name: 'OnePlus',
//     price: '400'
// });

// product.save(function(err){
//     if(err){
//         return console.log('failed: ', err);
//     }
//     console.log('saved');
// });

//-----------------------------

var port = process.env.PORT || 3000;

var server = app.listen(port, function(){
    console.log('Express server listening on port ' + server.address().port);
});
