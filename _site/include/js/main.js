/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/Components/AssessmentSummary.js":
/*!************************************************!*\
  !*** ./src/js/Components/AssessmentSummary.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AssessmentSummary; }
/* harmony export */ });
/* harmony import */ var _helpers_inRange__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/inRange */ "./src/js/helpers/inRange.js");
function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

function _iterableToArrayLimit(arr, i) {
  var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"];

  if (_i == null) return;
  var _arr = [];
  var _n = true;
  var _d = false;

  var _s, _e;

  try {
    for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}


function AssessmentSummary() {
  var summaryReview = document.querySelector('#summaryReview');
  var recommendations = document.querySelector('#recommendations');
  var sectionTitle = document.querySelector('.section-title');
  var contactData = JSON.parse(localStorage.getItem('formSaver-initialInfo'));
  var i = 0; //Get data from local storage

  var classification = JSON.parse(localStorage.getItem('formSaver-airportClassification')); // Setup classification section title

  var airportKey = Object.keys(classification);
  var key = airportKey.toString();
  var titleText = ''; //Get data from local storage

  var assessmentScores = JSON.parse(localStorage.getItem('formSaver-classification-airport-' + Object.values(classification)));

  switch (key) {
    case 'classificationshub':
      titleText = 'Hub';
      break;

    case 'classificationsurban':
      titleText = 'Reliever/General Aviation Urban';
      break;

    case 'classificationssuburban':
      titleText = 'Reliever/General Aviation Suburban';
      break;

    case 'classificationsrural':
      titleText = 'General Aviation Rural';
      break;

    default:
      break;
  } // create text element for classification section title


  var classificationText = document.createTextNode(titleText);
  sectionTitle.appendChild(classificationText);
  /**
   * @function assessmentScore
   * @param  {string} keyFilter     Filter out object keys based on string
   * @param  {number} weightedValue weighted value to caluclate assessment score in each area
   * @return {type} {description}
   */

  function assessmentScore(keyFilter, weightedValue) {
    var awarenessObj = Object.fromEntries(Object.entries(assessmentScores).filter(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 1),
          key = _ref2[0];

      return key.includes(keyFilter);
    }));
    var questionsDivisor = Object.keys(awarenessObj).length * 2;
    var score = 0;
    Object.values(awarenessObj).forEach(function (value) {
      var scoreNum = parseInt(value);
      score = score + scoreNum;
    });
    var percentage = Math.round(score / questionsDivisor * weightedValue * 100);
    return percentage;
  }

  var awarenessScore = assessmentScore('q1', 0.2);
  var readinessScore = assessmentScore('q2', 0.45);
  var infrastructureScore = assessmentScore('q3', 0.35);
  var overallPercentage = awarenessScore + readinessScore + infrastructureScore; //Calcualte overall score

  function overallScore() {
    var finalPercent = '';

    if ((0,_helpers_inRange__WEBPACK_IMPORTED_MODULE_0__["default"])(overallPercentage, 1, 24)) {
      finalPercent += "<div class=\"bg-error\"><span class=\"block p-2 font-bold text-3xl leading-none\">".concat(overallPercentage, "%</span></div>");
    } else if ((0,_helpers_inRange__WEBPACK_IMPORTED_MODULE_0__["default"])(overallPercentage, 25, 49)) {
      finalPercent += "<div class=\"bg-orange\"><span class=\"block p-2 font-bold text-3xl leading-none\">".concat(overallPercentage, "%</span></div>");
    } else if ((0,_helpers_inRange__WEBPACK_IMPORTED_MODULE_0__["default"])(overallPercentage, 50, 74)) {
      finalPercent += "<div class=\" bg-yellow\"><span class=\"block p-2 font-bold text-3xl leading-none\">".concat(overallPercentage, "%</span></div>");
    } else if ((0,_helpers_inRange__WEBPACK_IMPORTED_MODULE_0__["default"])(overallPercentage, 75, 100)) {
      finalPercent += "<div class=\"bg-green\"><span class=\"block p-2 font-bold text-3xl leading-none\">".concat(overallPercentage, "%</span></div>");
    }

    return finalPercent;
  }

  var summaryReviewHTML = "\n    <table class=\"styled-table max-w-4xl mr-auto mt-12\">\n      <tr>\n        <th scope=\"col\" class=\"bg-light\">Readiness Components (weighted %)</th>\n        <th scope=\"col\" class=\"bg-light\">Airport Readiness (%)</th>\n      </tr>\n      <tr>\n        <th scope=\"row\" class=\"text-center bg-transparent\">Awareness of Advanced Air Mobility (20%)</th>\n        <td class=\"border-r border-b border-light text-center font-semibold text-lg\">\n          <div data-level>\n          ".concat(assessmentScore('q1', 0.2), "%\n          </div>\n        </td>\n      </tr>\n      <tr>\n        <th scope=\"row\" class=\"text-center bg-transparent\">Readiness for Advanced Air Mobility (45%)</th>\n        <td class=\"border-r border-b border-light text-center font-semibold text-lg\">\n          <div data-level>\n          ").concat(assessmentScore('q2', 0.45), "%\n          </div>\n        </td>\n      </tr>\n      <tr>\n        <th scope=\"row\" class=\"text-center bg-transparent\">Infrastructure for Advanced Air Mobility (35%)</th>\n        <td class=\"border-r border-b border-light text-center font-semibold text-lg\">\n          <div data-level>\n          ").concat(assessmentScore('q3', 0.35), "%\n          </div>\n        </td>\n      </tr>\n      <tr>\n        <th scope=\"row\" class=\"text-center bg-light\">Overall Advanced Airport Mobility Readiness Level</th>\n        <td class=\"mx-auto bg-light border-r border-b border-light text-center\">\n          ").concat(overallScore(), "\n        </td>\n      </tr>\n    </table>\n  ");
  summaryReview.innerHTML = summaryReviewHTML;
  var recommendationsHTML = ''; //No Go recommendations

  if (overallPercentage >= 0 && overallPercentage <= 24) {
    recommendationsHTML += "\n   <div class=\"lg:flex justify-between mt-12\">\n      <div class=\"lg:w-1/2 lg:mr-8\">\n      <h3  class=\"h2\">Level 1: No-Go</h3>\n        <p>This decision implies it may not be the most prudent time to incorporate UAM. It will be beneficial to continue to monitor the progress of UAM development and applications elsewhere.  It will be in the best interest of an airport to read the sections on the guidance document to understand the factors that led to a \u201Cnot-now\u201D decision and revisit the decision when circumstances warrant it. The airports should also include a discussion of the consequences and ramifications of not proceeding with UAM initiatives at this time and an indication of when revisiting would be prudent.</p>\n        <a href=\"/pdfs/ACRP0350_Task04_Interim_Report_05-15-2021.pdf\" target=\"_blank\" class=\"button inline-block no-print pdf-button\">View PDF Guidebook</a>\n      </div>\n      <table class=\"styled-table lg:w-1/2 mt-0\">\n        <tr>\n          <th scope=\"col\" class=\"w-5/12 bg-light\">Airport Readiness (%)</th>\n          <th scope=\"col\" class=\"w-7/12 bg-light\">Airport Readiness Level</th>\n        </tr>\n        <tr class=\"opacity-30\">\n          <th scope=\"row\"><span class=\"percentages border-green\">75%-100%</span></th>\n          <td class=\"font-bold pl-3 border-b border-light text-center\">Level 4: Go-Now</td>\n        </tr>\n        <tr class=\"opacity-30\">\n          <th scope=\"row\"><span class=\"percentages border-yellow\">50%-75%</span></th>\n          <td class=\"font-bold pl-3 border-b border-light text-center\">Level 3: Slow-Go</td>\n        </tr>\n        <tr class=\"opacity-30\">\n          <th scope=\"row\"><span class=\"percentages border-orange\">25%-50%</span></th>\n          <td class=\"font-bold pl-3 border-b border-light text-center\">Level 2: Not-Now</td>\n        </tr>\n        <tr>\n          <th scope=\"row\"><span class=\"percentages border-error\">0%-25%</span></th>\n          <td class=\"font-bold pl-3 border-b border-light text-center\">Level 1: No-Go</td>\n        </tr>\n      </table>\n    </div>\n    ";
  } // Not Now recommendations


  if (overallPercentage >= 25 && overallPercentage <= 49) {
    recommendationsHTML += "\n    <div class=\"lg:flex justify-between mt-12\">\n      <div class=\"lg:w-1/2 lg:mr-8\">\n      <h3 class=\"h2\">Level 2: Not-Now</h3>\n        <p>This decision implies it may not be the most prudent time to incorporate UAM. It will be beneficial to continue to monitor the progress of UAM development and applications elsewhere.  It will be in the best interest of an airport to read the sections on the guidance document to understand the factors that led to a \u201Cnot-now\u201D decision and revisit the decision when circumstances warrant it. The airports should also include a discussion of the consequences and ramifications of not proceeding with UAM initiatives at this time and an indication of when revisiting would be prudent.</p>\n        <a href=\"/pdfs/ACRP0350_Task04_Interim_Report_05-15-2021.pdf\" target=\"_blank\" class=\"button inline-block no-print pdf-button\">View PDF Guidebook</a>\n      </div>\n      <table class=\"styled-table lg:w-1/2 mt-0\">\n        <tr>\n          <th scope=\"col\" class=\"w-5/12 bg-light\">Airport Readiness (%)</th>\n          <th scope=\"col\" class=\"w-7/12 bg-light\"> Airport Readiness Level</th>\n        </tr>\n        <tr class=\"opacity-30\">\n          <th scope=\"row\"><span class=\"percentages border-green\">75%-100%</span></th>\n          <td class=\"font-bold pl-3 border-b border-light text-center\">Level 4: Go-Now</td>\n        </tr>\n        <tr class=\"opacity-30\">\n          <th scope=\"row\"><span class=\"percentages border-yellow\">50%-75%</span></th>\n          <td class=\"font-bold pl-3 border-b border-light text-center\">Level 3: Slow-Go</td>\n        </tr>\n        <tr>\n          <th scope=\"row\"><span class=\"percentages border-orange\">25%-50%</span></th>\n          <td class=\"font-bold pl-3 border-b border-light text-center\">Level 2: Not-Now</td>\n        </tr>\n        <tr class=\"opacity-30\">\n          <th scope=\"row\"><span class=\"percentages border-error\">0%-25%</span></th>\n          <td class=\"font-bold pl-3 border-b border-light text-center\">Level 1: No-Go</td>\n        </tr>\n      </table>\n    </div>\n    ";
  } // Slow Go recommendations


  if (overallPercentage >= 50 && overallPercentage <= 74) {
    recommendationsHTML += "\n   <div class=\"lg:flex justify-between mt-12\">\n      <div class=\"lg:w-1/2 lg:mr-8\">\n      <h3 class=\"h2\">Level 3: Slow-Go</h3>\n        <p>Decide to advance toward UAM integration but for some combination of the initiatives. Do so at an \u201Cevolutionary\u201D pace by naturally incorporating areas that best benefit the airport.  For example, upgrading the electrical grid may be beneficial to support electrification efforts for future vehicles and ground support equipment, which also supports UAM. Other beneficial areas are identifying ways to diversify revenue sources to prepare for less revenue from petrol-based fuel sources.  Ideally, integrate the use cases into the airport\u2019s practices as it becomes relatively mainstreamed and prudent for the airport to adopt to mitigate risk. Include a discussion of the consequences and ramifications of a \u201Cslow-go\u201D decision.</p>\n        <a href=\"/pdfs/ACRP0350_Task04_Interim_Report_05-15-2021.pdf\" target=\"_blank\" class=\"button inline-block no-print pdf-button\">View PDF Guidebook</a>\n      </div>\n      <table class=\"styled-table lg:w-1/2 mt-0\">\n        <tr>\n          <th scope=\"col\" class=\"w-5/12 bg-light\">Airport Readiness (%)</th>\n          <th scope=\"col\" class=\"w-7/12 bg-light\"> Airport Readiness Level</th>\n        </tr>\n        <tr class=\"opacity-30\">\n          <th scope=\"row\"><span class=\"percentages border-green\">75%-100%</span></th>\n          <td class=\"font-bold pl-3 border-b border-light text-center\">Level 4: Go-Now</td>\n        </tr>\n        <tr>\n          <th scope=\"row\"><span class=\"percentages border-yellow\">50%-75%</span></th>\n          <td class=\"font-bold pl-3 border-b border-light text-center\">Level 3: Slow-Go</td>\n        </tr>\n        <tr class=\"opacity-30\">\n          <th scope=\"row\"><span class=\"percentages border-orange\">25%-50%</span></th>\n          <td class=\"font-bold pl-3 border-b border-light text-center\">Level 2: Not-Now</td>\n        </tr>\n        <tr class=\"opacity-30\">\n          <th scope=\"row\"><span class=\"percentages border-error\">0%-25%</span></th>\n          <td class=\"font-bold pl-3 border-b border-light text-center\">Level 1: No-Go</td>\n        </tr>\n      </table>\n    </div>\n    ";
  } // Go Now recommendations


  if (overallPercentage >= 75 && overallPercentage <= 100) {
    recommendationsHTML += "\n   <div class=\"lg:flex justify-between mt-12\">\n      <div class=\"lg:w-1/2 lg:mr-8\">\n          <h3 class=\"h2\">Level 4: Go-Now</h3>\n        <p>Decide to advance toward UAM integration but for some combination of the initiatives. Do so at an \u201Cevolutionary\u201D pace by naturally incorporating areas that best benefit the airport.  For example, upgrading the electrical grid may be beneficial to support electrification efforts for future vehicles and ground support equipment, which also supports UAM. Other beneficial areas are identifying ways to diversify revenue sources to prepare for less revenue from petrol-based fuel sources.  Ideally, integrate the use cases into the airport\u2019s practices as it becomes relatively mainstreamed and prudent for the airport to adopt to mitigate risk. Include a discussion of the consequences and ramifications of a \u201Cslow-go\u201D decision.</p>\n        <a href=\"/pdfs/ACRP0350_Task04_Interim_Report_05-15-2021.pdf\" target=\"_blank\" class=\"button inline-block no-print pdf-button\">View PDF Guidebook</a>\n      </div>\n            <table class=\"styled-table mt-0 lg:w-1/2\">\n        <tr>\n          <th scope=\"col\" class=\"w-5/12 bg-light\">Airport Readiness (%)</th>\n          <th scope=\"col\" class=\"w-7/12 bg-light\"> Airport Readiness Level</th>\n        </tr>\n        <tr>\n          <th scope=\"row\"><span class=\"percentages border-green\">75%-100%</span></th>\n          <td class=\"font-bold pl-3 border-b border-light text-center\">Level 4: Go-Now</td>\n        </tr>\n        <tr class=\"opacity-30\">\n          <th scope=\"row\"><span class=\"percentages border-yellow\">50%-75%</span></th>\n          <td class=\"font-bold pl-3 border-b border-light text-center\">Level 3: Slow-Go</td>\n        </tr>\n        <tr class=\"opacity-30\">\n          <th scope=\"row\"><span class=\"percentages border-orange\">25%-50%</span></th>\n          <td class=\"font-bold pl-3 border-b border-light text-center\">Level 2: Not-Now</td>\n        </tr>\n        <tr class=\"opacity-30\">\n          <th scope=\"row\"><span class=\"percentages border-error\">0%-25%</span></th>\n          <td class=\"font-bold pl-3 border-b border-light text-center\">Level 1: No-Go</td>\n        </tr>\n      </table>\n    </div>\n    ";
  }

  recommendations.innerHTML = recommendationsHTML;
}

