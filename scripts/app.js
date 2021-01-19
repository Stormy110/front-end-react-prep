console.log("hello world");

async function main() {
    const button = document.querySelector('#new-joke')
    button.addEventListener('click', async (event)=>{
        event.preventDefault();
        const joke = await getJoke();
        renderJoke(joke)
    })
}

async function getJoke() {
// Show the joke on the page:
// 1. Make the request using fetch()
const jokePromise = fetch("https://icanhazdadjoke.com/", {
    headers: {
        Accept: 'application/json' 
    }
});
const response = await jokePromise;
const jokeData = await response.json();

return jokeData.joke
}

async function renderJoke(joke) {

    // create the DOM element
    const p = document.createElement('p');
    // put the joke text into it
    p.textContent = joke;
    // attach it to an existing DOM element
    document.querySelector('#root').appendChild(p)
}

main()