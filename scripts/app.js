console.log("hello world");

function processResponse(response) {
    return response.json();
}

// Show the joke on the page:
// 1. Make the request using fetch()
fetch("https://icanhazdadjoke.com/", {
    headers: {
        Accept: 'application/json' 
    }
})
.then(response => response.json())
.then(data => {
    console.log(data)
    return data.joke
})
.then(theJoke => {
    console.log(theJoke)
})
.catch(err => console.log(err))
// 2. Grab the .joke
// 3. "Render" it to the page
