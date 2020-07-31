require('./connection');

// models

const Product = require('./models/Product');
const User = require('./models/User');

const product = new Product({
    name: "monitor",
    description: "Pantalla",
    price: 1499.99
});

/*const user = new User({
    username: "Diego",
    password: "3434"
});*/

//console.log(product);
//console.log(user);

product.save((err,document)=>{
    if(err)console.log(err);
    console.log("saved: ", document)
});