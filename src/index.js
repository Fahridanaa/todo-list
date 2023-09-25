import './style.css';
import nav from './navbar.js';
import sidebar from './sidebar.js';
import modal from './modal.js';
import main from './main';

// make app pages
let app = () => {
    let app = document.createElement('div');
    app.setAttribute('id', 'app');
    app.appendChild(modal());
    app.appendChild(nav());
    app.appendChild(sidebar());
    app.appendChild(main());
    return app;
}

window.onload = () => {
    document.body.appendChild(app());
}