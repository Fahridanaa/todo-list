// let sideBar = document.createElement('div');
// sideBar.setAttribute('id', 'sidebar');

// let dashboardList = () => {
//   let dashboardSection = document.createElement('div');
//   dashboardSection.setAttribute('id', 'dashboard-section');
  
//   let dashboardContent = ['Dashboard', 'Today'];

//   for (let index = 0; index < dashboardContent.length; index++) {
//     let btn = document.createElement('button');
//     dashboardSection.appendChild(btn);
//     btn.innerHTML = dashboardContent[index];
//   }

//   return dashboardSection;
// }

// sideBar.appendChild(dashboardList());

// export default () => {
//   return sideBar;
// }

function createDashboardButton(text) {
  const button = document.createElement('button');
  button.innerHTML = text;
  return button;
}

function createDashboardSection() {
  const dashboardSection = document.createElement('div');
  dashboardSection.setAttribute('id', 'dashboard-section');

  const dashboardContent = ['Dashboard', 'Today'];

  dashboardContent.forEach(text => {
    const button = createDashboardButton(text);
    dashboardSection.appendChild(button);
  });

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
