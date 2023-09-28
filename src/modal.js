import Todo from "./todo";
import closeIcon from "./icon/close-outline.svg";

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
  buttonElement.innerHTML = textContent;
  buttonElement.addEventListener('click', clickHandler);

  return buttonElement;
}

function createForm() {
  const formElement = document.createElement('form');
  formElement.setAttribute('id', 'form');

  return formElement;
}

function createTodoForm() {
  const formElement = createForm();

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

function createProjectForm() {
  const formElement = createForm();

  formElement.addEventListener('submit', () => {
    const projectArray = JSON.parse(localStorage.getItem('projectData')) || [];
    const formData = new FormData(formElement);

    const title = formData.get('title');

    projectArray.push(title);

    localStorage.setItem('projectData', JSON.stringify(projectArray));
  });
  return formElement;
}

function createCancelButton(modalElement, ...formElement) {
  const closeIconElement = document.createElement('img');
  closeIconElement.setAttribute('src', closeIcon);
  const cancelButton = createButtonElement(
    'button',
    'cancel',
    closeIconElement.outerHTML,
    () => {
      modalElement.style.display = 'none';
      formElement.forEach(element => {
        element.reset();
      });
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
  selectProject.value = 'default';

  let defaultOption = createOptionElement('default', 'Default');
  selectProject.appendChild(defaultOption);

  if(localStorage.getItem('projectData')) {
    JSON.parse(localStorage.getItem('projectData')).map(project => {
      let projectOption = createOptionElement(project, project);
      selectProject.appendChild(projectOption);
    });
  }

  chooseProject.appendChild(label);
  chooseProject.appendChild(selectProject);

  return chooseProject;
}

function createSubmitButton(text) {
  return createButtonElement('submit', 'submit', `add ${text}`, null);
}

function modalBtn(createModal, modalBtn) {
    const btnElement = createButtonElement('button', `${modalBtn}ModalBtn`, modalBtn, () => {
      const formModal = document.getElementById('formModal');
      const form = document.getElementById('form');
      if(formModal.contains(form)) {
        formModal.removeChild(form);
      }
      formModal.appendChild(createModal);
    });
  return btnElement;
}

function createTodoTypeSelection() {
  const chooseTodoType = document.createElement('div');
  chooseTodoType.setAttribute('id', 'chooseTodoType');

  let todoModalBtn = modalBtn(createTodoModal(), 'Todo');
  let projectModalBtn = modalBtn(createProjectModal(), 'Project');
  let notesModalBtn = modalBtn(createNotesModal(), 'Notes');

  let modalBtnList = [todoModalBtn, projectModalBtn, notesModalBtn];

  modalBtnList.forEach(btn => {
      const current = chooseTodoType.getElementsByClassName("btn-active");
      btn.addEventListener('click', () => {
      if (current.length > 0) {
        current[0].className = '';
      }
      btn.className += "btn-active";
    });
    chooseTodoType.appendChild(btn);
  });

  return chooseTodoType;
}

function createTodoModal() {
  const formElement = createTodoForm();
  const taskInputElements = createTaskInputElements();
  const projectSelection = createProjectSelection();
  const submitButton = createSubmitButton('todo');

  taskInputElements.forEach(element => {
    formElement.appendChild(element);
  });

  formElement.appendChild(projectSelection);
  formElement.appendChild(submitButton);

  return formElement;
}

function createProjectModal() {
  const formElement = createProjectForm();

  const titleInput = createInputElement('text', 'inputProjectTitle', 'Project Name', 'title', true);
  const submitButton = createSubmitButton('project');

  formElement.appendChild(titleInput);
  formElement.appendChild(submitButton);

  return formElement;
}

function createNotesModal() {
  const formElement = createForm();

  const notesInput = createTextAreaElement('inputNotes', 'Notes', 'notes');
  const submitButton = createSubmitButton('notes');

  formElement.appendChild(notesInput);
  formElement.appendChild(submitButton);

  return formElement;
}

export default function () {
  const modalElement = document.createElement('div');
  modalElement.setAttribute('id', 'modal');

  const formModal = document.createElement('div');
  formModal.setAttribute('id', 'formModal');

  let formElementList = [createTodoModal(), createProjectModal(), createNotesModal()];
  const cancelButton = createCancelButton(modalElement, ...formElementList);

  const header = document.createElement('div');
  header.setAttribute('id', 'modalHeader');
  
  const headerContent = document.createElement('h2');
  headerContent.textContent = 'Add New...';
  header.appendChild(headerContent);
  header.appendChild(cancelButton);

  formModal.appendChild(header);
  formModal.appendChild(createTodoTypeSelection());


  modalElement.appendChild(formModal);
  return modalElement;
}
