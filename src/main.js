import Card from './Card';
import createSidebar from './sidebar';

export default () => {
  const todoData = JSON.parse(localStorage.getItem('todoData')) || [];
  const main = document.createElement('main');
  main.setAttribute('id', 'main');

  let cards = document.createElement('div');
  cards.setAttribute('id', 'cards');
  
  todoData.forEach((todo, index) => {
    const card = new Card(todo, index);
    cards.appendChild(card.element);
  });

  main.appendChild(createSidebar());
  main.appendChild(cards);
  return main;
}
