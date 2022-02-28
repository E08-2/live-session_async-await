// * AWAIT REVISION EXERCISE

// * THE EXERCISE

// Simulate the process of an Amazon order using ASYNC AWAIT!

// Here is what should happen:

// 1. After 4 seconds, log the string "1. Finished browsing Amazon.de..." to the console.
// 2. After 2 seconds, log the string "2. Finished ordering product..." to the console.
// 3. After 5 seconds, log the string "3. Product has been sent..." to the console.
// 4. After 3 seconds, log the string "4. Postman has arrived with the product..." to the console.
// 5. After 1 second, log the string "5. Answered the door - product received!" to the console.

// ? Hint: You should try to use the approach I took in this morning's live coding.

// * Please check out the below code, and then ONLY try to complete the "printAmazonProcess" function. 
// * The rest of the code is done for you. :-)

console.log("Starting order process...");

// A function to complete one part of the Amazon order process
// 1st parameter is a string to describe a part of the process
// 2nd parameter is a time (in ms) the promise should take to resolve
const doPartOfOrder = (str, time) => {
    const promise = new Promise(resolve => {
        setTimeout(() => {
            resolve(str);
        }, time)
    })

    return promise;
}

const printAmazonProcess = async () => {
    // Use async await ONLY in this function to print the above order process...
    const resolveValue = await doPartOfOrder("1. Finished browsing Amazon.de...", 4000);
    console.log(resolveValue);
    const resolveValue2 = await doPartOfOrder("2. Finished ordering product...", 2000);
    console.log(resolveValue2);
    const resolveValue3 = await doPartOfOrder("3. Product has been sent...", 5000);
    console.log(resolveValue3);
    const resolveValue4 = await doPartOfOrder("4. Postman has arrived with the product...", 3000);
    console.log(resolveValue4);
    const resolveValue5 = await doPartOfOrder("5. Answered the door - product received!", 1000);
    console.log(resolveValue5);
}

printAmazonProcess();