
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err){
        return console.log('unable to connect database');
    }
    console.log('Connected to the mongo database succesfully ');

    db.collection('users').findOneAndUpdate({
    _id: new ObjectID("5b321914d60e6a1f36a4b9ea")},
    {
        $set: {
            Name: "Ayush"
        },
        
            $inc: {
                Age: 1
            }
        
    },
    {
    returnOriginal: false
    }

    ).then((result) => {
        console.log(result);
    });


});