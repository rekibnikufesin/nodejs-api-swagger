'use strict';
var client = require('../helpers/es');
var monitor = require('../helpers/monitor');

module.exports = {
  AddTodo : AddTodo
}

function AddTodo(req, res){
  var start = monitor();
  client.create({
    index: 'todo',
    type: 'todo',
    id: req.swagger.params.todo.value.todo_id,
    body: req.swagger.params.todo.value
  }, function(error,response){
    res.header('Content-Type', 'application/json');
    if(error){
      console.log(error);
      res.statusCode = 409;
      res.end(JSON.stringify(error));
    } else {
      console.log(JSON.stringify({'id': req.swagger.params.todo.value.todo_id}));
      res.end(JSON.stringify({'id': req.swagger.params.todo.value.todo_id}));
      monitor(start, 'AddTodo');
    }
  })
}
