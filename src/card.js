export default function(title, description, dueDate, priority, notes, checklist, project) {
  let card = document.createElement('div');
  card.setAttribute('class', 'card');

  let cardContent = document.createElement('div')
  cardContent.setAttribute('id', 'card-content')

  let titleElement = document.createElement('h5');
  titleElement.setAttribute('class', 'card-title');

  let descriptionElement = document.createElement('p');
  descriptionElement.setAttribute('class', 'card-text');

  let dueDateElement = document.createElement('p');
  dueDateElement.setAttribute('class', 'card-date');

  let priorityElement = document.createElement('p');
  priorityElement.setAttribute('class', 'card-priority');

  let editElement = document.createElement('button');
  editElement.setAttribute('class', 'card-edit');

  let checklistElement = document.createElement('checkbox');
  checklistElement.setAttribute('class', 'card-checkbox');

  cardContent.appendChild(titleElement);
  cardContent.appendChild(descriptionElement);
  cardContent.appendChild(dueDateElement);
  cardContent.appendChild(priorityElement);

  card.appendChild(checklistElement);
  card.appendChild(cardContent);
  card.appendChild(editElement);
}