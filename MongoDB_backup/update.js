const dbConnect = require('./config/mongodb');

const updateData = async ()=>{
    const db = await dbConnect();
    let result = await db.updateMany(
        {name:"Moto G73"},{
            $set:{name:'Moto A G73', price:399}
        }
    );
    //console.log(result);
    if(result.acknowledged)
    {
        console.warn('Data updated Successfully!');
    } 
}
updateData();