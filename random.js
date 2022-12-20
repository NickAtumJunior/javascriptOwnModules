const randomQuotes = () => {
  const quotes = [
    "Please Wait Oracle Data is Loading 😊",
    "Good Things Take Time 🧿",
    "We Appreciate Your Patientence 🧭",
    "Early Success is a Scam🌌",
    "We Know Your Time is Valid 🧡",
  ];
  const result = quotes[Math.floor(Math.random() * quotes.length)];
  return console.log(result);
};

const a = setInterval(() => {
  randomQuotes();
}, 1000);


setTimeout(() => {
   clearInterval(a)
},6000)