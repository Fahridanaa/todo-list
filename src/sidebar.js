import isToday from "date-fns/isToday";
import Card from "./Card";

function filterTodayTodo(todoList) {
  if(todoList === undefined || todoList.length == 0) { return; }
  return todoList.filter(todo => isToday(todo.dueDate));
}

function filterTodo(isToday) {
  const cards = document.getElementById('cards');
  cards.innerHTML = '';

  const todoData = JSON.parse(localStorage.getItem('todoData')) || [];
  const filteredTodo = isToday
    ? filterTodayTodo(todoData)
    : todoData;

  filteredTodo.forEach((todo, index) => {
    const card = new Card(todo, index);
    cards.appendChild(card.element);
  });
}


function createDashboardButton(text) {
  const button = document.createElement('button');
  button.innerHTML = text;
  return button;
}

function createDashboardSection() {
  const dashboardSection = document.createElement('div');
  dashboardSection.setAttribute('id', 'dashboard-section');

  const dashboardContent = ['Dashboard', 'Today'];

  for (let index = 0; index < dashboardContent.length; index++) {
    let btn = createDashboardButton(dashboardContent[index]);
    dashboardSection.appendChild(btn);

    // Tambahkan event listener untuk setiap tombol
    btn.addEventListener('click', () => {
      if (index === 0) {
        filterTodo(false);
      }else {
        filterTodo(true);
      }
    });
  }

  return dashboardSection;
}

function createSidebar() {
  const sidebar = document.createElement('div');
  sidebar.setAttribute('id', 'sidebar');

  const dashboard = createDashboardSection();
  sidebar.appendChild(dashboard);

  return sidebar;
}

export default createSidebar;
