const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express(); 
require("dotenv").config();

//Customers
const customerRouter = require('./routes/customer.routes');
const authRouter = require('./routes/auth.routes');

//Contact Us
const ContactUs = require('./routes/contactUs');
const ViewMsg = require('./routes/viewMsg');

const port = process.env.PORT || 8070;

app.use(cors());
app.use(express.json());

const urlEncodedParser = express.urlencoded({ extended: false });
app.listen(port, (error) => {
    if(error) console.log(error);
    console.log('Server listening to PORT '+ port);
});

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true})
    .then(() => {
    console.log('MongoDB connected');})
    .catch((error) => {
    console.log(error);})


//customers
app.use('/customers',urlEncodedParser,customerRouter);
app.use('/customer', authRouter);

//Contact Us
app.use('/', ContactUs);
app.use('/admin',ViewMsg);