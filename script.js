// Text to be typed out initially
const text = "Welcome to my portfolio, loading";
let i = 0;

// Total number of squares for the progress bar
const totalSquares = 20;
let squaresFilled = 0;

// Flags for tracking the completion of typing and progress bar
let typingFinished = false;
let progressBarFinished = false;
let dotAnimationInterval;

// Get references to the progress bar container and home button elements
const progressContainer = document.querySelector('.progress-container');
const homeButton = document.getElementById('homeButton');

// Typing effect for the initial text
function typeWriter() {
    if (i < text.length) {
        document.getElementById("terminal").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 50); // Adjust typing speed here
    } else {
        typingFinished = true;
        startDotAnimation(); // Start the dots animation after the text is finished
    }
}

// Dots animation function
function startDotAnimation() {
    let dotCount = 0;
    const terminal = document.getElementById("terminal");

    // Repeatedly add and remove dots until the progress bar is full
    dotAnimationInterval = setInterval(() => {
        if (dotCount < 3) {
            terminal.innerHTML += ".";
            dotCount++;
        } else {
            terminal.innerHTML = text; // Reset to original sentence
            dotCount = 0;
        }
    }, 500); // Adjust the speed of dot animation
}

// Function to randomize loading bar behavior
function animateProgressBar() {
    if (squaresFilled < totalSquares) {
        // Randomize the number of squares to load (between 1 and 3)
        const squaresToLoad = Math.floor(Math.random() * 3) + 1;

        // Add the squares to the progress bar
        for (let j = 0; j < squaresToLoad && squaresFilled < totalSquares; j++) {
            const square = document.createElement('div');
            square.classList.add('square');
            progressContainer.appendChild(square);
            squaresFilled++;
        }

        // Randomize the delay between batches (between 200ms and 800ms)
        const delay = Math.floor(Math.random() * 600) + 200;

        // Call the function again after the delay
        setTimeout(animateProgressBar, delay);
    } else {
        progressBarFinished = true;
        checkCompletion(); // Check if both animations are done
    }
}

// Function to check if both animations are complete
function checkCompletion() {
    if (progressBarFinished) {
        // Stop the dot animation
        clearInterval(dotAnimationInterval);

        // Ensure the terminal text ends with the three dots before stopping
        const finalMessage = "Loading Complete, Thank you for your Patience";
        document.getElementById("terminal").innerHTML = ""; // Clear terminal for new text

        // Type out the final message
        typeFinalMessage(finalMessage);
    }
}

// Typing effect for the final message
function typeFinalMessage(finalMessage) {
    let j = 0;

    function type() {
        if (j < finalMessage.length) {
            document.getElementById("terminal").innerHTML += finalMessage.charAt(j);
            j++;
            setTimeout(type, 50); // Adjust typing speed here
        } else {
            // Once typing is done, display the home button
            homeButton.style.display = 'block';
        }
    }

    type();
}

// Start the typing effect and progress bar animation simultaneously
window.onload = () => {
    typeWriter(); // Start typing
    animateProgressBar(); // Start progress bar animation
};

// Function to introduce stutter or low frame rate effect
function simulateLowRefreshRate(callback) {
    const frameRate = 10; // Simulate a 10Hz monitor (adjust for effect)
    const delay = 1000 / frameRate;

    function loop() {
        setTimeout(() => {
            callback();
            requestAnimationFrame(loop);
        }, delay);
    }

    requestAnimationFrame(loop);
}

// Function to introduce stutter or low frame rate effect
function simulateLowRefreshRate(callback) {
    const frameRate = 10; // Simulate a 10Hz monitor (adjust for effect)
    const delay = 1000 / frameRate;

    function loop() {
        setTimeout(() => {
            callback();
            requestAnimationFrame(loop);
        }, delay);
    }

    requestAnimationFrame(loop);
}

// Simulate low refresh rate for animations
simulateLowRefreshRate(() => {
});



