'use strict';

//Import Section
import {
  listOfShitToDo,
  listOfProjects,
  ThingToDo,
  addShitToDo,
} from './logic.js';

// Test Greeting
const domManipulationFileGreeting =
  'Dom manipulation file successfully imported!';

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

// Functions
function getFormValues() {
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
  return { title, description, dueDate, priority, isChecked, selectedProject };
}

function createNewProject(selectedProject) {
  let project;
  if (selectedProject === 'other') {
    project = element.customProject.value;
    const newProject = document.createElement('button');
    newProject.textContent = element.customProject.value;
    button.defaultProjectSidebar.after(newProject);
  } else {
    project = 'Default Project';
  }
  return project;
}

function displayShitToDo(newThingToDo) {
  const newEntry = document.createElement('p');
  newEntry.textContent = `Title: ${newThingToDo.title}, Description: ${newThingToDo.description}, Due Date: ${newThingToDo.dueDate}, Priority: ${newThingToDo.priority}, Project: ${newThingToDo.project}, Checked: ${newThingToDo.isChecked}`;
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

function handleFormSubmission() {
  const formValues = getFormValues();
  const newProject = createNewProject(formValues.selectedProject);
  const newThingToDo = addShitToDo(formValues, newProject);
  displayShitToDo(newThingToDo);
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

// function toggleCheckThisShit() {}
// function filterByProject() {}
// function refreshShitToDo() {}

// Event Handler Function
function setupEventListeners() {
  button.beginAdding.addEventListener('click', () => {
    element.modal.showModal();
  });

  button.closeModalLazy.addEventListener('click', closeForm);

  button.closeModalX.addEventListener('click', closeForm);

  element.form.addEventListener('submit', (event) => {
    event.preventDefault();
    handleFormSubmission();
    console.log('form submitted!', listOfShitToDo);
    element.form.reset();
    element.modal.close();
  });
}

// Export Section
export {
  domManipulationFileGreeting,
  button,
  element,
  getFormValues,
  createNewProject,
  displayShitToDo,
  handleFormSubmission,
  closeForm,
  setupEventListeners,
  toggleCustomProjectInput,
};
