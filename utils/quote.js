const fetch = require('node-fetch');

apiURL = "http://ron-swanson-quotes.herokuapp.com/v2/quotes";

async function getQuote(apiURL) {
    let response = await fetch("http://ron-swanson-quotes.herokuapp.com/v2/quotes");
    let data = await response.json();

    console.log(data[0]);
    return data[0];
}

module.exports = {
    getQuote
};

