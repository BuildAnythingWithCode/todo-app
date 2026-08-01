'use strict';

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

// Export Section
export { listOfShitToDo, ThingToDo };
