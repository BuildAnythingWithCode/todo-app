'use strict';

// Values & Logic
const listOfShitToDo = [];

// Buttons
const button = {
  beginAdding: document.querySelector('#start-to-add-some-shit'),
  closeModalLazy: document.querySelector('#close-modal-lazy'),
  closeModalX: document.querySelector('#close-modal-x'),
  addToDo: document.querySelector('#add-to-do'),
  defaultProjectSidebar: document.querySelector('#default-project-sidebar'),
};

// Elements
const element = {
  modal: document.querySelector('dialog'),
  form: document.querySelector('form'),
  shitToDoSection: document.querySelector(
    '#all-the-shit-you-have-to-do-section',
  ),
  defaultProject: document.querySelector('#default-project'),
  customProject: document.querySelector('#custom-project'),
  choiceOfProject: document.querySelectorAll("input[name='project']"),
  sidebar: document.querySelector('#sidebar'),
};

// Constructor Function
function ThingToDo(title, description, dueDate, priority, project, isChecked) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.project = project;
  this.isChecked = isChecked;
}

// Regular Functions
function refreshShitToDo() {}

function deleteThisShit() {}

function toggleCheckThisShit() {}

function filterProject() {}

function addThingToDo() {
  const title = document.querySelector('#the-shit').value;
  const description = document.querySelector('#the-details-of-the-shit').value;
  const dueDate = document.querySelector('#due-date').value;
  const priority = document.querySelector(
    'input[name="importance"]:checked',
  ).value;
  const isChecked = false;
  const selectedProject = document.querySelector(
    'input[name="project"]:checked',
  ).value;
  let project;
  if (selectedProject === 'other') {
    project = element.customProject.value;
    const newProject = document.createElement('button');
    newProject.textContent = element.customProject.value;
    button.defaultProjectSidebar.after(newProject);
  } else {
    project = 'Default Project';
  }
  const newThingToDo = new ThingToDo(
    title,
    description,
    dueDate,
    priority,
    project,
    isChecked,
  );
  listOfShitToDo.push(newThingToDo);
  const newEntry = document.createElement('p');
  newEntry.textContent = `Title: ${title}, Description: ${description}, Due Date: ${dueDate}, Priority: ${priority}, Project: ${project}, Checked: ${isChecked}`;
  element.shitToDoSection.appendChild(newEntry);
  const removeEntryBtn = document.createElement('button');
  removeEntryBtn.textContent = 'Remove This Shit';
  newEntry.appendChild(removeEntryBtn);
  removeEntryBtn.addEventListener('click', () => {
    const index = listOfShitToDo.indexOf(newThingToDo);
    if (index > -1) {
      listOfShitToDo.splice(index, 1);
      newEntry.remove();
    }
    console.log(listOfShitToDo);
  });
}

function toggleCustomProjectInput() {
  element.choiceOfProject.forEach((radio) => {
    radio.addEventListener('change', () => {
      if (element.defaultProject.checked) {
        element.customProject.disabled = true;
        element.customProject.required = false;
      } else {
        element.customProject.disabled = false;
        element.customProject.required = true;
      }
    });
  });
}

function closeForm() {
  element.form.reset();
  element.modal.close();
}

// Event Handler Function
function setupEventListeners() {
  button.beginAdding.addEventListener('click', () => {
    element.modal.showModal();
  });

  button.closeModalLazy.addEventListener('click', closeForm);

  button.closeModalX.addEventListener('click', closeForm);

  element.form.addEventListener('submit', (event) => {
    event.preventDefault();
    addThingToDo();
    console.log('form submitted!', listOfShitToDo);
    element.form.reset();
    element.modal.close();
  });
}

// Export Section
export {
  button,
  element,
  ThingToDo,
  addThingToDo,
  toggleCustomProjectInput,
  closeForm,
  setupEventListeners,
  listOfShitToDo,
};
