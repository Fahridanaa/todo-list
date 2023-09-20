export default function() {
  let modal = document.createElement('div');
  modal.setAttribute('id', 'todoModal');
  modal.setAttribute('class', 'hide');

  let form = document.createElement('form');
  form.setAttribute('id', 'todoForm');

  let inputTitle = document.createElement('input');
  inputTitle.setAttribute('type', 'text');
  inputTitle.setAttribute('id', 'inputTitle');
  inputTitle.setAttribute('placeholder', 'Title');

  let inputDescription = document.createElement('input');
  inputDescription.setAttribute('type', 'text');
  inputDescription.setAttribute('id', 'inputDescription');
  inputDescription.setAttribute('placeholder', 'Description');

  let inputDueDate = document.createElement('input');
  inputDueDate.setAttribute('type', 'date');
  inputDueDate.setAttribute('id', 'inputDueDate');

  let chooseProject = document.createElement('div');
  chooseProject.setAttribute('id', 'chooseProject');

  let label = document.createElement('label');
  label.setAttribute('for', 'selectProject');
  label.textContent = 'Choose a project:';

  let selectProject = document.createElement('select');
  selectProject.setAttribute('id', 'selectProject');

  chooseProject.appendChild(label);
  chooseProject.appendChild(selectProject);

  let projectOption = document.createElement('option');
  projectOption.setAttribute('value', 'default');
  projectOption.textContent = 'Default';

  selectProject.appendChild(projectOption);

  form.appendChild(inputTitle);
  form.appendChild(inputDescription);
  form.appendChild(inputDueDate);
  form.appendChild(chooseProject);

  let submit = document.createElement('button');
  submit.setAttribute('type', 'submit');
  submit.setAttribute('id', 'submit');
  submit.textContent = 'Submit';

  form.appendChild(submit);

  modal.appendChild(form);

  return modal;
}