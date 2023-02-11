const mongoose = require('mongoose')

function database(){
    mongoose
        .set('strictQuery', false)
        //connected here
        .connect(process.env.DATABASE_URI, {
            // userCreateIndex: true,
            useNewUrlParser:true,
            // userUnifiedTopology:true,
        })
        .then(()=>{
            console.log('Hurray! mongoDB is connected');
        })
        .catch((err) =>{
            console.log('====== An error occured while connecting to database ======= ' + err);
        })
    
}

module.exports = database;









    // const { MongoClient, ServerApiVersion } = require('mongodb');
    // const client = new MongoClient(process.env.DATABASE_URI, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
    // client.connect(() => {
    //     console.log('Hurray! mongoDB is connected');
    // // perform actions on the collection object
    // client.close();
    // });



