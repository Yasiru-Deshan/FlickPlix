const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express(); 
const commentRoute = require("./routes/comment");
require("dotenv").config();

//Customers
const customerRouter = require('./routes/customer.routes');
const authRouter = require('./routes/auth.routes');

const PORT = process.env.PORT||8070;
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const urlEncodedParser = express.urlencoded({ extended: false });
app.listen(port, (error) => {
    if(error) console.log(error);
    console.log('Server listening to PORT '+ port);
});

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
       useCreateIndex: true,
       useNewUrlParser: true,
       useUnifiedTopology: true,
       useFindAndModify: false
});


const connection = mongoose.connection;
connection.once("open", ()=>{
    console.log("Mongodb connection success!");
});

app.use("/api/comments", commentRoute);

app.listen(PORT,()=>{
    console.log(`Server is up and running on port ${PORT}`)
});

//customers
app.use('/customers',urlEncodedParser,customerRouter);
app.use('/customer', authRouter);