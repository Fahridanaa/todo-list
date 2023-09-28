import isToday from "date-fns/isToday";
import Card from "./Card";
import { parseISO } from "date-fns";
import addIcon from "./icon/add-outline.svg";

function filterTodayTodo(todoData) {
  const todayTodo = todoData.filter(todo => isToday(parseISO(todo.dueDate)));
  todoLoader(todayTodo);
}

function filterCompletedTodo(todoData) {
  const completedTodo = todoData.filter(todo => todo.isCompleted);
  todoLoader(completedTodo);
}

function todoLoader(todoData) {
  const cards = document.getElementById('cards');
  cards.innerHTML = '';
  todoData.forEach((todo, index) => {
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

function createDashboardButton() {
  const dashboardButton = createButton('Dashboard');
  dashboardButton.addEventListener('click', () => {
    const todoData = JSON.parse(localStorage.getItem('todoData')) || [];
    todoLoader(todoData);
  });
  return dashboardButton;
}

function createTodayButton() {
  const todayButton = createButton('Today');
  todayButton.addEventListener('click', () => {
    const todoData = JSON.parse(localStorage.getItem('todoData')) || [];
    filterTodayTodo(todoData);
  });
  return todayButton;
}

function createCompletedButton() {
  const completedButton = createButton('Completed');
  completedButton.addEventListener('click', () => {
    const todoData = JSON.parse(localStorage.getItem('todoData')) || [];
    filterCompletedTodo(todoData);
  });
  return completedButton;
}

function createDashboardSection() {
  const dashboardSection = document.createElement('div');
  dashboardSection.setAttribute('id', 'dashboard-section');

  const dashboardContent = [createDashboardButton(), createTodayButton(), createCompletedButton()];

  for (let index = 0; index < dashboardContent.length; index++) {
    let btn = dashboardContent[index];
    dashboardSection.appendChild(btn);
    btn.addEventListener('click', () => {
      const current = dashboardSection.getElementsByClassName("btn-active");
      if (current.length > 0) {
        current[0].className = '';
      }
      btn.className += "btn-active";
    });
  }

  return dashboardSection;
}

function createProjectSection() {
  const projectContent = [];
  const projectSection = document.createElement('div');
  projectSection.setAttribute('id', 'project-section');

  const title = document.createElement('h4');
  title.innerHTML = 'Projects';

  const addProjectButton = document.createElement('button');
  addProjectButton.setAttribute('id', 'add-project');
  const addIconImg = document.createElement('img');
  addIconImg.setAttribute('src', addIcon);

  const projectHeader = document.createElement('div');
  projectHeader.setAttribute('id', 'project-header');

  const projectList = document.createElement('div');
  projectList.setAttribute('id', 'project-list');

  addProjectButton.appendChild(addIconImg);

  projectHeader.appendChild(title);
  projectHeader.appendChild(addProjectButton);

  projectSection.appendChild(projectHeader);
  projectSection.appendChild(projectList);

  return projectSection;
}

function createSidebar() {
  const sidebar = document.createElement('div');
  sidebar.setAttribute('id', 'sidebar');

  const dashboard = createDashboardSection();
  const project = createProjectSection();
  sidebar.appendChild(dashboard);
  sidebar.appendChild(project);

  return sidebar;
}

export { createSidebar };