/***/ }),

/***/ "./src/js/Components/DropdownNav.js":
/*!******************************************!*\
  !*** ./src/js/Components/DropdownNav.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuListen": function() { return /* binding */ menuListen; }
/* harmony export */ });
var DropdownNav = function DropdownNav(event) {
  if (!event.target.closest('.menu-toggle')) return;
  var menuToggle = event.target.closest('.menu-toggle');
  var mainNav = document.querySelector('.main-nav');
  mainNav.classList.toggle('block');
  mainNav.toggleAttribute('hidden');

  if (menuToggle.getAttribute('aria-expanded') === 'false') {
    menuToggle.setAttribute('aria-expanded', true);
  } else {
    menuToggle.setAttribute('aria-expanded', false);
  }
};

function menuListen() {
  document.addEventListener('click', DropdownNav, false);
}

/***/ }),

/***/ "./src/js/Components/FormAdvance.js":
/*!******************************************!*\
  !*** ./src/js/Components/FormAdvance.js ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FormAdvance; }
/* harmony export */ });
/* harmony import */ var _Components_FormSaver__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/FormSaver */ "./src/js/Components/FormSaver.js");
/* harmony import */ var _Components_FormSaver__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Components_FormSaver__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Components_Setters__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Setters */ "./src/js/Components/Setters.js");
/* harmony import */ var _Components_ShowCurrentStep__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Components/ShowCurrentStep */ "./src/js/Components/ShowCurrentStep.js");



var parentNextBtn;
var nextButton;
var prevButton;

if (document.querySelector('.assessment-step.active')) {
  parentNextBtn = document.querySelector('.assessment-step.active');
  nextButton = parentNextBtn.querySelector('.next-button');
  prevButton = parentNextBtn.querySelector('.prev-button');
}

