import menuIcon from './icon/menu-outline.svg';
import homeIcon from './icon/home-outline.svg';
import addIcon from './icon/add-outline.svg';
import searchIcon from './icon/search-outline.svg';


function buttonGenerator(id, icon) {
  let button = document.createElement('button');
  button.id = id;

  let img = document.createElement('img');
  img.setAttribute('src', icon);

  button.appendChild(img);

  return button;
}

let menu = () => {
  let menu = buttonGenerator('menu', menuIcon);
  menu.addEventListener('click', () => {
    let sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
  });
  return menu;
}

let CreateHome = () => {
  let home = buttonGenerator('home', homeIcon);
  return home;
}

let createAdd = () => {
  let add = buttonGenerator('add', addIcon);
  return add;
}

let createSearch = () => {
  let input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Search';
  input.id = 'search-input';
  
  let icon = document.createElement('img');
  icon.setAttribute('src', searchIcon);
  
  let label = document.createElement('label');
  label.setAttribute('for', 'search-input');
  
  let search = document.createElement('div');
  search.id = 'search';

  label.appendChild(icon)
  label.appendChild(input);
  search.appendChild(label);

  return search;
}


export default () => {
  let nav = document.createElement('div');
  let right = document.createElement('div');
  let left = document.createElement('div');
  nav.setAttribute('id', 'nav');
  right.setAttribute('id', 'right');
  left.setAttribute('id', 'left');

  left.appendChild(menu());
  left.appendChild(CreateHome());
  right.appendChild(createAdd());
  nav.appendChild(left);
  nav.appendChild(createSearch());
  nav.appendChild(right);

  return nav;
}