---
layout: child.html
title: Get Engaged
path: get-engaged
eleventyNavigation:
  key: Get Engaged
  parent: Home
permalink: get-engaged/default.aspx
---

<form id="initialInfo" class="ie-hide">
    <fieldset class="active">
      <legend class="sr-only">Basic information to get started with assessment.</legend>
          <label class="block font-semibold my-4">Name
            <div class="error" id="nameError"></div>
            <input id="name" name="name" type="text" required>
          </label>
          <label class="block font-semibold my-4">Email
            <div class="error" id="emailError"></div>
            <input id="email" name="email" type="text" maxlength="100" required>
          </label>
         <button data-href="/self-assessment" type="submit" class="button ml-auto bg-accent group" id="saveForm" data-save-form="initialInfo" data-step="1">
          Submit
          <svg class="icon icon-arrow">
            <use href="/images/symbol-defs.svg#icon-arrow"></use>
          </svg>
        </button>
      </div>
    </fieldset>
  </form>