function FormAdvance(target) {
  var saveForm = target.closest('[data-save-form]');
  var dataPageRedirect = target.dataset.href;
  var pageRedirect = target.href;

  if (saveForm) {
    var formId = saveForm.dataset.saveForm;
    var _stepId = target.dataset.step;
    _Components_FormSaver__WEBPACK_IMPORTED_MODULE_0___default().saveForm(target, '#' + formId, {
      callbackSave: function callbackSave(target, formId) {
        var airportClassification = JSON.parse(localStorage.getItem('formSaver-airportClassification'));

        if (_stepId == undefined) {
          (0,_Components_Setters__WEBPACK_IMPORTED_MODULE_1__.saveStep)(1);
        } else {
          (0,_Components_Setters__WEBPACK_IMPORTED_MODULE_1__.saveStep)(_stepId);
        }

        if (target.dataset.href || target.href && target !== nextButton && target !== prevButton) {
          if (dataPageRedirect && _stepId === '1' && dataPageRedirect !== '/summary') {
            window.location.href = dataPageRedirect + '/airport-' + Object.keys(airportClassification)[0].substring(15);
          } else if (dataPageRedirect && !_stepId) {
            window.location.href = dataPageRedirect;
          } else if (pageRedirect) {
            window.location.href = pageRedirect;
          }
        }

        if (!target.href && _stepId && formId) {
          (0,_Components_ShowCurrentStep__WEBPACK_IMPORTED_MODULE_2__["default"])();
        }
      }
    });
  } else {
    if (target.dataset.href || target.href && target !== nextButton && target !== prevButton) {
      var airportClassification = JSON.parse(localStorage.getItem('formSaver-airportClassification'));

      if (dataPageRedirect !== '/summary') {
        window.location.href = dataPageRedirect + '/airport-' + Object.keys(airportClassification)[0].substring(15);
      } else if (dataPageRedirect && !stepId) {
        window.location.href = dataPageRedirect;
      } else if (pageRedirect) {
        window.location.href = pageRedirect;
      }
    }
  }
}

/***/ }),

/***/ "./src/js/Components/FormSaver.js":
/*!****************************************!*\
  !*** ./src/js/Components/FormSaver.js ***!
  \****************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory(root)),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(typeof __webpack_require__.g !== 'undefined' ? __webpack_require__.g : this.window || this.global, function (root) {
  'use strict'; //
  // Variables
  //

  var formSaver = {}; // Object for public APIs

  var supports = 'querySelector' in document && 'addEventListener' in root && 'localStorage' in root && 'classList' in document.createElement('_'); // Feature test

  var settings, forms; // Default settings

  var defaults = {
    selectorStatus: '[data-form-status]',
    selectorSave: '[data-form-save]',
    selectorDelete: '[data-form-delete]',
    selectorIgnore: '[data-form-no-save]',
    deleteClear: true,
    saveMessage: 'Saved!',
    deleteMessage: 'Deleted!',
    saveClass: '',
    deleteClass: '',
    initClass: 'js-form-saver',
    callbackSave: function callbackSave() {},
    callbackDelete: function callbackDelete() {},
    callbackLoad: function callbackLoad() {}
  }; //
  // Methods
  //

  /**
   * A simple forEach() implementation for Arrays, Objects and NodeLists.
   * @private
   * @author Todd Motto
   * @link   https://github.com/toddmotto/foreach
   * @param {Array|Object|NodeList} collection Collection of items to iterate
   * @param {Function}              callback   Callback function for each iteration
   * @param {Array|Object|NodeList} scope      Object/NodeList/Array that forEach is iterating over (aka `this`)
   */

  var forEach = function forEach(collection, callback, scope) {
    if (Object.prototype.toString.call(collection) === '[object Object]') {
      for (var prop in collection) {
        if (Object.prototype.hasOwnProperty.call(collection, prop)) {
          callback.call(scope, collection[prop], prop, collection);
        }
      }
    } else {
      for (var i = 0, len = collection.length; i < len; i++) {
        callback.call(scope, collection[i], i, collection);
      }
    }
  };
  /**
   * Merge two or more objects. Returns a new object.
   * @private
   * @param {Boolean}  deep     If true, do a deep (or recursive) merge [optional]
   * @param {Object}   objects  The objects to merge together
   * @returns {Object}          Merged values of defaults and options
   */


  var extend = function extend() {
    // Variables
    var extended = {};
    var deep = false;
    var i = 0;
    var length = arguments.length; // Check if a deep merge

    if (Object.prototype.toString.call(arguments[0]) === '[object Boolean]') {
      deep = arguments[0];
      i++;
    } // Merge the object into the extended object


    var merge = function merge(obj) {
      for (var prop in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, prop)) {
          // If deep merge and property is an object, merge properties
          if (deep && Object.prototype.toString.call(obj[prop]) === '[object Object]') {
            extended[prop] = extend(true, extended[prop], obj[prop]);
          } else {
            extended[prop] = obj[prop];
          }
        }
      }
    }; // Loop through each object and conduct a merge


    for (; i < length; i++) {
      var obj = arguments[i];
      merge(obj);
    }

    return extended;
  };
  /**
   * Get the closest matching element up the DOM tree.
   * @private
   * @param  {Element} elem     Starting element
   * @param  {String}  selector Selector to match against
   * @return {Boolean|Element}  Returns null if not match found
   */


  var getClosest = function getClosest(elem, selector) {
    // Element.matches() polyfill
    if (!Element.prototype.matches) {
      Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function (s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i = matches.length;

        while (--i >= 0 && matches.item(i) !== this) {}

        return i > -1;
      };
    } // Get closest match


    for (; elem && elem !== document; elem = elem.parentNode) {
      if (elem.matches(selector)) return elem;
    }

    return null;
  };
  /**
   * Convert data-options attribute into an object of key/value pairs
   * @private
   * @param {String} options Link-specific options as a data attribute string
   * @returns {Object}
   */


  var getDataOptions = function getDataOptions(options) {
    return !options || !((typeof JSON === "undefined" ? "undefined" : _typeof(JSON)) === 'object' && typeof JSON.parse === 'function') ? {} : JSON.parse(options);
  };
  /**
   * Save form data to localStorage
   * @public
   * @param  {Element} btn Button that triggers form save
   * @param  {Element} form The form to save
   * @param  {Object} options
   * @param  {Event} event
   */


  formSaver.saveForm = function (btn, formID, options, event) {
    // Defaults and settings
    var overrides = getDataOptions(btn ? btn.getAttribute('data-options') : null);
    var settings = extend(settings || defaults, options || {}, overrides); // Merge user options with defaults
    // Selectors and variables

    var form = document.querySelector(formID);
    var formSaverID = 'formSaver-' + form.id;
    var formSaverData = {};
    var formFields = form.elements;
    var formStatus = form.querySelectorAll(settings.selectorStatus);
    /**
     * Convert field data into an array
     * @private
     * @param  {Element} field Form field to convert
     */

    var prepareField = function prepareField(field) {
      if (!getClosest(field, settings.selectorIgnore)) {
        if (field.type === undefined) return;

        if (field.type.toLowerCase() === 'radio' || field.type.toLowerCase() === 'checkbox') {
          if (field.checked === true) {
            formSaverData[field.name + field.value] = field.value;
          }
        } else if (field.type.toLowerCase() !== 'hidden' && field.type.toLowerCase() !== 'submit') {
          if (field.value && field.value !== '') {
            formSaverData[field.name] = field.value;
          }
        }
      }
    };
    /**
     * Display status message
     * @private
     * @param  {Element} status The element that displays the status message
     * @param  {String} saveMessage The message to display on save
     * @param  {String} saveClass The class to apply to the save message wrappers
     */


    var displayStatus = function displayStatus(status, saveMessage, saveClass) {
      status.innerHTML = saveClass === '' ? '<div>' + saveMessage + '</div>' : '<div class="' + saveClass + '">' + saveMessage + '</div>';
    }; // Add field data to array


    forEach(formFields, function (field) {
      prepareField(field);
    }); // Display save success message

    forEach(formStatus, function (status) {
      displayStatus(status, settings.saveMessage, settings.saveClass);
    }); // Save form data in localStorage

    localStorage.setItem(formSaverID, JSON.stringify(formSaverData));
    settings.callbackSave(btn, form); // Run callbacks after save
  };
  /**
   * Remove form data from localStorage
   * @public
   * @param  {Element} btn Button that triggers form delete
   * @param  {Element} form The form to remove from localStorage
   * @param  {Object} options
   * @param  {Event} event
   */


  formSaver.deleteForm = function (btn, formID, options, event) {
    // Defaults and settings
    var overrides = getDataOptions(btn ? btn.getAttribute('data-options') : {});
    var settings = extend(settings || defaults, options || {}, overrides); // Merge user options with defaults
    // Selectors and variables

    var form = document.querySelector(formID);
    var formSaverID = 'formSaver-' + form.id;
    var formStatus = form.querySelectorAll(settings.selectorStatus);
    var formMessage = settings.deleteClass === '' ? '<div>' + settings.deleteMessage + '</div>' : '<div class="' + settings.deleteClass + '">' + settings.deleteMessage + '</div>';
    /**
     * Display succes message
     * @private
     */

    var displayStatus = function displayStatus() {
      if (settings.deleteClear === true || settings.deleteClear === 'true') {
        sessionStorage.setItem(formSaverID + '-formSaverMessage', formMessage);
        location.reload(false);
      } else {
        forEach(formStatus, function (status) {
          status.innerHTML = formMessage;
        });
      }
    };

    localStorage.removeItem(formSaverID); // Remove form data

    displayStatus(); // Display delete success message

    settings.callbackDelete(btn, form); // Run callbacks after delete
  };
  /**
   * Load form data from localStorage
   * @public
   * @param  {Element} form The form to get data for
   * @param  {Object} options
   */


  formSaver.loadForm = function (form, options) {
    // Selectors and variables
    var settings = extend(settings || defaults, options || {}); // Merge user options with defaults

    var formSaverID = 'formSaver-' + form.id;
    var formSaverData = JSON.parse(localStorage.getItem(formSaverID));
    var formFields = form.elements;
    var formStatus = form.querySelectorAll(settings.selectorStatus);
    /**
     * Populate a field with localStorage data
     * @private
     * @param  {Element} field The field to get data form
     */

    var populateField = function populateField(field) {
      if (field.type === undefined) return;

      if (formSaverData) {
        if (field.type.toLowerCase() === 'radio' || field.type.toLowerCase() === 'checkbox') {
          if (formSaverData[field.name + field.value] === field.value) {
            field.checked = true;
          }
        } else if (field.type.toLowerCase() !== 'hidden' && field.type.toLowerCase() !== 'submit') {
          if (formSaverData[field.name]) {
            field.value = formSaverData[field.name];
          }
        }
      }
    };
    /**
     * Display success message
     * @param  {Element} status The element that displays the status message
     */


    var displayStatus = function displayStatus(status) {
      status.innerHTML = sessionStorage.getItem(formSaverID + '-formSaverMessage');
      sessionStorage.removeItem(formSaverID + '-formSaverMessage');
    }; // Populate form with data from localStorage


    forEach(formFields, function (field) {
      populateField(field);
    }); // If page was reloaded and delete success message exists, display it

    forEach(formStatus, function (status) {
      displayStatus(status);
    });
    settings.callbackLoad(form); // Run callbacks after load
  };
  /**
   * Handle events
   * @private
   */


  var eventHandler = function eventHandler(event) {
    var toggle = event.target;
    var save = getClosest(toggle, settings.selectorSave);
    var del = getClosest(toggle, settings.selectorDelete);

    if (save) {
      event.preventDefault();
      formSaver.saveForm(save, save.getAttribute('data-form-save'), settings);
    } else if (del) {
      event.preventDefault();
      formSaver.deleteForm(del, del.getAttribute('data-form-delete'), settings);
    }
  };
  /**
   * Destroy the current initialization.
   * @public
   */


  formSaver.destroy = function () {
    if (!settings) return;
    document.documentElement.classList.remove(settings.initClass);
    document.removeEventListener('click', eventHandler, false);
    settings = null;
    forms = null;
  };
  /**
   * Initialize Form Saver
   * @public
   * @param {Object} options User settings
   */


  formSaver.init = function (options) {
    // feature test
    if (!supports) return; // Destroy any existing initializations

    formSaver.destroy(); // Selectors and variables

    settings = extend(defaults, options || {}); // Merge user options with defaults

    forms = document.forms; // Add class to HTML element to activate conditional CSS

    document.documentElement.className += (document.documentElement.className ? ' ' : '') + settings.initClass; // Get saved form data on page load

    forEach(forms, function (form) {
      formSaver.loadForm(form, settings);
    }); // Listen for click events

    document.addEventListener('click', eventHandler, false);
  }; //
  // Public APIs
  //


  return formSaver;
});

