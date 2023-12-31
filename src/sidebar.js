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

function filterUncompletedTodo(todoData) {
  const uncompletedTodo = todoData.filter(todo => !todo.isCompleted);
  todoLoader(uncompletedTodo);
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
    filterUncompletedTodo(todoData);
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

function clickHandler(section, content) {
  content.addEventListener('click', () => {
    const current = document.getElementsByClassName("btn-active");
    if (current.length > 0) {
      current[0].className = '';
    }
    content.className += "btn-active";
  });
  section.appendChild(content);
}

function createDashboardSection() {
  const dashboardSection = document.createElement('div');
  dashboardSection.setAttribute('id', 'dashboard-section');

  const dashboardContent = [createDashboardButton(), createTodayButton(), createCompletedButton()];

  dashboardContent.forEach(content => {
    clickHandler(dashboardSection, content);
  });

  return dashboardSection;
}

function createAddButton(id) {
  const addButton = document.createElement('button');
  addButton.setAttribute('id', id);
  const addIconImg = document.createElement('img');
  addIconImg.setAttribute('src', addIcon);
  addButton.appendChild(addIconImg);

  addButton.addEventListener('click', () => {
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
  });

  return addButton;
}

function createAddProjectButton() {
  const addProjectButton = createAddButton('add-project', addIcon);
  addProjectButton.addEventListener('click', () => {
    const projectBtn = document.getElementById('ProjectModalBtn');
    projectBtn.click();
  });

  return addProjectButton;
}

function createProjectList() {
  const projectList = document.createElement('div');
  projectList.setAttribute('id', 'project-list');
  
  const projectData = JSON.parse(localStorage.getItem('projectData')) || [];

  projectData.forEach(project => {
    const projectItem = createButton(project);
    projectItem.addEventListener('click', () => {
      const todoData = JSON.parse(localStorage.getItem('todoData')) || [];
      const filteredTodo = todoData.filter(todo => todo.project === project);
      todoLoader(filteredTodo);
    });
    clickHandler(projectList, projectItem);
  });

  return projectList;
}

function createProjectSection() {
  const projectSection = document.createElement('div');
  projectSection.setAttribute('id', 'project-section');

  const title = document.createElement('h4');
  title.innerHTML = 'Projects';

  const projectHeader = document.createElement('div');
  projectHeader.setAttribute('id', 'project-header');

  projectHeader.appendChild(title);
  projectHeader.appendChild(createAddProjectButton());

  projectSection.appendChild(projectHeader);
  projectSection.appendChild(createProjectList());

  return projectSection;
}

function createSidebar() {
  const sidebar = document.createElement('div');
  sidebar.setAttribute('id', 'sidebar');

  const sidebarContent = [createDashboardSection(), createProjectSection()];

  sidebarContent.forEach(content => {
    sidebar.appendChild(content);
  });

  return sidebar;
}

export { createSidebar };
