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
