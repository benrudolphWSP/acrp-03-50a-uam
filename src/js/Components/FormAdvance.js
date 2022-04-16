import formSaver from '../Components/FormSaver';
import { saveStep, setComplete } from '../Components/Setters';
import ShowCurrentStep from '../Components/ShowCurrentStep';

let parentNextBtn;
let nextButton;
let prevButton;

if (document.querySelector('.assessment-step.active')) {
  parentNextBtn = document.querySelector('.assessment-step.active');
  nextButton = parentNextBtn.querySelector('.next-button');
  prevButton = parentNextBtn.querySelector('.prev-button');
}

export default function FormAdvance(target) {
  const saveForm = target.closest('[data-save-form]');
  const dataPageRedirect = target.dataset.href;
  const pageRedirect = target.href;

  if (saveForm) {
    const formId = saveForm.dataset.saveForm;
    const stepId = target.dataset.step;

    formSaver.saveForm(target, '#' + formId, {
      callbackSave: function (target, formId) {
        const airportClassification = JSON.parse(
          localStorage.getItem('formSaver-airportClassification')
        );
        if (stepId == undefined) {
          saveStep(1);
        } else {
          saveStep(stepId);
        }

        if (
          target.dataset.href ||
          (target.href && target !== nextButton && target !== prevButton)
        ) {
          if (
            dataPageRedirect &&
            stepId === '1' &&
            dataPageRedirect !== '/summary'
          ) {
            window.location.href =
              dataPageRedirect +
              '/airport-' +
              Object.keys(airportClassification)[0].substring(15)
              + '/index.html';
          } else if (dataPageRedirect && !stepId) {
            window.location.href = dataPageRedirect + '/index.html';
          } else if (pageRedirect) {
            window.location.href = pageRedirect;
          }
        }

        if (!target.href && stepId && formId) {
          ShowCurrentStep();
        }
      },
    });
  } else {
    if (
      target.dataset.href ||
      (target.href && target !== nextButton && target !== prevButton)
    ) {
      const airportClassification = JSON.parse(
        localStorage.getItem('formSaver-airportClassification')
      );
      if (dataPageRedirect !== '/summary') {
        window.location.href =
          dataPageRedirect +
          '/airport-' +
          Object.keys(airportClassification)[0].substring(15)
          + '/index.html';
      } else if (dataPageRedirect && !stepId) {
        window.location.href = dataPageRedirect + '/index.html';
      } else if (pageRedirect) {
        window.location.href = pageRedirect;
      }
    }
  }
}
