const texts = ["friday evenings", "making websites", "design great things"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

// samowywolujaca sie funkcja - run imidietly
(function type() {
  // jesli ilosc wyrazow bedzie rowna ilosci wszytskich eleentow tablicy to znowy powroci do 0 czyli zrobi loop over
  if (count === texts.length) {
    count = 0;
  }
  // przypisujemy do zmiennej current text element tablicy
  currentText = texts[count];

  // do zmiennej letter przypisalismy litere z wyrazu powiekszajac index na nastepny raz
  letter = currentText.slice(0, ++index);

  // pustej h1 z html przypisujemy zmienna letter ktora dodaje litery z wyrazow
  document.querySelector(".typing").textContent = letter;

  // jesli dlugosc zbioru liter zrowna sie z dlugoscia slowa czyli napiszemy cale slowo to przerzuci sie na kolejne slowo i wyzeruje index literowy na zero zeby kolejne slowo zaczelo sie od pierwszej litery
  if (letter.length === currentText.length) {
    count++;
    index = 0;
  }
  // wywoluje funkcje po okreslonym czasie
  setTimeout(type, 400);
})();

// var i = 0;
// var txt = 'Lorem ipsum typing effect!'; /* The text */
// var speed = 50; /* The speed/duration of the effect in milliseconds */

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("demo").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }
