const homeContainer = document.querySelector("#content");

const createDescription = (text) => {
    const description = document.createElement("h2");
    description.innerHTML = text;

    return description;
}

const createQuote = (text) => {
    const quote = document.createElement("p");
    quote.textContent = text;

    return quote;
}

const createHomeDisplay = () => {
    const description = createDescription("Take a well deserved break from coding and enjoy<br>our outstanding selection of cocktails.");
    const quote = createQuote('“I feel bad for people who don’t drink. When they wake up in the morning, that’s as good as they’re going to feel all day.” – Frank Sinatra');

    homeContainer.innerHTML = '';
    homeContainer.classList.remove("backdrop");
    homeContainer.appendChild(description);
    homeContainer.appendChild(quote);
}

export default createHomeDisplay;