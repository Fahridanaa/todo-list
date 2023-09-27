import './style.css';
import createNavbar from './navbar.js';
import createModal from './modal.js';
import createMain from './main.js';

function createApp() {
  const app = document.createElement('div');
  app.setAttribute('id', 'app');

  const components = [createModal, createNavbar, createMain];

  components.forEach(component => {
    app.appendChild(component());
  });

  return app;
}

window.onload = () => {
  document.body.appendChild(createApp());
  document.getElementById('dashboard').click();
};
