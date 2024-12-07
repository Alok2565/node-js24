const dbConnect = require('./config/mongodb');

const insert = async ()=>{
    const db = await dbConnect();
    const result = await db.insertMany(
        [
            { name:"Moto G73", brand:"Motorola", price:350, category:"mobile"},
            { name:"Max G25", brand:"Micromax", price:230, category:"mobile"},
            { name:"Max G25", brand:"Micromax", price:230, category:"mobile"}
        ]);
if(result.acknowledged){
    console.log('Data inserted successfully')
}    
}
insert();