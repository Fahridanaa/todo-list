export default class Todo {
  constructor(title, description, dueDate, project, completed) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.project = project;
    this.completed = completed;
  }

  getTitle() {
    return this.title;
  }

  getDescription() {
    return this.description;
  }

  getDueDate() {
    return this.dueDate;
  }

  getProject() {
    return this.project;
  }

  setTitle(title) {
    this.title = title;
  }

  setDescription(description) {
    this.description = description;
  }

  setDueDate(dueDate) {
    this.dueDate = dueDate;
  }

  setProject(project) {
    this.project = project;
  }

  toggleCompleted() {
    this.completed = !this.completed;
  }
}