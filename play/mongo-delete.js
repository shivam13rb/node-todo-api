
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) => {
    if(err){
        return console.log('unable to connect database');
    }
    console.log('Connected to the mongo database succesfully ');


// db.collection('users').deleteMany({Name: 'Ayush Singh'}).then((result) =>
// {
//     console.log(result);
// })

db.collection('users').findOneAndDelete({
    _id: new ObjectID("5b3218b5bcde6b1f1693c423")
}).then((result) => {
    console.log(result);
})

});