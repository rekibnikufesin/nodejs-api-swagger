'use strict';
var client = require('../helpers/es');
var monitor = require('../helpers/monitor');

module.exports = {
  FindTodoById : FindTodoById
}

function FindTodoById(req, res) {
  var start = monitor();
  console.log(`Getting Todo with id ${req.swagger.params.id.value}`);
  client.get({
    index: 'todo',
    type: 'todo',
    id: req.swagger.params.id.value
  }, function(error, response){
    res.header('Content-Type', 'application/json');
    if(error){
      res.end(JSON.stringify(error));
    } else {
      res.end(JSON.stringify(response._source));
      monitor(start, 'FindTodoById');
    }
  });
}
