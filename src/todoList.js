import Todo from './todo.js';

let list = new Array(Todo);

let todoList = {
  addTodo: (Todo) => {
    list.push(Todo);
  },
  removeTodo: (Todo) => {
    list.splice(list.indexOf(Todo), 1);
  },
  getTodoList: () => {
    return list;
  }
}

export default todoList;