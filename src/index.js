'use strict';

// Webpack Stuff
import './styles.css';
import { greeting } from './functions.js';
import { listOfShitToDo } from './logic.js';
import {
  button,
  element,
  ThingToDo,
  addThingToDo,
  toggleCustomProjectInput,
  closeForm,
  setupEventListeners,
} from './dom-manipulation.js';

console.log(greeting);

toggleCustomProjectInput();

// import odinImage from './odin-image.png';

// const image = document.createElement('img');
// image.src = odinImage;

// document.body.appendChild(image);
