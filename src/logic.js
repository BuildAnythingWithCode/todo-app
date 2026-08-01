'use strict';

// Test Greeting
const logicFileGreeting = 'Logic file successfully imported!';

// Array Of Shit To Do
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

// Functions
function addShitToDo(formValues, newProject) {
  const newThingToDo = new ThingToDo(
    formValues.title,
    formValues.description,
    formValues.dueDate,
    formValues.priority,
    newProject,
    formValues.isChecked,
  );
  listOfShitToDo.push(newThingToDo);
  return newThingToDo;
}

// Export Section
export { logicFileGreeting, listOfShitToDo, ThingToDo, addShitToDo };
