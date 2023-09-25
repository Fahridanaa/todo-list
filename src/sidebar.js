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
