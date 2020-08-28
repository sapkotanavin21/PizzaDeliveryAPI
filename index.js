const express = require('express');
const mongoose = require('mongoose');
const cartRouter = require('./routes/cart');
const SmallpizzaRoute = require('./routes/Smallpizza');
const MediumpizzaRouter  = require('./routes/Mediumpizza');
const LargepizzaRouter = require('./routes/Largepizza');
const dotenv = require('dotenv').config();
const uploadRouter = require('./routes/upload');
const userRouter = require('./routes/user');
const cors = require('cors');

const app = express();
app.options('*',cors());
app.use(cors());
app.use(express.static(__dirname + "/public"));

mongoose.connect(process.env.DB,{useNewUrlParser:true, useUnifiedTopology:true, useCreateIndex:true}).then((db) =>
{
console.log("Sucessfully connected mongodb server");
})


app.use(express.json());
app.use('/users',userRouter);
app.use('/upload', uploadRouter);
app.use('/cart',cartRouter); 
app.use('/smallpizza', SmallpizzaRoute)
app.use('/mediumpizza', MediumpizzaRouter);
app.use('/largepizza', LargepizzaRouter);

app.listen(process.env.PORT, () => {
    console.log(`App is running at localhost:${process.env.PORT}`);
});

