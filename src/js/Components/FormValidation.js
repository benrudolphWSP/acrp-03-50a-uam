import isValid from "../helpers/isValid";

export default function FormValidation(callback, target) {
  const currentFieldset = document.querySelector('fieldset.active');

  if (!currentFieldset) return;

  const inputs = currentFieldset.querySelectorAll('input[required]');
  const radios = currentFieldset.querySelectorAll('[type="radio"]');
  const inputsArr = Array.prototype.slice.call(inputs);
  const radiosArr = Array.prototype.slice.call(radios);

  // Define error messages
  const fieldErrors = {
    empty: 'The following field is required.',
    notchecked: 'Please make a selection'
  };

  if(inputs) {
    Array.prototype.forEach.call(inputs, (input) => {
      const errorMessage = document.querySelector(`#${input.name}Error`);
      // Get validity
      const validity = input.validity;

      // If valid, return null
      if (validity.valid) return;

      // Reset field state
      input.setCustomValidity('');
      errorMessage.innerHTML = '';
      input.removeAttribute('aria-describedby');

      // Handle empty input
      if (validity.valueMissing) {
        input.setCustomValidity(fieldErrors.empty);
        errorMessage.innerHTML = input.validationMessage;
        errorMessage.classList.add('active');
        input.setAttribute('aria-describedby', `${input.name}Error`);
        return;
      }

      // Handle wrong format input
      if (!input.checkValidity()) {
        errorMessage.innerHTML = input.validationMessage;
        input.setAttribute('aria-describedby', `${input.name}Error`);
        return;
      }
    });
  }

  // if (radios) {
  //   // Handle empty input
  //   if (!radiosArr.every(isValid)) {
  //     const errorMessage = document.querySelector(`#${radiosArr[0].name}Error`);
  //     radiosArr[0].setCustomValidity(fieldErrors.notchecked);
  //     errorMessage.innerHTML = radiosArr[0].validationMessage;
  //     radiosArr[0].setAttribute(
  //       'aria-describedby',
  //       `${radiosArr[0].name}Error`
  //     );
  //     return;
  //   }
  //   if (radiosArr.every(isValid)) {
  //     callback(target);
  //   }
  // }

  if (inputsArr.every(isValid)) {
    callback(target);
  }
}

