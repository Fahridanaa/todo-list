import './style.css';
import nav from './navbar.js';
import sidebar from './sidebar';

// make app pages
let app = () => {
    let app = document.createElement('div');
    app.setAttribute('id', 'app');
    app.appendChild(nav());
    app.appendChild(sidebar());
    return app;
}

document.body.appendChild(app());