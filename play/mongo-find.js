// const MongoClient = require('mongodb').MongoClient;

const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err){
        return console.log('unable to connect database');
    }
    console.log('Connected to the mongo database succesfully ');
 
//    db.collection('Todos').find({completed: false}).toArray().then((docs) => {
//        console.log('Todo');
//        console.log(JSON.stringify(docs, undefined, 2));
//    }, (err) => {
// console.log('Unable to find data',err);
//    })


// db.collection('Todos').find().count().then((count) => {
//     console.log(`Todos count: ${count}`);
    
// }, (err) => {
// console.log('Unable to find data',err);
// })
    
db.collection('users').find({
    Name: 'Ayush Singh'
}).toArray().then((docs) =>
{
    console.log('users');
    console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
    console.log('unable to fetch data',err);
}
)

});