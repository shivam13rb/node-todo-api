const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');


//var id = '5b339429a7c3764429d4626d';

// Todo.remove({}).then((result) => {
//     console.log(result);
// })

// Todo.findByIdAndRemove('5b34bceacc8cf2a6f09657fe').then((todo) => {
//     console.log(todo);
// });

Todo.findOneAndRemove({_id:'5b34bde8cc8cf2a6f09658a3'}).then((todo) => {
    console.log(todo)
})