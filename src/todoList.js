import todo from './todo.js';

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

module.exports = {todoList};