/***/ }),

/***/ "./src/js/Components/FormValidation.js":
/*!*********************************************!*\
  !*** ./src/js/Components/FormValidation.js ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FormValidation; }
/* harmony export */ });
/* harmony import */ var _helpers_isValid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../helpers/isValid */ "./src/js/helpers/isValid.js");

function FormValidation(callback, target) {
  var currentFieldset = document.querySelector('fieldset.active');
  if (!currentFieldset) return;
  var inputs = currentFieldset.querySelectorAll('input[required]');
  var radios = currentFieldset.querySelectorAll('[type="radio"]');
  var inputsArr = Array.prototype.slice.call(inputs);
  var radiosArr = Array.prototype.slice.call(radios); // Define error messages

  var fieldErrors = {
    empty: 'The following field is required.',
    notchecked: 'Please make a selection'
  };

  if (inputs) {
    Array.prototype.forEach.call(inputs, function (input) {
      var errorMessage = document.querySelector("fieldset.active #".concat(input.name, "Error"));
      var globalErrorMessage = document.querySelector("fieldset.active #globalError"); // Get validity

      var validity = input.validity; // If valid, return null

      if (validity.valid) return; // Reset field state

      input.setCustomValidity('');
      errorMessage.innerHTML = '';
      input.removeAttribute('aria-describedby'); // Handle empty input

      if (validity.valueMissing) {
        input.setCustomValidity(fieldErrors.empty);
        errorMessage.innerHTML = input.validationMessage;
        errorMessage.classList.add('active');
        globalErrorMessage.classList.add('active');
        input.setAttribute('aria-describedby', "".concat(input.name, "Error"));
        history.scrollRestoration = 'manual';
        window.scrollTo(0, document.body.scrollHeight);
        return;
      } // Handle wrong format input


      if (!input.checkValidity()) {
        errorMessage.innerHTML = input.validationMessage;
        input.setAttribute('aria-describedby', "".concat(input.name, "Error"));
        return;
      }
    });
  } // if (radios) {
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


  if (inputsArr.every(_helpers_isValid__WEBPACK_IMPORTED_MODULE_0__["default"])) {
    callback(target);
  }
}

/***/ }),

/***/ "./src/js/Components/Getters.js":
/*!**************************************!*\
  !*** ./src/js/Components/Getters.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getIndex": function() { return /* binding */ getIndex; },
/* harmony export */   "getCurrentStep": function() { return /* binding */ getCurrentStep; },
/* harmony export */   "getCompleteStep": function() { return /* binding */ getCompleteStep; },
/* harmony export */   "getInputValue": function() { return /* binding */ getInputValue; },
/* harmony export */   "getListValues": function() { return /* binding */ getListValues; },
/* harmony export */   "getParentElems": function() { return /* binding */ getParentElems; },
/* harmony export */   "getStep": function() { return /* binding */ getStep; }
/* harmony export */ });
/**
 * @function getIndex
 * @param  {type} array {description}
 * @param  {type} elem  {description}
 * @return {type} {description}
 */
var getIndex = function getIndex(array, elem) {
  var index = array.findIndex(function (x) {
    return x.id === elem;
  });
  var currentField = array[index];
  return {
    index: index,
    currentField: currentField
  };
};
/**
 * @function getCurrentStep
 * @return {type} {description}
 */

var getCurrentStep = function getCurrentStep() {
  if (!localStorage) return;
  var stepId = localStorage.getItem("stepID");
  if (stepId) return JSON.parse(stepId);
  return [];
};
/**
 * @function getCompleteStep
 * @return {type} {description}
 */

var getCompleteStep = function getCompleteStep(stepId) {
  if (!localStorage) return;
  var completeStep = localStorage.getItem('step' + stepId);
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

var getInputValue = function getInputValue(array, id, value) {
  var output = "";

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

var getListValues = function getListValues(array, value, listType) {
  var output = "";
  var listObj = array.filter(function (element) {
    return element.id.includes(value);
  });

  for (var i = 0; i < listObj.length; ++i) {
    if (listType === "csv" && listObj.length !== i + 1) {
      output += "<span>".concat(listObj[i]["field"], ",</span> ");
    } else if (listType === "csv" && listObj.length === i + 1) {
      output += "<span>".concat(listObj[i]["field"], ".</span> ");
    } else if (listType === "csv-np" && listObj.length !== i + 1) {
      output += "<span>".concat(listObj[i]["field"], ",</span> ");
    } else if (listType === "csv-np" && listObj.length === i + 1) {
      output += "<span>".concat(listObj[i]["field"], "</span> ");
    } else {
      output += "<li><span>".concat(listObj[i]["field"], "</span></li>");
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

var getParentElems = function getParentElems(elem, parent, filter) {
  // Setup parents array
  var parents = []; // Get matching parent elements

  while (elem && elem !== document) {
    // If there's a parent and the element matches, break
    if (parent) {
      if (elem.matches(parent)) break;
    } // If there's a filter and the element matches, push it to the array


    if (filter) {
      if (elem.matches(filter)) {
        parents.push(elem);
      }

      continue;
    } // Otherwise, just add it to the array


    parents.push(elem);
    elem = elem.parentNode;
  }

  return parents;
};
var getStep = function getStep() {
  return localStorage.getItem("stepID");
};

/***/ }),

/***/ "./src/js/Components/Setters.js":
/*!**************************************!*\
  !*** ./src/js/Components/Setters.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "saveStep": function() { return /* binding */ saveStep; },
/* harmony export */   "saveCurrentPage": function() { return /* binding */ saveCurrentPage; },
/* harmony export */   "setComplete": function() { return /* binding */ setComplete; }
/* harmony export */ });
var saveStep = function saveStep(stepId) {
  if (!localStorage) return;
  localStorage.setItem("stepID", stepId);
};
var saveCurrentPage = function saveCurrentPage(path) {
  if (!localStorage) return;
  localStorage.setItem('page', path);
};
var setComplete = function setComplete(step, complete) {
  if (!localStorage) return;
  localStorage.setItem("step" + step + "-complete", complete);
};

/***/ }),

