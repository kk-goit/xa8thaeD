import axios from 'axios';
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
        .then(({ data }) => {
            localStorage.setItem('quoteOfDay', JSON.stringify({
                quote: data.quote,
                author: data.author,
                date: today
            }))
            quote.innerHTML = data.quote;
            author.innerHTML = data.author;
        })
        .catch(error => console.log(error));
}
