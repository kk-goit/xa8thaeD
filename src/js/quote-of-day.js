import yourEnergy from './api/your-energy-api';

const today = new Date().toISOString().slice(0, 10);
const quote = document.querySelector(".blockquote-text");
const author = document.querySelector(".quote-author")

const quoteInStorage = JSON.parse(localStorage.getItem("quoteOfDay"));

if(quoteInStorage && quoteInStorage.date === today) {
    quote.innerHTML = quoteInStorage.quote;
    author.innerHTML = quoteInStorage.author; 
} else {
    yourEnergy.getQuote()
        .then((response) => {
            if(typeof response !== "string")  {
                localStorage.setItem('quoteOfDay', JSON.stringify({
                    quote: response.quote,
                    author: response.author,
                    date: today
                }))
                quote.innerHTML = response.quote;
                author.innerHTML = response.author;
            } else {
                console.log(response);
            }
        })
}
