const fetch = require('node-fetch');

let footerEl = document.querySelector('#quote');

const quotesUrl = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";
const quoteAuthor = "Ron Swanson";
let myQuote = '';

function getQuote() {
    fetch(quotesUrl)
    .then(response => response.json())
    .then(quote => {
       console.log(quote[0]);
    //    return quote[0];
    });
}

// console.log("This is: " + getQuote());

getQuote();