/***/ "./src/js/Components/ShowCurrentStep.js":
/*!**********************************************!*\
  !*** ./src/js/Components/ShowCurrentStep.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ShowCurrentStep; }
/* harmony export */ });
/* harmony import */ var _Getters__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Getters */ "./src/js/Components/Getters.js");
/* harmony import */ var _helpers_errorReset__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../helpers/errorReset */ "./src/js/helpers/errorReset.js");


function ShowCurrentStep(callback) {
  var currentStep = (0,_Getters__WEBPACK_IMPORTED_MODULE_0__.getStep)();
  var fieldsets = document.querySelectorAll('fieldset');
  var progressItems = document.querySelectorAll('.step');
  var currentFieldset = document.querySelector('#step' + currentStep);
  var currentProgress = document.querySelector('[data-step="' + currentStep + '"]');
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
    setTimeout(function () {
      currentFieldset.classList.add('active');
    }, 300);
  }

  document.documentElement.scrollTop = 0;
  (0,_helpers_errorReset__WEBPACK_IMPORTED_MODULE_1__["default"])();
}

/***/ }),

/***/ "./src/js/helpers/clickHandler.js":
/*!****************************************!*\
  !*** ./src/js/helpers/clickHandler.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ clickHandler; }
/* harmony export */ });
/* harmony import */ var _Components_FormAdvance__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/FormAdvance */ "./src/js/Components/FormAdvance.js");
/* harmony import */ var _Components_FormValidation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/FormValidation */ "./src/js/Components/FormValidation.js");


var parentNextBtn;
var nextButton;
var prevButton;

if (document.querySelector('.active')) {
  parentNextBtn = document.querySelector('.active');
  nextButton = parentNextBtn.querySelector('.next-button');
  prevButton = parentNextBtn.querySelector('.prev-button');
}

function clickHandler(event) {
  var target = event.target;
  var saveForm = target.closest('[data-save-form]');
  var print = target.closest('.print-plan');
  var restart = target.closest('.restart-assessment');

  if (target == saveForm || target == nextButton || target == prevButton) {
    event.preventDefault();

    if (saveForm) {
      (0,_Components_FormValidation__WEBPACK_IMPORTED_MODULE_1__["default"])(_Components_FormAdvance__WEBPACK_IMPORTED_MODULE_0__["default"], target);
    } else {
      (0,_Components_FormAdvance__WEBPACK_IMPORTED_MODULE_0__["default"])(target);
    }
  }

  if (target == print) {
    window.print();
  }

  if (target == restart) {
    localStorage.removeItem('formSaver-airportClassification');
    localStorage.removeItem('formSaver-classification-airport-hub');
    localStorage.removeItem('formSaver-classification-airport-urban');
    localStorage.removeItem('formSaver-classification-airport-suburban');
    localStorage.removeItem('formSaver-classification-airport-rural');
    window.location.href = '/';
  }
}

/***/ }),

/***/ "./src/js/helpers/errorReset.js":
/*!**************************************!*\
  !*** ./src/js/helpers/errorReset.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ errorReset; }
/* harmony export */ });
function errorReset() {
  //Gather all error message elements
  var globalErrorMessages = document.querySelectorAll(".global-error.active");
  var errorMessages = document.querySelectorAll(".error.active"); //Reset all errors before we advance to next step

  Array.prototype.forEach.call(globalErrorMessages, function (error) {
    error.classList.remove('active');
  });
  Array.prototype.forEach.call(errorMessages, function (error) {
    error.classList.remove('active');
  });
}

/***/ }),

/***/ "./src/js/helpers/inRange.js":
/*!***********************************!*\
  !*** ./src/js/helpers/inRange.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ inRange; }
/* harmony export */ });
function inRange(x, min, max) {
  return min <= x && x <= max;
}

/***/ }),

/***/ "./src/js/helpers/isValid.js":
/*!***********************************!*\
  !*** ./src/js/helpers/isValid.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isValid; }
/* harmony export */ });
function isValid(element) {
  return element.validity.valid;
}

/***/ }),

/***/ "./src/js/polyfills.js":
/*!*****************************!*\
  !*** ./src/js/polyfills.js ***!
  \*****************************/
