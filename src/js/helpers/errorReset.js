export default function errorReset() {
  //Gather all error message elements
  const globalErrorMessages = document.querySelectorAll(`.global-error.active`);
  const errorMessages = document.querySelectorAll(`.error.active`);

  //Reset all errors before we advance to next step
  Array.prototype.forEach.call(globalErrorMessages, (error) => {
    error.classList.remove('active');
  });
  Array.prototype.forEach.call(errorMessages, (error) => {
    error.classList.remove('active');
  });
}
