import './style.css';
import nav from './navbar.js';

// make app pages
let app = () => {
    let app = document.createElement('div');
    app.setAttribute('id', 'app');
    app.appendChild(nav());
    return app;
}

document.body.appendChild(app());