import { getStep } from './Getters';
import errorReset from '../helpers/errorReset';

export default function ShowCurrentStep(callback) {
  const currentStep = getStep();
  const fieldsets = document.querySelectorAll('fieldset');
  const progressItems = document.querySelectorAll('.step');
  const currentFieldset = document.querySelector('#step' + currentStep);
  const currentProgress = document.querySelector('[data-step="' + currentStep + '"]');

  Array.prototype.forEach.call(fieldsets, function (fieldset) {
    fieldset.setAttribute('hidden', '');
    fieldset.classList.remove('active');
  });

  Array.prototype.forEach.call(progressItems, function (progressItem) {
    progressItem.classList.remove('active');
  });

  if (currentFieldset && currentProgress) {
    currentProgress.classList.add('active');
    currentFieldset.removeAttribute('hidden');
    setTimeout(() => {
      currentFieldset.classList.add('active');
    }, 300);
  }

  document.documentElement.scrollTop = 0;

  errorReset();
}
