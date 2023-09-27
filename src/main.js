import {createSidebar} from './sidebar';
import Card from './Card';

export default function createMain() {
  const todoData = JSON.parse(localStorage.getItem('todoData')) || [];
  const main = document.createElement('main');
  main.setAttribute('id', 'main');

  const sidebar = createSidebar();

  let cards = document.createElement('div');
  cards.setAttribute('id', 'cards');

  todoData.forEach((todo, index) => {
    const card = new Card(todo, index);
    cards.appendChild(card.element);
  });

  main.appendChild(sidebar);
  main.appendChild(cards);
  return main;
}
