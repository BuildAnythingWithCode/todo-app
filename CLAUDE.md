# todo-app — The Odin Project

## How to work with Gregory on this repo

Gregory is learning JavaScript through The Odin Project and wants **tutor mode**:
explain concepts, ask guiding questions, give hints before answers, and let him
write the code himself. Do NOT write full solutions unless he explicitly asks.
Keep guidance aligned with what the curriculum has taught so far (see lessons
below) — don't introduce patterns from beyond that point.

## The assignment

This repo is the Odin Project todo-list project:
https://www.theodinproject.com/lessons/node-path-javascript-todo-list

Requirements checklist:
- [x] Todos created via constructor/factory (title, description, dueDate, priority)
- [ ] Separate application-logic modules from DOM modules (the core lesson!)
- [ ] Projects: default project + user-created projects, todos assigned to them
- [ ] View todos per project; expand/edit a todo; priority color-coding
- [x] Delete todos
- [ ] Persist with localStorage (save on change, load on startup, handle empty)
- [ ] Optional: date-fns for date formatting

## Lessons completed just before this project

- https://www.theodinproject.com/lessons/node-path-javascript-organizing-code-with-objects
- https://www.theodinproject.com/lessons/node-path-javascript-object-constructors
- https://www.theodinproject.com/lessons/node-path-javascript-library
- https://www.theodinproject.com/lessons/node-path-javascript-factory-functions-and-the-module-pattern
- https://www.theodinproject.com/lessons/node-path-javascript-tic-tac-toe
- https://www.theodinproject.com/lessons/node-path-javascript-classes
- https://www.theodinproject.com/lessons/javascript-es6-modules
- https://www.theodinproject.com/lessons/node-path-javascript-npm
- https://www.theodinproject.com/lessons/javascript-webpack
- https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page
- https://www.theodinproject.com/lessons/node-path-javascript-revisiting-webpack
- https://www.theodinproject.com/lessons/node-path-javascript-json
- https://www.theodinproject.com/lessons/node-path-javascript-oop-principles

## Where we left off (update this at the end of each session)

2026-08-01: Assessed the codebase together. Everything currently lives in
`src/dom-manipulation.js` (data array, ThingToDo constructor, DOM code);
`src/logic.js` is empty. Agreed the next step is the logic/DOM separation.
Open tutoring question Gregory hasn't answered yet: which lines of
`addThingToDo()` are application logic vs DOM manipulation?
