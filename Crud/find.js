require('../connection');

// models

const Product = require('../models/Product');
//const User = require('./models/User');

/*const product = new Product({
    name: "laptop",
    description: "MacBook Air",
    price: 1499.99
});

const user = new User({
    username: "Diego",
    password: "3434"
});

//console.log(product);
//console.log(user);

product.save((err,document)=>{
    if(err)console.log(err);
    console.log("saved: ", document)
});*/

Product.find({
    name: 'monitor'
})
.then(doc=>{
    console.log(doc)
})
.catch(err=> {
    console.error(err)
});