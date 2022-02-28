// * ASYNC/AWAIT SYNTAX

// Async/await is an alternative to .catch() for promise chaining.
// We will use this a lot soon!

// * Remember last week I said there were 3 ways to avoid callback hell:

// Async 1
//     Async 2
//          Async 3...

// 1. Instead of nesting your callback functions, break them up into SMALLER functions.
// 2. PROMISES
// * 3. ASYNC/AWAIT syntax

// Async/await is a way to make promises even more simple, and more like the way you write regular JS code.
// * Note: async/await can only be used for functions!
// To use async/await, first you must use the "async" keyword in front of your asynchronous function:

// ES5 example:
async function doSomethingAsynchronous() {
    // Async code...
}

// ES6
const doSomethingAsynchronousES6 = async () => {
    // Async code...
}

// * Once you use the async keyword in front of a function...
// * It automatically returns a promise!

// You can then use the "await" keyword to wait for the promise inside your async function to resolve (or reject!).

// ==============================================

// * A comparison between .then() and async/await using the last exercise:
// ? 1. Please write a promise that will log "First!" to the console after 3 seconds and return the string "Second!";
// ? 2. Then, take the string returned by the promise, and log it to the console.

// * STEP 1: "I PROMISE that after 3 seconds I will give you a value ('Second!') you can log to the console..."
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("First!");  // "First!"
        resolve("Second!");
    }, 3000)
});

// * STEP 2A: .then() --> "When then promise resolves, THEN take the value it produced, and log it."
// myPromise.then(resolveValue => {
//     console.log(resolveValue);
// })

// * STEP 2B: async/await --> "(A)WAIT for the promise to resolve, then use the value it produced."
const printAsyncValue = async () => {
    const resolveValue = await myPromise;
    console.log(resolveValue);
}

printAsyncValue();

// ==================================================

// * Bonus example...
// ? First, call an async function which returns a promise and wait for it to resolve...
// ? Second, log the resolve value
// ? Third, call a second async function which returns a promise and give it the 1st resolve value as an argument
// ? Fourth, wait for the second function to resolve and log the resolve value.

// * 1. Chaining with .then():
// All function below return a promise!

/* 
    function1().
    then(resolveValue1 => {
        console.log(resolveValue1);
        return function2(resolveValue1);
    })
    .then(resolveValue2 => {
        console.log(resolveValue2);
    });
*/

// * 2. Doing the same thing with async/await:

/* 
    const asyncFunction = async () => {
        const resolveValue1 = await function1();
        console.log(resolveValue1);
        const resolveValue2 = await function2(resolveValue1);
        console.log(resolveValue2);
    }
*/