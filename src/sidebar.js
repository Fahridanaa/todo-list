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

sideBar.appendChild(dashboardList());

export default () => {
  return sideBar;
}