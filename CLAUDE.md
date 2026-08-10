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

### 2026-08-10 — long session, big progress

**Done and committed** (last commit: `fe64708`):
- Module separation complete. `logic.js` = `listOfShitToDo`, `listOfProjects`
  (seeded with `'Default Project'`), `ThingToDo` constructor, `addShitToDo`.
  It imports NOTHING — pure, no DOM. `dom-manipulation.js` = all screen code.
- Refactored the old mega-function `addThingToDo` into single-responsibility
  functions wired with parameters and return values:
  `handleFormSubmission` (conductor) → `getFormValues` → `createNewProject`
  → `addShitToDo` → `displayShitToDo`.
- Deleted `functions.js` and the commented-out old code (dead-code lesson).
- Added `listOfProjects`; custom projects now get pushed onto it.

**IN PROGRESS — app is currently broken at runtime, warn him first thing:**
He is mid-way through extracting delete into logic. In
`displayShitToDo`'s remove-button listener he already deleted the
`const index = listOfShitToDo.indexOf(newThingToDo);` line, but `logic.js`
does not have `deleteThisShit` yet — so the listener references an `index`
that no longer exists. Webpack still compiles (it's a runtime ReferenceError,
not a build error — itself a teachable moment). The plan he agreed to:
- `logic.js` gets `deleteThisShit(newThingToDo)` containing the indexOf, the
  `if (index > -1)` guard, and the splice. The `if` goes to logic because its
  *condition* is a question about data.
- The listener shrinks to two lines: `deleteThisShit(newThingToDo);` then
  `newEntry.remove();` (unconditional now — we decided that's fine//better).

**What he learned today (fresh, fragile — reinforce, don't assume mastery):**
- **Scope and data flow** — the hard-won one. Functions share data ONLY through
  parameters (in) and return values (out). Values cross function boundaries;
  variable names never do; object property keys cross because they're part of
  the value. He asked this three different ways and got there. Rule he can
  lean on: "if a function returns something you want, catch it in a variable."
- Define vs. call vs. call-and-catch (`f()` vs `const x = f()`).
- `return (a, b, c)` is the comma operator, not an object — use `{ }`.
- `.js` extension required in imports (`"type": "module"`), read webpack
  errors closely, circular imports are a fire alarm, `push/pop/shift/unshift`.
- The seam test: say a function's job out loud; every "and" is a split point.
  An `if` belongs wherever its *condition* belongs.

**Open items he chose to defer (don't nag):**
- `ThingToDo` is still imported into `dom-manipulation.js` but unused there.
- `createNewProject` (in the DOM file) still pushes to `listOfProjects`
  directly instead of calling a logic-side `addProject(name)`. Discussed: data
  should have ONE door, and that door matters when localStorage arrives.
  Also still mixes "decide the project name" with "build the sidebar button".
- Duplicate projects: adding two todos with the same custom project name
  pushes the name twice and makes two sidebar buttons. He was asked to just
  *observe* this in the console; address it when it bothers him.

**Naming:** the shit-themed names are INTENTIONAL — it's "a shit to do app",
his branding. Don't suggest renaming; that's settled.

**Next up (rough order):**
1. Finish `deleteThisShit` (see IN PROGRESS above), test, commit.
2. Optional small wins: `addProject` in logic; split the sidebar-button
   building out of `createNewProject`.
3. The big one: `refreshShitToDo` — wipe the todo section and redraw
   everything from `listOfShitToDo`. Simplifies delete, makes project
   filtering nearly free, and is the hook localStorage plugs into.
4. Then: project filtering, expand/edit a todo, priority color-coding,
   localStorage, date-fns.

**Tutoring notes:** he pushes back and asks genuinely good conceptual
questions ("is this level of separation industry standard?") — engage
honestly, including the limits of the advice. He gets frustrated when given
three things at once; go ONE step at a time and confirm before moving on.
When he's stuck and demoralized, showing one worked example and letting him
pattern-match the rest works well.
