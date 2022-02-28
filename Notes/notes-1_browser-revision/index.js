// * ADVICE 1 - Writing code:

// Before starting a task, it can often be helpful to write some pseudocode to lay out the process you will go through.

// For example, in the last exercise:

/* Pseudocode example:

"We want to generate a 'card' for each recipe object we get inside an array"

1. I have 9 cards and 9 objects, so LOOP through the data array...
2. For each object, I need to make 6 HTML elements, give them CLASSES, and NEST them correctly.
3. To get the info for each card, I can then access the current object (e.g. author, ingredients)
4. Once the elements are created and given content, put them into the DOM (appendChild())
5. Now the current loop is finished - go to the next loop and do the same thing.

*/

// ========================================================================

// * REVISION - THE BROWSER AS A HOST ENVIRONMENT FOR JS

// The browser is a HOST ENVIRONMENT for JavaScript.
// Browsers have JS engines which allow them to run JS in the browser:

// Chrome: V8
// Firefox: SpiderMonkey
// Edge: Chakra

// ! Node is another, separate host environment for JavaScript.
// ! Node also uses the V8 engine (like Chrome), but OUTSIDE of the browser.

// As the browser is a host environment for JS, it provides its own objects and functions to help JS work better in the browser context.
// Two key examples of HOST OBJECTS:

// * window - represents the browser window
// * document - represents the DOM (e.g. document.querySelector)

// console.log(window);  // ! In Node, "window is not defined"! Why?

// In the browser, "window" is a global variable.
// It allows you to refer to the browser window in which your code is running.
// In a tabbed browser, "window" will refer to the tab your code is running in.

// This lets us, for example, get information about the current window:

console.log(window.innerHeight);    // How tall is the page currently?
console.log(window.innerWidth);     // How wide is the page currently?

// * All global JS objects, functions and variables are members of "window".
// * So if you run "console.log(this)" in the browser, it will log the window object!

console.log("!", this);

// You can also add an event listener to the window object - e.g. to listen for changes in its size!

window.addEventListener("resize", () => {
    console.log("Window resized!");
    console.log(`New height: ${window.innerHeight}`);
    console.log(`New width: ${window.innerWidth}`);
})

// ! Therefore trying to use "window" or "document" in Node (outside the browser) will give an error!
// Node is outside of the browser, so the idea of a DOM, or window, makes no sense...
// * Quick rule: if your project has a .html file and you are running JS to interact with this, use the browser console, not node!