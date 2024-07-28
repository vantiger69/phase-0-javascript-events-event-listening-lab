//function addingEventListener() {
//}
// Define the addingEventListener function
function addingEventListener() {
    // Select the element you want to attach the event listener to
    const button = document.getElementById('button');

    // Add the event listener
    button.addEventListener('click', function() {
        alert('Button was clicked!');
    });
}

// Call the function to ensure the event listener is added when the script runs
addingEventListener();