/***/ (function() {

// Element.matches Polyfill
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
} // Element.closest Polyfill


if (!Element.prototype.closest) {
  Element.prototype.closest = function (s) {
    var el = this;

    do {
      if (Element.prototype.matches.call(el, s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);

    return null;
  };
}

if (!Element.prototype.toggleAttribute) {
  Element.prototype.toggleAttribute = function (name, force) {
    if (force !== void 0) force = !!force;

    if (this.hasAttribute(name)) {
      if (force) return true;
      this.removeAttribute(name);
      return false;
    }

    if (force === false) return false;
    this.setAttribute(name, "");
    return true;
  };
}

/***/ }),

/***/ "./node_modules/micromodal/dist/micromodal.es.js":
/*!*******************************************************!*\
  !*** ./node_modules/micromodal/dist/micromodal.es.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(n);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var MicroModal = function () {
  var FOCUSABLE_ELEMENTS = ['a[href]', 'area[href]', 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', 'select:not([disabled]):not([aria-hidden])', 'textarea:not([disabled]):not([aria-hidden])', 'button:not([disabled]):not([aria-hidden])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^="-"])'];

  var Modal = /*#__PURE__*/function () {
    function Modal(_ref) {
      var targetModal = _ref.targetModal,
          _ref$triggers = _ref.triggers,
          triggers = _ref$triggers === void 0 ? [] : _ref$triggers,
          _ref$onShow = _ref.onShow,
          onShow = _ref$onShow === void 0 ? function () {} : _ref$onShow,
          _ref$onClose = _ref.onClose,
          onClose = _ref$onClose === void 0 ? function () {} : _ref$onClose,
          _ref$openTrigger = _ref.openTrigger,
          openTrigger = _ref$openTrigger === void 0 ? 'data-micromodal-trigger' : _ref$openTrigger,
          _ref$closeTrigger = _ref.closeTrigger,
          closeTrigger = _ref$closeTrigger === void 0 ? 'data-micromodal-close' : _ref$closeTrigger,
          _ref$openClass = _ref.openClass,
          openClass = _ref$openClass === void 0 ? 'is-open' : _ref$openClass,
          _ref$disableScroll = _ref.disableScroll,
          disableScroll = _ref$disableScroll === void 0 ? false : _ref$disableScroll,
          _ref$disableFocus = _ref.disableFocus,
          disableFocus = _ref$disableFocus === void 0 ? false : _ref$disableFocus,
          _ref$awaitCloseAnimat = _ref.awaitCloseAnimation,
          awaitCloseAnimation = _ref$awaitCloseAnimat === void 0 ? false : _ref$awaitCloseAnimat,
          _ref$awaitOpenAnimati = _ref.awaitOpenAnimation,
          awaitOpenAnimation = _ref$awaitOpenAnimati === void 0 ? false : _ref$awaitOpenAnimati,
          _ref$debugMode = _ref.debugMode,
          debugMode = _ref$debugMode === void 0 ? false : _ref$debugMode;

      _classCallCheck(this, Modal); // Save a reference of the modal


      this.modal = document.getElementById(targetModal); // Save a reference to the passed config

      this.config = {
        debugMode: debugMode,
        disableScroll: disableScroll,
        openTrigger: openTrigger,
        closeTrigger: closeTrigger,
        openClass: openClass,
        onShow: onShow,
        onClose: onClose,
        awaitCloseAnimation: awaitCloseAnimation,
        awaitOpenAnimation: awaitOpenAnimation,
        disableFocus: disableFocus
      }; // Register click events only if pre binding eventListeners

      if (triggers.length > 0) this.registerTriggers.apply(this, _toConsumableArray(triggers)); // pre bind functions for event listeners

      this.onClick = this.onClick.bind(this);
      this.onKeydown = this.onKeydown.bind(this);
    }
    /**
     * Loops through all openTriggers and binds click event
     * @param  {array} triggers [Array of node elements]
     * @return {void}
     */


    _createClass(Modal, [{
      key: "registerTriggers",
      value: function registerTriggers() {
        var _this = this;

        for (var _len = arguments.length, triggers = new Array(_len), _key = 0; _key < _len; _key++) {
          triggers[_key] = arguments[_key];
        }

        triggers.filter(Boolean).forEach(function (trigger) {
          trigger.addEventListener('click', function (event) {
            return _this.showModal(event);
          });
        });
      }
    }, {
      key: "showModal",
      value: function showModal() {
        var _this2 = this;

        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        this.activeElement = document.activeElement;
        this.modal.setAttribute('aria-hidden', 'false');
        this.modal.classList.add(this.config.openClass);
        this.scrollBehaviour('disable');
        this.addEventListeners();

        if (this.config.awaitOpenAnimation) {
          var handler = function handler() {
            _this2.modal.removeEventListener('animationend', handler, false);

            _this2.setFocusToFirstNode();
          };

          this.modal.addEventListener('animationend', handler, false);
        } else {
          this.setFocusToFirstNode();
        }

        this.config.onShow(this.modal, this.activeElement, event);
      }
    }, {
      key: "closeModal",
      value: function closeModal() {
        var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
        var modal = this.modal;
        this.modal.setAttribute('aria-hidden', 'true');
        this.removeEventListeners();
        this.scrollBehaviour('enable');

        if (this.activeElement && this.activeElement.focus) {
          this.activeElement.focus();
        }

        this.config.onClose(this.modal, this.activeElement, event);

        if (this.config.awaitCloseAnimation) {
          var openClass = this.config.openClass; // <- old school ftw

          this.modal.addEventListener('animationend', function handler() {
            modal.classList.remove(openClass);
            modal.removeEventListener('animationend', handler, false);
          }, false);
        } else {
          modal.classList.remove(this.config.openClass);
        }
      }
    }, {
      key: "closeModalById",
      value: function closeModalById(targetModal) {
        this.modal = document.getElementById(targetModal);
        if (this.modal) this.closeModal();
      }
    }, {
      key: "scrollBehaviour",
      value: function scrollBehaviour(toggle) {
        if (!this.config.disableScroll) return;
        var body = document.querySelector('body');

        switch (toggle) {
          case 'enable':
            Object.assign(body.style, {
              overflow: ''
            });
            break;

          case 'disable':
            Object.assign(body.style, {
              overflow: 'hidden'
            });
            break;
        }
      }
    }, {
      key: "addEventListeners",
      value: function addEventListeners() {
        this.modal.addEventListener('touchstart', this.onClick);
        this.modal.addEventListener('click', this.onClick);
        document.addEventListener('keydown', this.onKeydown);
      }
    }, {
      key: "removeEventListeners",
      value: function removeEventListeners() {
        this.modal.removeEventListener('touchstart', this.onClick);
        this.modal.removeEventListener('click', this.onClick);
        document.removeEventListener('keydown', this.onKeydown);
      }
    }, {
      key: "onClick",
      value: function onClick(event) {
        if (event.target.hasAttribute(this.config.closeTrigger)) {
          this.closeModal(event);
        }
      }
    }, {
      key: "onKeydown",
      value: function onKeydown(event) {
        if (event.keyCode === 27) this.closeModal(event); // esc

        if (event.keyCode === 9) this.retainFocus(event); // tab
      }
    }, {
      key: "getFocusableNodes",
      value: function getFocusableNodes() {
        var nodes = this.modal.querySelectorAll(FOCUSABLE_ELEMENTS);
        return Array.apply(void 0, _toConsumableArray(nodes));
      }
      /**
       * Tries to set focus on a node which is not a close trigger
       * if no other nodes exist then focuses on first close trigger
       */

    }, {
      key: "setFocusToFirstNode",
      value: function setFocusToFirstNode() {
        var _this3 = this;

        if (this.config.disableFocus) return;
        var focusableNodes = this.getFocusableNodes(); // no focusable nodes

        if (focusableNodes.length === 0) return; // remove nodes on whose click, the modal closes
        // could not think of a better name :(

        var nodesWhichAreNotCloseTargets = focusableNodes.filter(function (node) {
          return !node.hasAttribute(_this3.config.closeTrigger);
        });
        if (nodesWhichAreNotCloseTargets.length > 0) nodesWhichAreNotCloseTargets[0].focus();
        if (nodesWhichAreNotCloseTargets.length === 0) focusableNodes[0].focus();
      }
    }, {
      key: "retainFocus",
      value: function retainFocus(event) {
        var focusableNodes = this.getFocusableNodes(); // no focusable nodes

        if (focusableNodes.length === 0) return;
        /**
         * Filters nodes which are hidden to prevent
         * focus leak outside modal
         */

        focusableNodes = focusableNodes.filter(function (node) {
          return node.offsetParent !== null;
        }); // if disableFocus is true

        if (!this.modal.contains(document.activeElement)) {
          focusableNodes[0].focus();
        } else {
          var focusedItemIndex = focusableNodes.indexOf(document.activeElement);

          if (event.shiftKey && focusedItemIndex === 0) {
            focusableNodes[focusableNodes.length - 1].focus();
            event.preventDefault();
          }

          if (!event.shiftKey && focusableNodes.length > 0 && focusedItemIndex === focusableNodes.length - 1) {
            focusableNodes[0].focus();
            event.preventDefault();
          }
        }
      }
    }]);

    return Modal;
  }();
  /**
   * Modal prototype ends.
   * Here on code is responsible for detecting and
   * auto binding event handlers on modal triggers
   */
  // Keep a reference to the opened modal


  var activeModal = null;
  /**
   * Generates an associative array of modals and it's
   * respective triggers
   * @param  {array} triggers     An array of all triggers
   * @param  {string} triggerAttr The data-attribute which triggers the module
   * @return {array}
   */

  var generateTriggerMap = function generateTriggerMap(triggers, triggerAttr) {
    var triggerMap = [];
    triggers.forEach(function (trigger) {
      var targetModal = trigger.attributes[triggerAttr].value;
      if (triggerMap[targetModal] === undefined) triggerMap[targetModal] = [];
      triggerMap[targetModal].push(trigger);
    });
    return triggerMap;
  };
  /**
   * Validates whether a modal of the given id exists
   * in the DOM
   * @param  {number} id  The id of the modal
   * @return {boolean}
   */


  var validateModalPresence = function validateModalPresence(id) {
    if (!document.getElementById(id)) {
      console.warn("MicroModal: \u2757Seems like you have missed %c'".concat(id, "'"), 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', 'ID somewhere in your code. Refer example below to resolve it.');
      console.warn("%cExample:", 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', "<div class=\"modal\" id=\"".concat(id, "\"></div>"));
      return false;
    }
  };
  /**
   * Validates if there are modal triggers present
   * in the DOM
   * @param  {array} triggers An array of data-triggers
   * @return {boolean}
   */


  var validateTriggerPresence = function validateTriggerPresence(triggers) {
    if (triggers.length <= 0) {
      console.warn("MicroModal: \u2757Please specify at least one %c'micromodal-trigger'", 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', 'data attribute.');
      console.warn("%cExample:", 'background-color: #f8f9fa;color: #50596c;font-weight: bold;', "<a href=\"#\" data-micromodal-trigger=\"my-modal\"></a>");
      return false;
    }
  };
  /**
   * Checks if triggers and their corresponding modals
   * are present in the DOM
   * @param  {array} triggers   Array of DOM nodes which have data-triggers
   * @param  {array} triggerMap Associative array of modals and their triggers
   * @return {boolean}
   */


  var validateArgs = function validateArgs(triggers, triggerMap) {
    validateTriggerPresence(triggers);
    if (!triggerMap) return true;

    for (var id in triggerMap) {
      validateModalPresence(id);
    }

    return true;
  };
  /**
   * Binds click handlers to all modal triggers
   * @param  {object} config [description]
   * @return void
   */


  var init = function init(config) {
    // Create an config object with default openTrigger
    var options = Object.assign({}, {
      openTrigger: 'data-micromodal-trigger'
    }, config); // Collects all the nodes with the trigger

    var triggers = _toConsumableArray(document.querySelectorAll("[".concat(options.openTrigger, "]"))); // Makes a mappings of modals with their trigger nodes


    var triggerMap = generateTriggerMap(triggers, options.openTrigger); // Checks if modals and triggers exist in dom

    if (options.debugMode === true && validateArgs(triggers, triggerMap) === false) return; // For every target modal creates a new instance

    for (var key in triggerMap) {
      var value = triggerMap[key];
      options.targetModal = key;
      options.triggers = _toConsumableArray(value);
      activeModal = new Modal(options); // eslint-disable-line no-new
    }
  };
  /**
   * Shows a particular modal
   * @param  {string} targetModal [The id of the modal to display]
   * @param  {object} config [The configuration object to pass]
   * @return {void}
   */


  var show = function show(targetModal, config) {
    var options = config || {};
    options.targetModal = targetModal; // Checks if modals and triggers exist in dom

    if (options.debugMode === true && validateModalPresence(targetModal) === false) return; // clear events in case previous modal wasn't close

    if (activeModal) activeModal.removeEventListeners(); // stores reference to active modal

    activeModal = new Modal(options); // eslint-disable-line no-new

    activeModal.showModal();
  };
  /**
   * Closes the active modal
   * @param  {string} targetModal [The id of the modal to close]
   * @return {void}
   */


  var close = function close(targetModal) {
    targetModal ? activeModal.closeModalById(targetModal) : activeModal.closeModal();
  };

  return {
    init: init,
    show: show,
    close: close
  };
}();

window.MicroModal = MicroModal;
/* harmony default export */ __webpack_exports__["default"] = (MicroModal);

/***/ }),

/***/ "./node_modules/what-input/dist/what-input.js":
/*!****************************************************!*\
  !*** ./node_modules/what-input/dist/what-input.js ***!
  \****************************************************/
/***/ (function(module) {

/**
 * what-input - A global utility for tracking the current input method (mouse, keyboard or touch).
 * @version v5.2.10
 * @link https://github.com/ten1seven/what-input
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
  if (true) module.exports = factory();else {}
})(this, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/
      // The require function

      /******/

      function __nested_webpack_require_794__(moduleId) {
        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId])
          /******/
          return installedModules[moduleId].exports;
        /******/
        // Create a new module (and put it into the cache)

        /******/

        var module = installedModules[moduleId] = {
          /******/
          exports: {},

          /******/
          id: moduleId,

          /******/
          loaded: false
          /******/

        };
        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_794__);
        /******/
        // Flag the module as loaded

        /******/

        module.loaded = true;
        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __nested_webpack_require_794__.m = modules;
      /******/
      // expose the module cache

      /******/

      __nested_webpack_require_794__.c = installedModules;
      /******/
      // __webpack_public_path__

      /******/

      __nested_webpack_require_794__.p = "";
      /******/
      // Load entry module and return exports

      /******/

      return __nested_webpack_require_794__(0);
      /******/
    }([
      /* 0 */

      /***/

      /******/
    function (module, exports) {
      'use strict';

      module.exports = function () {
        /*
         * bail out if there is no document or window
         * (i.e. in a node/non-DOM environment)
         *
         * Return a stubbed API instead
         */
        if (typeof document === 'undefined' || typeof window === 'undefined') {
          return {
            // always return "initial" because no interaction will ever be detected
            ask: function ask() {
              return 'initial';
            },
            // always return null
            element: function element() {
              return null;
            },
            // no-op
            ignoreKeys: function ignoreKeys() {},
            // no-op
            specificKeys: function specificKeys() {},
            // no-op
            registerOnChange: function registerOnChange() {},
            // no-op
            unRegisterOnChange: function unRegisterOnChange() {}
          };
        }
        /*
         * variables
         */
        // cache document.documentElement


        var docElem = document.documentElement; // currently focused dom element

        var currentElement = null; // last used input type

        var currentInput = 'initial'; // last used input intent

        var currentIntent = currentInput; // UNIX timestamp of current event

        var currentTimestamp = Date.now(); // check for a `data-whatpersist` attribute on either the `html` or `body` elements, defaults to `true`

        var shouldPersist = 'false'; // form input types

        var formInputs = ['button', 'input', 'select', 'textarea']; // empty array for holding callback functions

        var functionList = []; // list of modifier keys commonly used with the mouse and
        // can be safely ignored to prevent false keyboard detection

        var ignoreMap = [16, // shift
        17, // control
        18, // alt
        91, // Windows key / left Apple cmd
        93 // Windows menu / right Apple cmd
        ];
        var specificMap = []; // mapping of events to input types

        var inputMap = {
          keydown: 'keyboard',
          keyup: 'keyboard',
          mousedown: 'mouse',
          mousemove: 'mouse',
          MSPointerDown: 'pointer',
          MSPointerMove: 'pointer',
          pointerdown: 'pointer',
          pointermove: 'pointer',
          touchstart: 'touch',
          touchend: 'touch' // boolean: true if the page is being scrolled

        };
        var isScrolling = false; // store current mouse position

        var mousePos = {
          x: null,
          y: null // map of IE 10 pointer events

        };
        var pointerMap = {
          2: 'touch',
          3: 'touch',
          // treat pen like touch
          4: 'mouse' // check support for passive event listeners

        };
        var supportsPassive = false;

        try {
          var opts = Object.defineProperty({}, 'passive', {
            get: function get() {
              supportsPassive = true;
            }
          });
          window.addEventListener('test', null, opts);
        } catch (e) {} // fail silently

        /*
         * set up
         */


        var setUp = function setUp() {
          // add correct mouse wheel event mapping to `inputMap`
          inputMap[detectWheel()] = 'mouse';
          addListeners();
        };
        /*
         * events
         */


        var addListeners = function addListeners() {
          // `pointermove`, `MSPointerMove`, `mousemove` and mouse wheel event binding
          // can only demonstrate potential, but not actual, interaction
          // and are treated separately
          var options = supportsPassive ? {
            passive: true
          } : false;
          document.addEventListener('DOMContentLoaded', setPersist); // pointer events (mouse, pen, touch)

          if (window.PointerEvent) {
            window.addEventListener('pointerdown', setInput);
            window.addEventListener('pointermove', setIntent);
          } else if (window.MSPointerEvent) {
            window.addEventListener('MSPointerDown', setInput);
            window.addEventListener('MSPointerMove', setIntent);
          } else {
            // mouse events
            window.addEventListener('mousedown', setInput);
            window.addEventListener('mousemove', setIntent); // touch events

            if ('ontouchstart' in window) {
              window.addEventListener('touchstart', setInput, options);
              window.addEventListener('touchend', setInput);
            }
          } // mouse wheel


          window.addEventListener(detectWheel(), setIntent, options); // keyboard events

          window.addEventListener('keydown', setInput);
          window.addEventListener('keyup', setInput); // focus events

          window.addEventListener('focusin', setElement);
          window.addEventListener('focusout', clearElement);
        }; // checks if input persistence should happen and
        // get saved state from session storage if true (defaults to `false`)


        var setPersist = function setPersist() {
          shouldPersist = !(docElem.getAttribute('data-whatpersist') || document.body.getAttribute('data-whatpersist') === 'false');

          if (shouldPersist) {
            // check for session variables and use if available
            try {
              if (window.sessionStorage.getItem('what-input')) {
                currentInput = window.sessionStorage.getItem('what-input');
              }

              if (window.sessionStorage.getItem('what-intent')) {
                currentIntent = window.sessionStorage.getItem('what-intent');
              }
            } catch (e) {// fail silently
            }
          } // always run these so at least `initial` state is set


          doUpdate('input');
          doUpdate('intent');
        }; // checks conditions before updating new input


        var setInput = function setInput(event) {
          var eventKey = event.which;
          var value = inputMap[event.type];

          if (value === 'pointer') {
            value = pointerType(event);
          }

          var ignoreMatch = !specificMap.length && ignoreMap.indexOf(eventKey) === -1;
          var specificMatch = specificMap.length && specificMap.indexOf(eventKey) !== -1;
          var shouldUpdate = value === 'keyboard' && eventKey && (ignoreMatch || specificMatch) || value === 'mouse' || value === 'touch'; // prevent touch detection from being overridden by event execution order

          if (validateTouch(value)) {
            shouldUpdate = false;
          }

          if (shouldUpdate && currentInput !== value) {
            currentInput = value;
            persistInput('input', currentInput);
            doUpdate('input');
          }

          if (shouldUpdate && currentIntent !== value) {
            // preserve intent for keyboard interaction with form fields
            var activeElem = document.activeElement;
            var notFormInput = activeElem && activeElem.nodeName && (formInputs.indexOf(activeElem.nodeName.toLowerCase()) === -1 || activeElem.nodeName.toLowerCase() === 'button' && !checkClosest(activeElem, 'form'));

            if (notFormInput) {
              currentIntent = value;
              persistInput('intent', currentIntent);
              doUpdate('intent');
            }
          }
        }; // updates the doc and `inputTypes` array with new input


        var doUpdate = function doUpdate(which) {
          docElem.setAttribute('data-what' + which, which === 'input' ? currentInput : currentIntent);
          fireFunctions(which);
        }; // updates input intent for `mousemove` and `pointermove`


        var setIntent = function setIntent(event) {
          var value = inputMap[event.type];

          if (value === 'pointer') {
            value = pointerType(event);
          } // test to see if `mousemove` happened relative to the screen to detect scrolling versus mousemove


          detectScrolling(event); // only execute if scrolling isn't happening

          if ((!isScrolling && !validateTouch(value) || isScrolling && event.type === 'wheel' || event.type === 'mousewheel' || event.type === 'DOMMouseScroll') && currentIntent !== value) {
            currentIntent = value;
            persistInput('intent', currentIntent);
            doUpdate('intent');
          }
        };

        var setElement = function setElement(event) {
          if (!event.target.nodeName) {
            // If nodeName is undefined, clear the element
            // This can happen if click inside an <svg> element.
            clearElement();
            return;
          }

          currentElement = event.target.nodeName.toLowerCase();
          docElem.setAttribute('data-whatelement', currentElement);

          if (event.target.classList && event.target.classList.length) {
            docElem.setAttribute('data-whatclasses', event.target.classList.toString().replace(' ', ','));
          }
        };

        var clearElement = function clearElement() {
          currentElement = null;
          docElem.removeAttribute('data-whatelement');
          docElem.removeAttribute('data-whatclasses');
        };

        var persistInput = function persistInput(which, value) {
          if (shouldPersist) {
            try {
              window.sessionStorage.setItem('what-' + which, value);
            } catch (e) {// fail silently
            }
          }
        };
        /*
         * utilities
         */


        var pointerType = function pointerType(event) {
          if (typeof event.pointerType === 'number') {
            return pointerMap[event.pointerType];
          } else {
            // treat pen like touch
            return event.pointerType === 'pen' ? 'touch' : event.pointerType;
          }
        }; // prevent touch detection from being overridden by event execution order


        var validateTouch = function validateTouch(value) {
          var timestamp = Date.now();
          var touchIsValid = value === 'mouse' && currentInput === 'touch' && timestamp - currentTimestamp < 200;
          currentTimestamp = timestamp;
          return touchIsValid;
        }; // detect version of mouse wheel event to use
        // via https://developer.mozilla.org/en-US/docs/Web/API/Element/wheel_event


        var detectWheel = function detectWheel() {
          var wheelType = null; // Modern browsers support "wheel"

          if ('onwheel' in document.createElement('div')) {
            wheelType = 'wheel';
          } else {
            // Webkit and IE support at least "mousewheel"
            // or assume that remaining browsers are older Firefox
            wheelType = document.onmousewheel !== undefined ? 'mousewheel' : 'DOMMouseScroll';
          }

          return wheelType;
        }; // runs callback functions


        var fireFunctions = function fireFunctions(type) {
          for (var i = 0, len = functionList.length; i < len; i++) {
            if (functionList[i].type === type) {
              functionList[i].fn.call(undefined, type === 'input' ? currentInput : currentIntent);
            }
          }
        }; // finds matching element in an object


        var objPos = function objPos(match) {
          for (var i = 0, len = functionList.length; i < len; i++) {
            if (functionList[i].fn === match) {
              return i;
            }
          }
        };

        var detectScrolling = function detectScrolling(event) {
          if (mousePos.x !== event.screenX || mousePos.y !== event.screenY) {
            isScrolling = false;
            mousePos.x = event.screenX;
            mousePos.y = event.screenY;
          } else {
            isScrolling = true;
          }
        }; // manual version of `closest()`


        var checkClosest = function checkClosest(elem, tag) {
          var ElementPrototype = window.Element.prototype;

          if (!ElementPrototype.matches) {
            ElementPrototype.matches = ElementPrototype.msMatchesSelector || ElementPrototype.webkitMatchesSelector;
          }

          if (!ElementPrototype.closest) {
            do {
              if (elem.matches(tag)) {
                return elem;
              }

              elem = elem.parentElement || elem.parentNode;
            } while (elem !== null && elem.nodeType === 1);

            return null;
          } else {
            return elem.closest(tag);
          }
        };
        /*
         * init
         */
        // don't start script unless browser cuts the mustard
        // (also passes if polyfills are used)


        if ('addEventListener' in window && Array.prototype.indexOf) {
          setUp();
        }
        /*
         * api
         */


        return {
          // returns string: the current input type
          // opt: 'intent'|'input'
          // 'input' (default): returns the same value as the `data-whatinput` attribute
          // 'intent': includes `data-whatintent` value if it's different than `data-whatinput`
          ask: function ask(opt) {
            return opt === 'intent' ? currentIntent : currentInput;
          },
          // returns string: the currently focused element or null
          element: function element() {
            return currentElement;
          },
          // overwrites ignored keys with provided array
          ignoreKeys: function ignoreKeys(arr) {
            ignoreMap = arr;
          },
          // overwrites specific char keys to update on
          specificKeys: function specificKeys(arr) {
            specificMap = arr;
          },
          // attach functions to input and intent "events"
          // funct: function to fire on change
          // eventType: 'input'|'intent'
          registerOnChange: function registerOnChange(fn, eventType) {
            functionList.push({
              fn: fn,
              type: eventType || 'input'
            });
          },
          unRegisterOnChange: function unRegisterOnChange(fn) {
            var position = objPos(fn);

            if (position || position === 0) {
              functionList.splice(position, 1);
            }
          },
          clearStorage: function clearStorage() {
            window.sessionStorage.clear();
          }
        };
      }();
      /***/

    }])
  );
});

