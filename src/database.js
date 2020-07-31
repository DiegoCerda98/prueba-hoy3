const mongoose = require('mongoose');

mongoose.connect('mongodb://test:<1978>@cluster0-shard-00-00.g2iri.mongodb.net:27017,cluster0-shard-00-01.g2iri.mongodb.net:27017,cluster0-shard-00-02.g2iri.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-x2qgib-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true
})
  .then(db => console.log('db connected'))
  .catch(err => console.log(err));