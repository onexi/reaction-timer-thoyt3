document.addEventListener("DOMContentLoaded", () => { // Add event listener for DOMContentLoaded
    const startButton = document.getElementById('startButton'); // Get the start button
    const stopButton = document.getElementById('stopButton'); // Get the stop button
    const result = document.getElementById('result'); // Get the result element
    const logList = document.getElementById('logList'); // Get the log list element

    const firstNameInput = document.getElementById('firstName'); // Get the first name input
    const lastNameInput = document.getElementById('lastName'); // Get the last name input
    const emailInput = document.getElementById('email'); // Get the email input

    let startTime = null; // Declare variable for start time
    let endTime, timeoutId; // Declare variables for end time, and timeout ID
    let isReady = false; // program starts with not ready state
    const penaltyTime = 2000; // Penalty time in milliseconds

    // Initial setup for buttons
    stopButton.style.backgroundColor = 'grey'; // Set the initial color of the stop button to grey
    stopButton.disabled = true; // Disable the stop button initially
    stopButton.style.cursor = 'not-allowed'; // Change cursor to not-allowed initially

    startButton.addEventListener('click', () => { // Add event listener for the start button
        if (firstNameInput.value === '' || lastNameInput.value === '' || emailInput.value === '') { // Check if any of the fields are empty
            alert('Please fill in all fields.'); // Show alert if any of the fields are empty
            return; // Exit the function if any of the fields are empty
        } // End of if statement

        startButton.disabled = true; // Disable the start button
        startButton.style.backgroundColor = 'grey'; // Change color to grey after clicking
        result.textContent = 'Wait for it...'; // Change the result text to 'Wait for it...'
        isReady = false; // Set readiness to false

        stopButton.disabled = false; // Enable the stop button
        stopButton.style.cursor = 'pointer'; // Change cursor to pointer

        const randomDelay = Math.floor(Math.random() * 20000) + 1000; // Generate random delay between 1 and 20 seconds

        timeoutId = setTimeout(() => { // Set timeout for random delay
            startTime = new Date(); // Set start time after delay
            stopButton.style.backgroundColor = 'red'; // Change color to red after delay
            isReady = true; // Set readiness after delay
        }, randomDelay); // End of setTimeout function
    }); // End of addEventListener function

    stopButton.addEventListener('click', () => { // Add event listener for the stop button
        console.log(`Stop button clicked. isReady: ${isReady}`); // Log the click event

        if (!isReady) { // Check if the user clicked too early
            result.textContent = `Too early! Your reaction time with penalty is ${penaltyTime} ms`; // Show penalty message
            logReactionTime(penaltyTime); // Log the penalty time
        } else { // If the user clicked at the right time
            endTime = new Date(); // Set end time
            const reactionTime = endTime - startTime; // Calculate reaction time
            result.textContent = `Your reaction time is ${reactionTime} ms`; // Show reaction time
            logReactionTime(reactionTime); // Log the reaction time
        } // End of if statement

        // Reset the game
        resetGame(); // Call the resetGame function
    }); // End of addEventListener function

    function logReactionTime(reactionTime) { // Log the reaction time
        const listItem = document.createElement('li'); // Create a list item element
        listItem.textContent = `${firstNameInput.value} ${lastNameInput.value} (${emailInput.value}): ${reactionTime} ms`; // Set the text content of the list item
        logList.appendChild(listItem); // Append the list item to the log list
    }

    function resetGame() { // Reset the game
        startButton.disabled = false; // Enable the start button
        startButton.style.backgroundColor = 'green'; // Change color to green
        stopButton.style.backgroundColor = 'grey'; // Change color to grey 
        stopButton.disabled = true; // Disable the stop button
        stopButton.style.cursor = 'not-allowed'; // Change cursor to not-allowed
        isReady = false; // Set readiness to false
        startTime = null; // Reset start time
        clearTimeout(timeoutId); // Clear the timeout
    } // End of resetGame function
}); // End of DOMContentLoaded event listener
