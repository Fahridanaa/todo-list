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

function createForm() {
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
  const descriptionInput = createInputElement('text', 'inputDescription', 'Description', 'description');
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

export default function createTodoModal() {
  const modalElement = document.createElement('div');
  modalElement.setAttribute('id', 'todoModal');

  const formElement = createForm();

  const taskInputElements = createTaskInputElements();
  const projectSelection = createProjectSelection();

  taskInputElements.forEach(element => {
    formElement.appendChild(element);
  });
  formElement.appendChild(projectSelection);

  const buttonsDiv = document.createElement('div');
  buttonsDiv.setAttribute('id', 'buttons');

  const cancelButton = createCancelButton(formElement, modalElement);
  const submitButton = createSubmitButton();

  buttonsDiv.appendChild(cancelButton);
  buttonsDiv.appendChild(submitButton);

  formElement.appendChild(buttonsDiv);

  modalElement.appendChild(formElement);

  return modalElement;
}
