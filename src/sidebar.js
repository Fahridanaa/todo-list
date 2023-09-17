import add from './icon/add-outline.svg';

let sideBar = document.createElement('div');
sideBar.setAttribute('id', 'sidebar');



let dashboardList = () => {
  let dashboardSection = document.createElement('div');
  dashboardSection.setAttribute('id', 'dashboard-section');
  
  let dashboardContent = ['Dashboard', 'Today'];

  for (let index = 0; index < dashboardContent.length; index++) {
    let btn = document.createElement('button');
    dashboardSection.appendChild(btn);
    btn.innerHTML = dashboardContent[index];
  }

  return dashboardSection;
}

let projectList = () => {
  let projectSection = document.createElement('div');
  projectSection.setAttribute('id', 'project-section');

  let title = document.createElement('div');
  title.setAttribute('class', 'section-title');

  let h4 = document.createElement('h4');
  h4.textContent = "Projects";

  let addButton = document.createElement('button');
  let img = document.createElement('img');
  img.src = add;

  addButton.appendChild(img);
  title.appendChild(h4);
  title.appendChild(addButton);

  let projectList = document.createElement('div');
  projectList.setAttribute('id', 'project-list');
  
  let projectContent = document.createElement('button');
  projectContent.textContent = 'Project 1';

  projectList.appendChild(projectContent);

  projectSection.appendChild(title);
  projectSection.appendChild(projectList);

  return projectSection;
}

sideBar.appendChild(dashboardList());
sideBar.appendChild(projectList());

export default () => {
  return sideBar;
}