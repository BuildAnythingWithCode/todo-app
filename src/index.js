'use strict';

// Webpack Stuff
import './styles.css';
import { logicFileGreeting, listOfShitToDo, ThingToDo } from './logic.js';
import {
  domManipulationFileGreeting,
  button,
  element,
  addThingToDo,
  toggleCustomProjectInput,
  closeForm,
  setupEventListeners,
} from './dom-manipulation.js';

console.log(logicFileGreeting);
console.log(domManipulationFileGreeting);

toggleCustomProjectInput();

setupEventListeners();

// import odinImage from './odin-image.png';

// const image = document.createElement('img');
// image.src = odinImage;

// document.body.appendChild(image);
