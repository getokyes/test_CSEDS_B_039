
const jokeText = document.getElementById("joke-text");
const charCount = document.getElementById("char-count");
const getJokeButton = document.getElementById("get-joke");
const clearJokeButton = document.getElementById("clear-joke");
const jokeAPI = "https://v2.jokeapi.dev/joke/Any";

async function fetchJoke() {
    try {
        const response = await fetch(jokeAPI);
        
        if (!response.ok) {
            throw new Error("API request failed.");
        }

        const data = await response.json();
        let joke = data.joke || `${data.setup} - ${data.delivery}`;
        
        jokeText.textContent = joke;
        charCount.textContent = `Character count: ${joke.length}`;
    } catch (error) {
        jokeText.textContent = "Failed to fetch a joke. Please try again.";
        charCount.textContent = "Character count: 0";
        console.error("Error:", error);
    }
}
getJokeButton.addEventListener("click", fetchJoke);
clearJokeButton.addEventListener("click", () => {
    jokeText.textContent = "Press the button for a joke!";
    charCount.textContent = "Character count: 0";
});
