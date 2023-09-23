import sidebar from "./sidebar";
import editImg from './icon/edit-outline.svg';

export default function() {
  let main = document.createElement('div');
  main.setAttribute('id', 'main');
  let cards = document.createElement('div');
  cards.setAttribute('id', 'cards');

  for(let i = 0; i < JSON.parse(localStorage.getItem('todoData')).length; i++) {
    let card = document.createElement('div');
    card.setAttribute('class', `card ${i}`);

    let cardContent = document.createElement('div')
    cardContent.setAttribute('class', 'card-content')

    let textContent = document.createElement('div');
    textContent.setAttribute('class', 'text-content');

    let titleElement = document.createElement('h2');
    titleElement.setAttribute('class', 'card-title');
    titleElement.textContent = JSON.parse(localStorage.getItem('todoData'))[i].title;

    let descriptionElement = document.createElement('p');
    descriptionElement.setAttribute('class', 'card-text');
    descriptionElement.textContent = JSON.parse(localStorage.getItem('todoData'))[i].description;

    textContent.appendChild(titleElement);
    textContent.appendChild(descriptionElement);

    let dueDateElement = document.createElement('p');
    dueDateElement.setAttribute('class', 'card-date');
    dueDateElement.textContent = JSON.parse(localStorage.getItem('todoData'))[i].dueDate;

    let editElement = document.createElement('button');
    editElement.setAttribute('class', 'card-edit');
    
    let editIcon = document.createElement('img');
    editIcon.setAttribute('src', editImg);

    editElement.appendChild(editIcon);

    let checklistElement = document.createElement('input');
    checklistElement.setAttribute('type', 'checkbox');
    if (JSON.parse(localStorage.getItem('todoData'))[i].checklist) {
      checklistElement.setAttribute('checked', 'true');
    }

    cardContent.appendChild(textContent);
    cardContent.appendChild(dueDateElement);

    card.appendChild(checklistElement);
    card.appendChild(cardContent);
    card.appendChild(editElement);

    cards.appendChild(card);
  }
  main.appendChild(sidebar());
  main.appendChild(cards);
  return main;
}