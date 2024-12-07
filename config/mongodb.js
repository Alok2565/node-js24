const {MongoClient} = require('mongodb');
//const MongoClient = require('mongodb').MongoClient; //Same as above

//Connection URL
const url = 'mongodb://localhost:27017';
const DB_Name = 'node_app_ecom24';
const client = new MongoClient(url);

async function dbConnect()
{
    let conn_result = await client.connect();
    db = conn_result.db(DB_Name);
    return db.collection('products');
}
module.exports =dbConnect;