const dbConnect = require('./config/mongodb');

const deleteData = async() =>{
    const db = await dbConnect();
    let result = await db.deleteMany(
        {name:'note 5'}
    )
    //console.warn(result);
    if(result.acknowledged)
    {
        console.log('Data deleted successfully!');
    }
}
deleteData();