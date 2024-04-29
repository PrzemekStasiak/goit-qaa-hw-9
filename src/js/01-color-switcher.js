let chd; //ustawienie zmiennej chd wykorzytywanej dlaej w kodzie

const startBtn = document.querySelector('button[data-start]'); //ustawienie stałej startBtn i przypisanie wartości z kodu html przycisk start
const stopBtn = document.querySelector('button[data-stop]'); //ustawienie stałej stopBtn i przypisanie wartości z kody html przycisk stop

startBtn.addEventListener('click', changeColor); //nasłuchiwanie przycisku start gdy wcisnięty uruchom funkcję changeColor
stopBtn.addEventListener('click', stopColor); // nasłuchiwanie przycisku stop gdy wciśniety uruchom funkcję stop

function changeColor() {
  // funkcja changeColor
  if (!chd) {
    //sprawdzamy czy chd jest różne od null to zapobiegnie wielokrotnemu startowaniu funkcji gdy jest już uruchomiona
    chd = setInterval(RandomBackGroundHexColor, 1000); // gdy chd różne od nul sutawiamy interwał na 1s. i uruchamiamy funkcję RandomBackGroundHexColor
  }
}
function RandomBackGroundHexColor() {
  /// funkcja RandomBackGroundHexColor
  let randomColor = Math.floor(Math.random() * 16777215).toString(16); ///przypisujemy zmiennej random color wartość losową hexadecymalną
  document.body.style.backgroundColor = '#' + randomColor; //zmieniamy tło strony na kolor ustawiony w zmiennej randomColor
}
function stopColor() {
  // funkcja stopColor
  clearInterval(chd); //przerywamy cykl interval od zmiennej chd linia kodu 11
  chd = null; // sutawiamy zmienną na nul
}