;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills.js */ "./src/js/polyfills.js");
/* harmony import */ var _polyfills_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfills_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var what_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! what-input */ "./node_modules/what-input/dist/what-input.js");
/* harmony import */ var what_input__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(what_input__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! micromodal */ "./node_modules/micromodal/dist/micromodal.es.js");
/* harmony import */ var _Components_DropdownNav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Components/DropdownNav */ "./src/js/Components/DropdownNav.js");
/* harmony import */ var _Components_FormSaver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Components/FormSaver */ "./src/js/Components/FormSaver.js");
/* harmony import */ var _Components_FormSaver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_Components_FormSaver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _helpers_clickHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/clickHandler */ "./src/js/helpers/clickHandler.js");
/* harmony import */ var _Components_ShowCurrentStep__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Components/ShowCurrentStep */ "./src/js/Components/ShowCurrentStep.js");
/* harmony import */ var _Components_AssessmentSummary__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Components/AssessmentSummary */ "./src/js/Components/AssessmentSummary.js");
// import SuperSimpleAccordions from './Components/Accordion.js';
// import ShowHide from './Components/ShowHide.js';
// import PageTabs from './Components/Tabs';
// import { flipListen } from './Components/FlipCards';
// import { dataListen, initElements } from './Components/ToggleData';
// import ModalVideo from 'modal-video';
// import ExternaLinks from './Components/ExternalLinks';
// import Swiper, { Navigation, A11y, Keyboard } from 'swiper';
// Swiper.use([Navigation, A11y, Keyboard]);







 // Main Menu

