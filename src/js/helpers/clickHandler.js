import FormAdvance from '../Components/FormAdvance';
import FormValidation from '../Components/FormValidation';

let parentNextBtn;
let nextButton;
let prevButton;

if (document.querySelector('.active')) {
  parentNextBtn = document.querySelector('.active');
  nextButton = parentNextBtn.querySelector('.next-button');
  prevButton = parentNextBtn.querySelector('.prev-button');
}

export default function clickHandler(event) {
  const target = event.target;
  const saveForm = target.closest('[data-save-form]');
  const print = target.closest('.print-plan');
  const restart = target.closest('.restart-assessment');

  if (target == saveForm || target == nextButton || target == prevButton) {
    event.preventDefault();

    if (saveForm) {
      FormValidation(FormAdvance, target);
    } else {
      FormAdvance(target);
    }
  }

  if (target == print) {
    window.print();
  }

  if (target == restart) {
    localStorage.removeItem('formSaver-airportClassification');
    localStorage.removeItem('formSaver-classificationAssessment');
    window.location.href = '/';
  }
}
