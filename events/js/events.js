// Function to modify the text content of the paragraph
/*
const changeText = () => {
    const p = document.querySelector('p');

    p.textContent = "I changed because of an inline event handler.";

the above runs the inline event handler attributes*/

/*
// Function to modify the text content of the paragraph
const changeText = () => {
    const p = document.querySelector('p');

    p.textContent = "I changed because of an event handler property.";
}

// Add event handler as a property of the button element
const button = document.querySelector('button');
button.onclick = changeText;

the above runs for event handler property
*/

/*
const p = document.querySelector('p');
const button = document.querySelector('button');

const changeText = () => {
    p.textContent = "Will I change?";
}

const alertText = () => {
    alert('Will I alert?');
}

// Events can be overwritten
button.onclick = changeText;
button.onclick = alertText;

The above runs for event handle properties and event fires from the browser

*/

// Function to modify the text content of the paragraph
/*
const changeText = () => {
    const p = document.querySelector('p');

    p.textContent = "I changed because of an event listener.";
}

// Listen for click event
const button = document.querySelector('button');
button.addEventListener('click', changeText);
Te code above is similar to the next but the next function sets multiple event listeers on the same element
*/

const p = document.querySelector('p');
const button = document.querySelector('button');

const changeText = () => {
    p.textContent = "Will I change?";
}

const alertText = () => {
    alert('Will I alert?');
}

// Multiple listeners can be added to the same event and element
button.addEventListener('click', changeText);
button.addEventListener('click', alertText);


// An anonymous function on an event listener
/*
button.addEventListener('click', () => {
    p.textContent = "Will I change?";
});
*/
// Test the keyCode, key, and code properties
document.addEventListener('keydown', event => {
    console.log('key: ' + event.keyCode);
    console.log('key: ' + event.key);
    console.log('code: ' + event.code);
});
