import {createSidebar} from './sidebar';

export default function createMain() {
  const main = document.createElement('main');
  main.setAttribute('id', 'main');

  const sidebar = createSidebar();

  let cards = document.createElement('div');
  cards.setAttribute('id', 'cards');

  main.appendChild(sidebar);
  main.appendChild(cards);
  return main;
}