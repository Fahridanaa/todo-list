const { add } = require("date-fns");

let todoList = new Array(todo);

addTodo = (todo) => {
  todoList.push(todo);
}

removeTodo = (todo) => {
  todoList.splice(todoList.indexOf(todo), 1);
}

getTodoList = () => {
  return todoList;
}

module.exports = {
  addTodo,
  removeTodo,
  getTodoList
}