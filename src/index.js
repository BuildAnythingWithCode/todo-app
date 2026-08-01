'use strict';

// Import Section
import './styles.css';
import {
  logicFileGreeting,
  listOfShitToDo,
  ThingToDo,
  addShitToDo,
} from './logic.js';
import {
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
} from './dom-manipulation.js';

console.log(logicFileGreeting);
console.log(domManipulationFileGreeting);

toggleCustomProjectInput();

setupEventListeners();

// import odinImage from './odin-image.png';

// const image = document.createElement('img');
// image.src = odinImage;

// document.body.appendChild(image);
