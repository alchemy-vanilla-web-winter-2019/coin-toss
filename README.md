Coin Toss
===

Build a Coin Toss betting game!

## Previous Techniques and Concepts Used in this Lab

1. **Tool:** Use 3rd-party testing library
1. **Variables:** Declaring and assign `const` variable
1. **Variables:** Assign variable from property of global object
1. **Testing:** TDD a pure function
1. **Functions:** Calling a function
1. **Functions:** Using an anonymous function as a function argument
1. **Functions:** Define function parameter
1. **Testing:** Test assertions with `assert.equal`

## Project Increments and T&C

### Page Structure

Setup your document title and styled header

_New T&C:_

1. **HTML Elements**: `<title>`, `<h1>`
1. **CSS Styling**: Use `body` for global styling
1. **CSS Styling**: `font-family`, `background`, `color`, `text-align`, `font-size`, `font-weight`

### Flip

User clicks the flip button and the app randomly determines _heads_ or _tails_ and shows an image corresponding to the result.

_New T&C:_

1. **HTML Elements:** `<button>`, `<section>`, `<img>`
1. **CSS Selectors:** id (`#`), tag, and class (`.`)
1. **CSS Styling:** `visibility`, `margin`, `padding`,
`margin: auto`, `min-height`
1. **ESModules:** `export default` and `import` default
1. **Built-in (Browser):** global `document`
1. **DOM Traversal:** `document.getElementById('id')` matches HTML attribute `id="id"`
1. **Built-in (JavaScript):** `Math.random()` returns 0 to <1
1. **Variables:** Declare `let` variable with sensible default
1. **Control Flow:** `if` and `else` conditionality
1. **Functions:** Call a function with a variable
1. **Variables:** Reassign `let` variable in conditional block
1. **DOM Node:** set property `image.src =`
1. **DOM Node:** remove class `element.classList.remove('class-to-remove')`
1. **Functions:** Call a function with two params
1. **DOM Events:** subscribe to `click` event with `addEventListener`

### Bet

User chooses _heads_ or _tails_ then clicks the flip button (note: now a form submit, not just a button click). The app performs the flip as above, then determines whether the user won or loss and displays an appropriate message.

_New T&C:_

1. **HTML Elements:** named radio inputs
1. **HTML Attributes:** `required` inputs
1. **App Design:** evolve code: button `click` becomes form `submit`
1. **DOM Events:** subscribe to form `subscribe` event with `addEventListener`
1. **DOM Events:** use `event` callback argument to prevent default behavior
1. **DOM Node:** add class `element.classList.add('class-to-add')`
1. **DOM Node:** set text `element.textContent =`

### Track Wins and Loses

The app displays a "wins" and "losses" count (both initially `0`). As each flip bet is determined above, the app increments the appropriate count.

_New T&C:_

1. **Variables:** Declare module-level `let` variable as state
1. **Variables:** Reassign module-level state variable

### Full Betting (STRETCH)

The app displays the amount of money the user has (pick a default like $1000). The user is prompted for an amount for each bet along with their guess. The app adds or subtracts the bet amount from the total money of money the user has. 

_New T&C:_

1. **HTML Attribute:** numeric type input
1. **Built-in (Browser):** Format number as currency with `.toLocaleString()`

### Going Broke (STRETCH)

The app stops the game and alerts the user if the amount goes negative

_New T&C:_

1. **App Design:** Two-stage logic checking (toss check, then broke check)
1. **HTML Attributes:** Disable button with `button.disabled = true`
