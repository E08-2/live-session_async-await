// Create a reference to the HTML element with ID "myModal"
const modal = document.getElementById("myModal");
const modalParagraph = document.querySelector("#myModal p");
const continueButton = document.querySelector("#continue");
const h2 = document.querySelector("h2");

// Create a promise which resolves after 10 seconds
let promiseOfModal = new Promise(resolve => {
    window.setTimeout(() => {
        resolve("Async/await says: 'The User has been on the page for 10 seconds!'");
    }, (10000));
});

// When the function completes, log the result of the promise and make the modal visible
// * Q1 - Please change this to use async/await syntax!
// promiseOfModal
// .then((data) => {
//     console.log(data);
//     modal.style.display = "block";
// });

// * Q1 - Solutions A and B
const getModal = async () => {
    // * Solution A - no need to create a variable, just wait for the promise to resolve before displaying the modal.
    //await promiseOfModal;

    // * Solution B - if we wanted to use a variable, we could also do something like this, just as an example!
    const resolveValue = await promiseOfModal;
    modalParagraph.textContent = resolveValue;

    modal.style.display = "block";
}

getModal();

// Add an event listener to the modal to listen for "click" events
modal.addEventListener("click", (event) => {
    switch(event.target.className) {
        case "close":
        case "modal":
        modal.style.display = "none"
        break;
    }
});

// * Q2
// Add an event listener to the continue button which changes its color after the animation ends
continueButton.addEventListener("animationend", () => {
    continueButton.style.background = "rgba(0,0,255,0.4)";
});


// * Q3 - Part A - This may have needed a little research (completely normal in web dev positions!)
continueButton.addEventListener("contextmenu", () => {
    alert("Continue to subscription!");
});

// * Q3 - Part B
continueButton.addEventListener("dblclick", () => {
    alert("Continue to subscription!");
});

// * Q4 - Part A
// Generate a random RGB color
const colorGenerator = () => {    
    // Generate random R, G and B values
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    // Create and return the RGB string
    let newColor = `rgb(${red}, ${green}, ${blue})`;
    return newColor;
}

// * Q4 - Part B
h2.addEventListener("mouseover", () => {
    h2.style.backgroundColor = colorGenerator();
})

// * Q4 - Part C
window.addEventListener("resize", () => {
    h2.style.color = colorGenerator();
});