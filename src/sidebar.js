import isToday from "date-fns/isToday";
import Card from "./Card";
import { parseISO } from "date-fns";

function filterTodayTodo(todoList) {
  if(todoList === undefined || todoList.length == 0) { return; }
  return todoList.filter(todo => isToday(parseISO(todo.dueDate)));
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


function createButton(text) {
  const button = document.createElement('button');
  button.id = text.toLowerCase();
  button.innerHTML = text;
  return button;
}

function createDashboardSection() {
  const dashboardSection = document.createElement('div');
  dashboardSection.setAttribute('id', 'dashboard-section');

  const dashboardContent = ['Dashboard', 'Today'];

  for (let index = 0; index < dashboardContent.length; index++) {
    let btn = createButton(dashboardContent[index]);
    dashboardSection.appendChild(btn);
    btn.addEventListener('click', () => {
      const current = dashboardSection.getElementsByClassName("btn-active");
      if (current.length > 0) {
        current[0].className = '';
      }
      btn.className += "btn-active";
      if (index === 1) {
        filterTodo(true);
        return;
      }
      filterTodo(false);
    });
  }

  return dashboardSection;
}

function getDashboardButton() {
  return document.getElementById('dashboardButton');
}

function createSidebar() {
  const sidebar = document.createElement('div');
  sidebar.setAttribute('id', 'sidebar');

  const dashboard = createDashboardSection();
  sidebar.appendChild(dashboard);

  return sidebar;
}

export { createSidebar, filterTodo, getDashboardButton };
