const dbConnect = require('./config/mongodb');
// dbConnect().then((resp)=>{
//  resp.find({name: 'Vivo U10'}).toArray().then((data)=>{
//     console.log(data);
//  });
// })



const main = async() =>{
    let data = await dbConnect();
    data = await data.find().toArray();
    console.warn(data);
}
main();

//Mongooes

const mongoose = require("mongoose");

const saveInDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/node_app_ecom24");
  const productSchema = new mongoose.Schema({
    name: String,
    brand: String,
    price: Number,
    category: String,
  });

  const productsModel = mongoose.model("products", productSchema);
  const product = new productsModel({
    name: "Max 20",
    brand: "micromax",
    price: 59000,
    category: "mobile",
  });
  const result = await product.save();
  console.log(result);
};
const updateInDB = async () => {
  await mongoose.connect("mongodb://localhost:27017/node_app_ecom24");
  const productSchema = new mongoose.Schema({name: String, brand: String, price: Number, category: String
  });
  const productsModel = mongoose.model("products", productSchema);
  let data = await productsModel.updateOne(
    { name: "Max 10" },
    {
      $set: { price: 750, name:"Max 15 pro" },
    }
  );
  console.log(data);
};
updateInDB();

const deleteInDB = async ()=>{
   await mongoose.connect("mongodb://localhost:27017/node_app_ecom24");
  const productSchema = new mongoose.Schema({
    name: String,
    //brand: String,
    price: Number,
    //category: String
  });
   const productsModel = mongoose.model("products", productSchema);
   let data = await productsModel.deleteOne({name:"Max 15 pro"});
   console.log(data);

}
deleteInDB();
const findInDB = async () => {
   await mongoose.connect("mongodb://localhost:27017/node_app_ecom24");
   const productSchema = new mongoose.Schema();
      const productsModel = mongoose.model("products", productSchema);
      let data = await productsModel.find({name:"Iphone 12"});
      console.log(data);
   }
   findInDB();

   //02-11-2024
   //Get, Delete And Put API
   const express = require('express');
require("./config/config");

const Product = require("./product");

const app = express();

app.use(express.json());

app.post('/create', async(req,resp)=>{
  let data = new Product(req.body);
  let result = await data.save();
  console.log(req.body);
  resp.send(result);
});

app.get('/list', async(req, resp) => {
  let data = await Product.find();
  resp.send(data);

});

app.delete('/delete/:_id', async(req, resp) => {
    //console.log(req.params)
    let data = await Product.deleteOne(req.params);
    resp.send(data);
});

app.put('/update/:_id', async(req, resp) => {
  let data = await Product.updateOne(
    req.params,
    { 
      $set: req.body 
    }
);
  resp.send(data);
});
app.listen(5000);