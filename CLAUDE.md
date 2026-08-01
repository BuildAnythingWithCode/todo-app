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

2026-08-01 (later): Big session. Gregory completed the module separation
(logic.js = data + constructor, imports nothing; dom-manipulation.js = all DOM)
AND refactored the old mega-function `addThingToDo` into single-responsibility
functions: `handleFormSubmission` (conductor) → `getFormValues` →
`createNewProject` → `addShitToDo` → `displayShitToDo`, wired with
parameters/returns. Build green, behavior verified in browser.

He fought hard through **scope and data-flow** (variables local to functions,
catch-and-pass via return values). It clicked but is still fresh/fragile —
reinforce gently next session, don't assume mastery. Deleted functions.js
(dead code lesson). He knows: read webpack errors, `.js` extension required
in imports ("type": "module"), circular imports are a fire alarm.

Naming: the shit-themed names are INTENTIONAL (it's "a shit to do app" — his
branding). Don't suggest renaming; it's settled.

Next up (in rough order):
1. Cleanup: delete commented-out old addThingToDo block, commit
2. `addShitToDo` is still in dom-manipulation.js — it's pure logic; move it
   to logic.js (nice small win to reinforce the concept)
3. `createNewProject` still mixes logic (choosing project name) with DOM
   (sidebar button) — good next split exercise
4. Then: refreshShitToDo/render-from-array pattern, project filtering,
   expand/edit todos, priority colors, localStorage, date-fns
