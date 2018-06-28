// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err){
        return console.log('unable to connect database');
    }
    console.log('Connected to the mongo database succesfully ');
    
    // db.collection('Todos').insertOne({
    //     text:'Something to do',
    //     completed: false
    // }, (err,result) => {
    //     if(err){
    //         return console.log('unable to insert todo',err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined,2));
    // });
    
    // db.collection('users').insertOne({
    
    //     Name: 'Shivam Shakya',
    //     Age: 22,
    //     Location: 'Agra'
    // }, (err,result) => {
    //     if(err){
    //         return console.log('unable to connect mongo db server');
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp() ));
    // });


    db.close();
});