if (document.querySelector("[data-nav='dropdown']")) {
  (0,_Components_DropdownNav__WEBPACK_IMPORTED_MODULE_3__.menuListen)();
} // Fullscreen Navigation setup
// if (document.querySelector("[data-nav='fullscreen']")) {
//   SidebarToggle.setup();
// }


document.addEventListener('DOMContentLoaded', function () {
  // If we are on the self assessment page/s show the current step
  // adding active class to current step
  if (document.querySelector('#selfAssessment')) {
    (0,_Components_ShowCurrentStep__WEBPACK_IMPORTED_MODULE_6__["default"])();
  } // If we are on the summary page populate and calculate score


  if (document.querySelector('#summaryReview')) {
    (0,_Components_AssessmentSummary__WEBPACK_IMPORTED_MODULE_7__["default"])();
  }

  if (document.querySelector('.micromodal-slide')) {
    micromodal__WEBPACK_IMPORTED_MODULE_2__["default"].init();
  }

  _Components_FormSaver__WEBPACK_IMPORTED_MODULE_4___default().init();
  document.addEventListener('click', _helpers_clickHandler__WEBPACK_IMPORTED_MODULE_5__["default"], false); // if (document.querySelector('.accordion')) {
  //   const accordions = new SuperSimpleAccordions('.accordion', {
  //     iconsClass: 'arrow',
  //     iconsSymbol: 'arrow', // arrow or plus-minus
  //     iconsPosition: 'right', // right or left
  //     expandAllBtn: true,
  //   });
  // }
  // if (document.querySelector("[target='_blank']")) {
  //   ExternaLinks('[target="_blank"]');
  // }
  // // Home page tabs setup
  // if (document.querySelector('.tabbed')) {
  //   PageTabs();
  // }
  // // Find show hide elements, if found run setup
  // if (document.querySelector('.show-hide__toggle')) {
  //   ShowHide.setElelements();
  // }
  // // Find cards that flip
  // if (document.querySelector('.details-card')) {
  //   flipListen();
  // }
  // // Find data-year, if found run setup
  // if (document.querySelector('[data-year]')) {
  //   initElements();
  //   dataListen();
  // }
  //Swiper setup for home page
  // if (document.querySelector('.swiper')) {
  //   let videoSwiper = new Swiper('.swiper', {
  //     slidesPerView: 1,
  //     keyboard: {
  //       enabled: true,
  //       onlyInViewport: false,
  //     },
  //     navigation: {
  //       nextEl: '.swiper-button-next',
  //       prevEl: '.swiper-button-prev',
  //     },
  //     a11y: {
  //       firstSlideMessage: 'This is the first slide',
  //       lastSlideMessage: 'This is the last slide',
  //       prevSlideMessage: 'Previous slide',
  //       nextSlideMessage: 'Next slide',
  //       itemRoleDescriptionMessage: 'Slides',
  //       containerMessage: 'Image slidehow',
  //       containerRoleDescriptionMessage: 'slideshow',
  //     },
  //   });
  //   videoSwiper.on('init', function () {
  //     videoSwiper.slides.forEach(function (slide) {
  //       slide.setAttribute('tabindex', '0');
  //     });
  //     videoSwiper.slides.slice(1).forEach(function (slide) {
  //       slide.setAttribute('tabindex', '-1');
  //     });
  //   });
  //   videoSwiper.init();
  //   videoSwiper.on('slideChange', function () {
  //     videoSwiper.slides.forEach(function (slide) {
  //       slide.setAttribute('tabindex', '-1');
  //     });
  //     videoSwiper.slides[videoSwiper.activeIndex].setAttribute('tabindex', '0');
  //   });
  //   const clickHandler = function (event) {
  //     if (!event.target.closest('[data-hash]')) return;
  //     event.preventDefault();
  //     StopVideos();
  //     let element = event.target.closest('[data-hash]');
  //     let whichSlide = element.getAttribute('data-hash');
  //     videoSwiper.slideTo(whichSlide);
  //   };
  //   document.addEventListener('click', clickHandler, false);
  // }
  // var modalTriggers = document.querySelectorAll(
  //   '[data-video-id],[data-youtube-id]'
  // );
  // for (var i = 0; i < modalTriggers.length; i++) {
  //   modalTriggers[i].addEventListener('click', function (e) {
  //     e.preventDefault();
  //   });
  // }
  // new ModalVideo('[data-video-id]', {
  //   vimeo: {
  //     byline: false,
  //     title: false,
  //   },
  // });
});
}();
/******/ })()
;
//# sourceMappingURL=main.js.map