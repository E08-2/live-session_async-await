// * SYNCHRONOUS CODE REVISION

// Most of the code you have written on the course before last week will have been synchronous.
// Synchronous = "do one thing at a time".
// A potential issue with synchronous code is that it is "blocking".

// alert("Hello and welcome to the page!");
// console.log("That was a nice alert. :-)");

// As we can see, the alert() BLOCKS the rest of the JS code from executing until I click "Ok".

// ===========================

// This leads us to...

// * ASYNCHRONOUS CODE REVISION

// When running JS we have access to one main "thread".
// "A thread is a list of tasks that the program needs to do."
// This explains why normal, synchronous code is blocking - "one thing at a time".

// ? But what about things which take time to complete, e.g. setTimeout, or getting data from a server?

// * JS can run code ASYNCHRONOUSLY - start something, and let it run "in the background" so it doesn't block other code.
// It does this by passing the task onto other threads in the background, leaving the main thread free.
// We will talk about this in more detail in the Backend module!

// Example asychronous operation:
const simulateDataRequest = () => {
    console.log("2. Requesting the data...")

    setTimeout(() => {
        console.log("4. Data finally arrives!");
    }, 3000)

    setTimeout(() => {
        console.log("5. Second async operation finishes");
    }, 6000)
}

console.log("1. Getting some data from a server...");
simulateDataRequest();
// Note: the 3rd console log is not blocked while we wait for the setTimeout in the function to complete!
console.log("3. Do something else while we wait...");

// In the above code, we see that the simulateDataRequest() function call is not blocking the line after it...
// The setTimeouts take as much time as they need to complete, but do not block the rest of our code while they do so!

// ======================================================

// * ASYNCHRONOUS PROMISES - REVISION

// Promises are an important JS concept - you'll see them a lot in modern JS AND the next module!
// Promises allow you to handle synchronous operations in real life
// Unlike "setTimeout", when you request data from a server, it's not clear exactly when it will arrive...

// * Remember: for multiple, related async operations... 
// * "Do one thing, THEN when it is finished, use something it returned to do another async operation etc. etc.)"
// * Promise syntax is clearer than "callback hell" syntax.

// ======================

// * Exercise 1 and Solution:
// 1. Please write a promise that will log "First!" to the console after 3 seconds and return the string "Second!";
// 2. THEN use promise chaining to take the string returned by the promise, and log it to the console.

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("First!");
        resolve("Second!");
    }, 3000)
});

promise.then(resolveValue => {
    console.log(resolveValue);
});