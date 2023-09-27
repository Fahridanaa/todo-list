import clearIcon from './icon/close-outline.svg';

class Card {
  constructor(todo, index) {
    this.todo = todo;
    this.index = index;
    this.element = this.createCardElement();
  }

  createCardElement() {
    const card = document.createElement('div');
    card.classList.add('card', `card-${this.index}`);

    const cardContent = document.createElement('div');
    cardContent.classList.add('card-content');

    const textContent = document.createElement('div');
    textContent.classList.add('text-content');

    const titleElement = document.createElement('h2');
    titleElement.classList.add('card-title');
    titleElement.textContent = this.todo.title;

    const descriptionElement = document.createElement('p');
    descriptionElement.classList.add('card-text');
    descriptionElement.textContent = this.todo.description;

    textContent.appendChild(titleElement);
    textContent.appendChild(descriptionElement);

    const dueDateElement = document.createElement('p');
    dueDateElement.classList.add('card-date');
    dueDateElement.textContent = this.todo.dueDate;

    const clearElement = document.createElement('button');
    clearElement.classList.add('card-clear');

    const clearIconImg = document.createElement('img');
    clearIconImg.setAttribute('src', clearIcon);

    clearElement.appendChild(clearIconImg);

    clearElement.addEventListener('click', () => {
      let todoArray = JSON.parse(localStorage.getItem('todoData')) || [];
      todoArray.splice(this.index, 1);
      localStorage.setItem('todoData', JSON.stringify(todoArray));
      location.reload();
    });

    const checklistElement = document.createElement('input');
    checklistElement.setAttribute('type', 'checkbox');
    checklistElement.checked = this.todo.isCompleted;

    checklistElement.addEventListener('change', () => {
      let todoArray = JSON.parse(localStorage.getItem('todoData')) || [];
      todoArray[this.index].isCompleted = !todoArray[this.index].isCompleted;
      localStorage.setItem('todoData', JSON.stringify(todoArray));
    });

    cardContent.appendChild(textContent);
    cardContent.appendChild(dueDateElement);

    card.appendChild(checklistElement);
    card.appendChild(cardContent);
    card.appendChild(clearElement);

    return card;
  }
}

export default Card;
