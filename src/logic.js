'use strict';

import {
  domManipulationFileGreeting,
  button,
  element,
  addThingToDo,
  closeForm,
  setupEventListeners,
} from './dom-manipulation.js';

// Greeting
const logicFileGreeting = 'Logic file successfully imported!';

// Values & Logic
const listOfShitToDo = [];

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

// Export Section
export {
  logicFileGreeting,
  listOfShitToDo,
  ThingToDo,
  toggleCustomProjectInput,
};
