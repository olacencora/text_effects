function scrollTextAppear() {
  let introText = document.querySelector(".intro-text");
  let introPosition = introText.getBoundingClientRect().top;
  // getBoundingClientRect() - funkcja zwracajaca do odczytu pozycje introText wzgledem okna przeglądarki - narożnika top-left
  console.log(introPosition);
  let screenPosition = window.innerHeight / 1.3;
  // innerHeight = wysokosc dla roznych urzadzen

  // jesli odległosc od najwyższego punktu jaki widzimy w przegladarce (intro position) bedzie mneijsze niz wysokosc widocznej czesci strony (screen position) to zostanie dodana klasa do intro text, czyli jak scrollujac w dół pokaze sie element boza w jakim zamkniety jest tekst włączy sie funkcja
  if (introPosition < screenPosition) {
    introText.classList.add("intro-appear");
  }
}

window.addEventListener("scroll", scrollTextAppear);
