const FlipCards = function (event) {
  if (!event.target.closest(".details-card__button")) return;
  const buttonCard = event.target.closest(".details-card__container");
  buttonCard.classList.toggle("flipped");
};

export function flipListen() {
  document.addEventListener("click", FlipCards, false);
}

export default FlipCards;
