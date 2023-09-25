import Todo from "./todo";

let Title = () => {
  let inputTitle = document.createElement('input');
  inputTitle.setAttribute('type', 'text');
  inputTitle.setAttribute('id', 'inputTitle');
  inputTitle.setAttribute('placeholder', 'Task Name');
  inputTitle.setAttribute('name', 'title');
  inputTitle.setAttribute('required', '');

  return inputTitle;
}

let Description = () => {
  let inputDescription = document.createElement('input');
  inputDescription.setAttribute('type', 'text');
  inputDescription.setAttribute('id', 'inputDescription');
  inputDescription.setAttribute('placeholder', 'Description');
  inputDescription.setAttribute('name', 'description');

  return inputDescription;
}

let DueDate = () => {
  let inputDueDate = document.createElement('input');
  inputDueDate.setAttribute('type', 'date');
  inputDueDate.setAttribute('id', 'inputDueDate');
  inputDueDate.setAttribute('name', 'dueDate');

  let labelDueDate = document.createElement('label');
  labelDueDate.setAttribute('for', 'inputDueDate');
  labelDueDate.textContent = 'Due Date:';

  let dueDate = document.createElement('div');
  dueDate.setAttribute('id', 'dueDate');

  dueDate.appendChild(labelDueDate);
  dueDate.appendChild(inputDueDate);

  return dueDate;
}

let Project = () => {
  let chooseProject = document.createElement('div');
  chooseProject.setAttribute('id', 'chooseProject');

  let label = document.createElement('label');
  label.setAttribute('for', 'selectProject');
  label.textContent = 'Choose a project:';

  let selectProject = document.createElement('select');
  selectProject.setAttribute('id', 'selectProject');
  selectProject.setAttribute('name', 'project');

  let projectOption = document.createElement('option');
  projectOption.setAttribute('value', 'default');
  projectOption.textContent = 'Default';

  selectProject.appendChild(projectOption);
  
  chooseProject.appendChild(label);
  chooseProject.appendChild(selectProject);

  return chooseProject;
}

let submit = () => {
  let submit = document.createElement('button');
  submit.setAttribute('type', 'submit');
  submit.setAttribute('id', 'submit');
  submit.textContent = 'Add Task';

  return submit;
}

let cancel = (form, modal) => {
  let cancel = document.createElement('button');
  cancel.setAttribute('type', 'button');
  cancel.setAttribute('id', 'cancel');
  cancel.textContent = 'Cancel';
  cancel.addEventListener('click', () => {
    modal.style.display = 'none';
    form.reset();
  });

  return cancel;
}

export default function() {
  let modal = document.createElement('div');
  modal.setAttribute('id', 'todoModal');
  
  let form = document.createElement('form');
  form.setAttribute('id', 'todoForm');
  
  form.addEventListener('submit', () => {
    console.log("SUBMIT");
    let todoArray = JSON.parse(localStorage.getItem('todoData')) || [];
    let formData = new FormData(form);

    let title = formData.get('title');
    let description = formData.get('description');
    let dueDate = formData.get('dueDate');
    
    let todo1 = new Todo(title, description, dueDate, false);
    todoArray.push(todo1);

    localStorage.setItem('todoData', JSON.stringify(todoArray));
  });

  let chooseOption = document.createElement('div');
  chooseOption.setAttribute('id', 'chooseOption');
  
  chooseOption.appendChild(DueDate());
  chooseOption.appendChild(Project());

  form.appendChild(Title());
  form.appendChild(Description());
  form.appendChild(chooseOption);

  let buttons = document.createElement('div');
  buttons.setAttribute('id', 'buttons');

  buttons.appendChild(cancel(form, modal));
  buttons.appendChild(submit());

  form.appendChild(buttons);

  modal.appendChild(form);

  return modal;
}