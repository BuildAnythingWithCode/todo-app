'use strict';

// Webpack Stuff
import './styles.css';
import { greeting } from './functions.js';

console.log(greeting);

import odinImage from './odin-image.png';

const image = document.createElement('img');
image.src = odinImage;

document.body.appendChild(image);

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

// Values & Logic
const listOfShitToDo = [];

// Constructor Function
function ThingToDo(title, description, dueDate, priority, project) {
  this.title = title;
  this.description = description;
  this.dueDate = dueDate;
  this.priority = priority;
  this.project = project;
}

// Regular Functions
function addThingToDo(title, description, dueDate, priority, project) {
  title = document.querySelector('#the-shit').value;
  description = document.querySelector('#the-details-of-the-shit').value;
  dueDate = document.querySelector('#due-date').value;
  priority = document.querySelector('input[name="importance"]:checked').value;
  const selectedProject = document.querySelector(
    'input[name="project"]:checked',
  ).value;
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
  );
  listOfShitToDo.push(newThingToDo);
  const newEntry = document.createElement('p');
  newEntry.textContent = `Title: ${title}, Description: ${description}, Due Date: ${dueDate}, Priority: ${priority}, Project: ${project}`;
  element.shitToDoSection.appendChild(newEntry);
}

// Event Handlers
button.beginAdding.addEventListener('click', () => {
  element.modal.showModal();
});

button.closeModalLazy.addEventListener('click', () => {
  element.form.reset();
  element.modal.close();
});

button.closeModalX.addEventListener('click', () => {
  element.form.reset();
  element.modal.close();
});

element.form.addEventListener('submit', (event) => {
  event.preventDefault();
  addThingToDo();
  console.log('form submitted!', listOfShitToDo);
  element.form.reset();
  element.modal.close();
});
