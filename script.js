const sampleTexts = [
    "The quick brown fox jumps over the lazy dog.",
    "Typing fast requires both accuracy and speed.",
    "Practice makes perfect, especially when typing.",
    "She sells seashells by the seashore every Sunday.",
    "Actions speak louder than words, but both matter.",
    "A watched pot never boils, but patience is key.",
    "Every cloud has a silver lining, even in storms.",
    "Lightning never strikes the same place twice, they say.",
    "Time flies when you’re having fun, or so it seems.",
    "Red lorries race rapidly along winding roads.",
    "Peter Piper picked a peck of pickled peppers.",
    "Jumping jack rabbits joyfully juggled jellybeans.",
    "Better late than never, but never late is better.",
    "To err is human, to forgive divine.",
    "Beauty is in the eye of the beholder.",
    "An apple a day keeps the doctor away, allegedly.",
    "Seven sleek swans swam silently seaward.",
    "A rolling stone gathers no moss, but lots of speed.",
    "Hard work beats talent when talent doesn’t work hard.",
    "Four furious foxes fought for food fiercely.",
    "Good things come to those who wait, but act wisely.",
    "Quietly quizzical queens quickly questioned quirky quails.",
    "Every journey begins with a single step forward.",
    "Great minds think alike, but fools seldom differ.",
    "Success is not final, failure is not fatal—it is courage that counts."
];

let startTime, endTime;
const textDisplay = document.getElementById("text-display");
const inputField = document.getElementById("input-field");
const results = document.getElementById("results");
const startButton = document.getElementById("start-btn");

startButton.addEventListener("click", startTest);

function startTest() {
    inputField.value = "";
    results.textContent = "";
    const randomText = sampleTexts[Math.floor(Math.random() * sampleTexts.length)];
    textDisplay.textContent = randomText;
    inputField.disabled = false;
    inputField.focus();
    startTime = new Date().getTime();
    
    startButton.disabled = true;
    
    inputField.addEventListener("input", () => {
        if (inputField.value === randomText) {
            endTest();
        }
    });
}

function endTest() {
    endTime = new Date().getTime();
    const timeTaken = (endTime - startTime) / 1000; 
    const wordsTyped = textDisplay.textContent.split(" ").length;
    const wpm = Math.round((wordsTyped / timeTaken) * 60);
    
    results.textContent = `Your typing speed: ${wpm} words per minute`;
    inputField.disabled = true;
    startButton.disabled = false;
} 