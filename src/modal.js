import Todo from "./todo";

function createInputElement(type, id, placeholder, name, required = false) {
  const inputElement = document.createElement('input');
  inputElement.setAttribute('type', type);
  inputElement.setAttribute('id', id);
  inputElement.setAttribute('placeholder', placeholder);
  inputElement.setAttribute('name', name);

  if (required) {
    inputElement.setAttribute('required', '');
  }

  return inputElement;
}

function createTextAreaElement(id, placeholder, name) {
  const textAreaElement = document.createElement('textarea');
  textAreaElement.setAttribute('id', id);
  textAreaElement.setAttribute('placeholder', placeholder);
  textAreaElement.setAttribute('name', name);

  return textAreaElement;
}

function createLabelForElement(forId, textContent) {
  const labelElement = document.createElement('label');
  labelElement.setAttribute('for', forId);
  labelElement.textContent = textContent;

  return labelElement;
}

function createSelectElement(id, name) {
  const selectElement = document.createElement('select');
  selectElement.setAttribute('id', id);
  selectElement.setAttribute('name', name);

  return selectElement;
}

function createOptionElement(value, textContent) {
  const optionElement = document.createElement('option');
  optionElement.setAttribute('value', value);
  optionElement.textContent = textContent;

  return optionElement;
}

function createButtonElement(type, id, textContent, clickHandler) {
  const buttonElement = document.createElement('button');
  buttonElement.setAttribute('type', type);
  buttonElement.setAttribute('id', id);
  buttonElement.textContent = textContent;
  buttonElement.addEventListener('click', clickHandler);

  return buttonElement;
}

function createTodoForm() {
  const formElement = document.createElement('form');
  formElement.setAttribute('id', 'todoForm');

  formElement.addEventListener('submit', () => {
    const todoArray = JSON.parse(localStorage.getItem('todoData')) || [];
    const formData = new FormData(formElement);

    const title = formData.get('title');
    const description = formData.get('description');
    const dueDate = formData.get('dueDate');
    const project = formData.get('project');

    const todo = new Todo(title, description, dueDate, project, false);
    todoArray.push(todo);

    localStorage.setItem('todoData', JSON.stringify(todoArray));
  });

  return formElement;
}

function createCancelButton(formElement, modalElement) {
  const cancelButton = createButtonElement(
    'button',
    'cancel',
    'Cancel',
    () => {
      modalElement.style.display = 'none';
      formElement.reset();
    }
  );

  return cancelButton;
}

function createTaskInputElements() {
  const titleInput = createInputElement('text', 'inputTitle', 'Task Name', 'title', true);
  const descriptionInput = createTextAreaElement('inputDescription', 'Task Description', 'description');
  const dueDateInput = createInputElement('date', 'inputDueDate', '', 'dueDate');

  const labelDueDate = createLabelForElement('inputDueDate', 'Due Date:');
  const dueDateDiv = document.createElement('div');
  dueDateDiv.setAttribute('id', 'dueDate');

  dueDateDiv.appendChild(labelDueDate);
  dueDateDiv.appendChild(dueDateInput);

  return [titleInput, descriptionInput, dueDateDiv];
}

function createProjectSelection() {
  const chooseProject = document.createElement('div');
  chooseProject.setAttribute('id', 'chooseProject');

  const label = createLabelForElement('selectProject', 'Choose a project:');
  const selectProject = createSelectElement('selectProject', 'project');
  const projectOption = createOptionElement('default', 'Default');

  selectProject.appendChild(projectOption);

  chooseProject.appendChild(label);
  chooseProject.appendChild(selectProject);

  return chooseProject;
}

function createSubmitButton() {
  return createButtonElement('submit', 'submit', 'Add Task', null);
}

function createTodoTypeSelection() {
  const chooseTodoType = document.createElement('div');
  chooseTodoType.setAttribute('id', 'chooseTodoType');

  const todoModalBtn = createButtonElement('button', 'todoModalBtn', 'Todo', () => {

  });

  const projectModalBtn = createButtonElement('button', 'projectModalBtn', 'Project', () => {

  });

  chooseTodoType.appendChild(todoModalBtn);
  chooseTodoType.appendChild(projectModalBtn);

  return chooseTodoType;
}

function createTodoModal() {
  const formElement = createTodoForm();
  const taskInputElements = createTaskInputElements();
  const projectSelection = createProjectSelection();

  taskInputElements.forEach(element => {
    formElement.appendChild(element);
  });

  formElement.appendChild(projectSelection);

  return formElement;
}

export default function () {
  const modalElement = document.createElement('div');
  modalElement.setAttribute('id', 'modal');

  const formModal = document.createElement('div');
  formModal.setAttribute('id', 'formModal');

  const header = document.createElement('h2');
  header.textContent = 'Add New...';
  header.setAttribute('id', 'modalHeader');

  formModal.appendChild(header);
  formModal.appendChild(createTodoTypeSelection());

  let todoType = [createTodoModal()];

  todoType.forEach(element => {
    const buttonsDiv = document.createElement('div');
    buttonsDiv.setAttribute('id', 'buttons');

    const cancelButton = createCancelButton(createTodoModal(), modalElement);
    const submitButton = createSubmitButton();

    buttonsDiv.appendChild(cancelButton);
    buttonsDiv.appendChild(submitButton);

    element.appendChild(buttonsDiv);
    formModal.appendChild(element);
  });

  modalElement.appendChild(formModal);
  return modalElement;
}
