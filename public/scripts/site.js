
const getJokeButton = document.getElementById('get-joke');
const h2 = document.getElementById('joke-question');
const h3 = document.getElementById('joke-answer');
    
const url = (() => {
    return '/api/v1/random-joke/'
})();

getJokeButton.addEventListener('click', async () => {
    
    const response = await fetch(url)
    const joke = await response.json()


    h2.textContent = `Q: ${joke.question}`
    h3.textContent = `A: ${joke.answer}`
});

