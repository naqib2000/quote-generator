let apiQuotes = [];

//show new quote
function newQuote() {
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
}

// GET quotes from API
// use async fetch request with try catch statement
// async can happen independently without affecting loading of page
async function getQuotes() {
  const apiURL = "https://type.fit/api/quotes";
  try {
    const response = await fetch(apiURL);
    apiQuotes = await response.json();
    newQuote();
  } catch (error) {
    //catch error here
  }
}

// on load
getQuotes();
