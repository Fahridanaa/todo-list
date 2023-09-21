export default function() {
  let modal = document.createElement('div');
  modal.setAttribute('id', 'todoModal');

  let form = document.createElement('form');
  form.setAttribute('id', 'todoForm');

  let inputTitle = document.createElement('input');
  inputTitle.setAttribute('type', 'text');
  inputTitle.setAttribute('id', 'inputTitle');
  inputTitle.setAttribute('placeholder', 'Task Name');

  let inputDescription = document.createElement('input');
  inputDescription.setAttribute('type', 'text');
  inputDescription.setAttribute('id', 'inputDescription');
  inputDescription.setAttribute('placeholder', 'Description');

  let inputDueDate = document.createElement('input');
  inputDueDate.setAttribute('type', 'date');
  inputDueDate.setAttribute('id', 'inputDueDate');

  let labelDueDate = document.createElement('label');
  labelDueDate.setAttribute('for', 'inputDueDate');
  labelDueDate.textContent = 'Due Date:';

  let dueDate = document.createElement('div');
  dueDate.setAttribute('id', 'dueDate');

  dueDate.appendChild(labelDueDate);
  dueDate.appendChild(inputDueDate);

  let chooseProject = document.createElement('div');
  chooseProject.setAttribute('id', 'chooseProject');

  let label = document.createElement('label');
  label.setAttribute('for', 'selectProject');
  label.textContent = 'Choose a project:';

  let selectProject = document.createElement('select');
  selectProject.setAttribute('id', 'selectProject');

  let chooseOption = document.createElement('div');
  chooseOption.setAttribute('id', 'chooseOption');
  
  chooseProject.appendChild(label);
  chooseProject.appendChild(selectProject);
  
  chooseOption.appendChild(dueDate);
  chooseOption.appendChild(chooseProject);

  let projectOption = document.createElement('option');
  projectOption.setAttribute('value', 'default');
  projectOption.textContent = 'Default';

  selectProject.appendChild(projectOption);

  form.appendChild(inputTitle);
  form.appendChild(inputDescription);
  form.appendChild(chooseOption);

  let submit = document.createElement('button');
  submit.setAttribute('type', 'submit');
  submit.setAttribute('id', 'submit');
  submit.textContent = 'Add Task';

  let cancel = document.createElement('button');
  cancel.setAttribute('type', 'button');
  cancel.setAttribute('id', 'cancel');
  cancel.textContent = 'Cancel';
  cancel.addEventListener('click', () => {
    modal.style.display = 'none';
    form.reset();
  });

  let buttons = document.createElement('div');
  buttons.setAttribute('id', 'buttons');

  buttons.appendChild(cancel);
  buttons.appendChild(submit);

  form.appendChild(buttons);

  modal.appendChild(form);

  return modal;
}