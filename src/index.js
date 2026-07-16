'use strict';

// Webpack Stuff
import './styles.css';
import { greeting } from './functions.js';
import {
  button,
  element,
  ThingToDo,
  addThingToDo,
  toggleCustomProjectInput,
  closeForm,
  setupEventListeners,
  listOfShitToDo,
} from './dom-manipulation.js';

console.log(greeting);

toggleCustomProjectInput();

setupEventListeners();

// import odinImage from './odin-image.png';

// const image = document.createElement('img');
// image.src = odinImage;

// document.body.appendChild(image);
