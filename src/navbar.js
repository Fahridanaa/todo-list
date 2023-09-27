import menuIcon from './icon/menu-outline.svg';
import homeIcon from './icon/home-outline.svg';
import addIcon from './icon/add-outline.svg';
import searchIcon from './icon/search-outline.svg';
import { getDashboardButton } from './sidebar';

function createButton(id, icon) {
  const button = document.createElement('button');
  button.id = id;

  const img = document.createElement('img');
  img.setAttribute('src', icon);

  button.appendChild(img);

  return button;
}

function createMenuButton() {
  const menuButton = createButton('menu', menuIcon);
  menuButton.addEventListener('click', () => {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
  });
  return menuButton;
}

function createHomeButton() {
  const home = createButton('home', homeIcon);
  home.addEventListener('click', () => {
    const dashboardButton = document.getElementById('dashboard');

    if (dashboardButton) {
      dashboardButton.click(); // Klik tombol Dashboard
    }
    console.log("GNOK COK");
  });
  return home;
}

function createAddButton() {
  const addButton = createButton('add', addIcon);
  addButton.addEventListener('click', () => {
    const modal = document.getElementById('todoModal');
    modal.style.display = 'block';
  });
  return addButton;
}

function createSearch() {
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Search';
  input.id = 'search-input';

  const icon = document.createElement('img');
  icon.setAttribute('src', searchIcon);

  const label = document.createElement('label');
  label.setAttribute('for', 'search-input');
  label.appendChild(icon);
  label.appendChild(input);

  const searchDiv = document.createElement('div');
  searchDiv.id = 'search';
  searchDiv.appendChild(label);

  return searchDiv;
}

export default function createNavBar() {
  const nav = document.createElement('div');
  const right = document.createElement('div');
  const left = document.createElement('div');

  nav.setAttribute('id', 'nav');
  right.setAttribute('id', 'right');
  left.setAttribute('id', 'left');

  left.appendChild(createMenuButton());
  left.appendChild(createHomeButton());
  right.appendChild(createAddButton());

  nav.appendChild(left);
  nav.appendChild(createSearch());
  nav.appendChild(right);

  return nav;
}
  