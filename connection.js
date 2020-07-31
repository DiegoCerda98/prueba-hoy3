const mongoose = require("mongoose");
 
const connection = "mongodb://127.0.0.1:27017/mywebstore";
 
mongoose
     .connect (connection, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         useCreateIndex: true
     })
     .catch(erro => console.log(err));
 
const db = mongoose.connection;
 
db.once("open", () => {
    console.log("Datbase connect to : " , connection);
})
 
db.on("error", (err) => {
    console.log(err);
})