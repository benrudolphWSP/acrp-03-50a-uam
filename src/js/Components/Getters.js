/**
 * @function getIndex
 * @param  {type} array {description}
 * @param  {type} elem  {description}
 * @return {type} {description}
 */
export const getIndex = function (array, elem) {
  let index = array.findIndex((x) => x.id === elem);
  let currentField = array[index];
  return { index, currentField };
};

/**
 * @function getCurrentStep
 * @return {type} {description}
 */
export const getCurrentStep = function () {
  if (!localStorage) return;
  let stepId = localStorage.getItem("stepID");
  if (stepId) return JSON.parse(stepId);
  return [];
};

/**
 * @function getCompleteStep
 * @return {type} {description}
 */
export const getCompleteStep = function (stepId) {
  if (!localStorage) return;
  let completeStep = localStorage.getItem('step' + stepId);
  if (stepId) return JSON.parse(stepId);
  return [];
};

/**
 * @function getInputValue
 * @param  {type} array {description}
 * @param  {type} id    {description}
 * @param  {type} value {description}
 * @return {type} {description}
 */
export const getInputValue = function (array, id, value) {
  let output = "";
  for (var i = 0; i < array.length; ++i) {
    if (array[i][id] === value) {
      output = array[i]["field"];
    }
  }
  return output;
};

/**
 * @function getListValues
 * @param  {type} array    Array to search for passed value
 * @param  {type} value    Value to match against
 * @param  {type} listType Can be CSV, CSV No period, or blank for list item
 * @return {type}
 */
export const getListValues = function (array, value, listType) {
  let output = "";
  let listObj = array.filter((element) => element.id.includes(value));
  for (var i = 0; i < listObj.length; ++i) {
    if (listType === "csv" && listObj.length !== i + 1) {
      output += `<span>${listObj[i]["field"]},</span> `;
    } else if (listType === "csv" && listObj.length === i + 1) {
      output += `<span>${listObj[i]["field"]}.</span> `;
    } else if (listType === "csv-np" && listObj.length !== i + 1) {
      output += `<span>${listObj[i]["field"]},</span> `;
    } else if (listType === "csv-np" && listObj.length === i + 1) {
      output += `<span>${listObj[i]["field"]}</span> `;
    } else {
      output += `<li><span>${listObj[i]["field"]}</span></li>`;
    }
  }
  return output;
};


/*!
 * Get all of an element's parent elements up the DOM tree until a matching parent is found
 * (c) 2019 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Node}   elem     The element
 * @param  {String} parent   The selector for the parent to stop at
 * @param  {String} filter   The selector to filter against [optional]
 * @return {Array}           The parent elements
 */
export const getParentElems = function (elem, parent, filter) {
  // Setup parents array
  var parents = [];

  // Get matching parent elements
  while (elem && elem !== document) {
    // If there's a parent and the element matches, break
    if (parent) {
      if (elem.matches(parent)) break;
    }

    // If there's a filter and the element matches, push it to the array
    if (filter) {
      if (elem.matches(filter)) {
        parents.push(elem);
      }
      continue;
    }

    // Otherwise, just add it to the array
    parents.push(elem);

    elem = elem.parentNode;
  }

  return parents;
};

export const getStep = function () {
  return localStorage.getItem("stepID");
};
