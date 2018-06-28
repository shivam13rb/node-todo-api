const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');


var id = '5b339429a7c3764429d4626d';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }
// Todo.find({
//     _id: id
// }).then((todos) => {
// console.log('Todos',todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
// console.log('Todos',todo);
// });

Todo.findById(id).then((todos) => {
    if(!todos){
        return console.log('ID not found');
    }
    console.log('Todo by Id',todos);
    }).catch((e) => {
        console.log(e);
    })

