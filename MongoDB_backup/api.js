const express = require('express');
const mongodb = require('mongodb');
const dbConnect = require('./config/mongodb');

const app = express();
app.use(express.json());
app.get('/', async(req, resp)=>{
    let dbData = await dbConnect();
    let result = await dbData.find().toArray();
    //console.log(result);
    resp.send(result);
});
app.post('/', async(req,resp)=>{
    let data = await dbConnect();
    let result = await data.insertOne(req.body)
    resp.send(result)
    //console.log(result)
});
app.put("/", async(req,resp)=>{
    let data = await dbConnect();
    let result = await data.updateOne(
        {name : "Iphone 13"},{
            $set:{price:999}
    }
    )
    console.log(result);
    //resp.send({reslut:"update"})
});
app.delete('/:id', async(req, resp) => {
    //console.log(req.params.id)
    const data = await dbConnect();
    const result = await data.deleteOne({ _id: new mongodb.ObjectId(req.params.id) });
    resp.send(result);
});
 app.listen(5000);