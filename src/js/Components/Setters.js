export const saveStep = function (stepId) {
  if (!localStorage) return;
  localStorage.setItem("stepID", stepId);
};

export const saveCurrentPage = function (path) {
  if (!localStorage) return;
  localStorage.setItem('page', path);
};

export const setComplete = function (step, complete) {
  if (!localStorage) return;
  localStorage.setItem("step" + step + "-complete", complete);
};
