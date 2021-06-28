function ToggleData(event) {
  if (!event.target.closest("[data-show-year]")) return;

  const showYear = event.target.dataset.showYear;
  const showElements = document.querySelectorAll("[data-year='" + showYear + "'")
  
  Array.prototype.forEach.call(showElements, (element) => {
    element.toggleAttribute("hidden");
  });
}

export function initElements() {
  const data = document.querySelectorAll("[data-year]");

  Array.prototype.forEach.call(data, (content) => {
    content.setAttribute("hidden", "");
  });
}

export function dataListen() {
  document.addEventListener("change", ToggleData, false);
}
