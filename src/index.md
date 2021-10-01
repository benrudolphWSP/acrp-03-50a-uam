---
layout: home.html
title: ACRP 03-50A AAM Toolkit
path: home
hero: true
eleventyNavigation:
  key: Home
herotitle: Advanced Air Mobility (AAM) Airport Assessment Tool
herocolor: bg-primary
---
<div class="home-content__left">
  
 This assessment is designed to provide airport practitioners (i) an understanding of their readiness to prepare for Advanced Air Mobility (AAM); and, (ii) resources in the guidebook that will provide the greatest benefit for advancing capability maturity. Once completed, the assessment provides a readiness level and recommendation for a Go/No-go decision.
  
  ## The Go/No-Go Decision
  
The assessment is a straightforward process of systematically evaluating the airport’s capabilities concerning three key areas: awareness, readiness, and infrastructure.
  
The four readiness levels will help determine a path forward for AAM integration.
  
  <ol class="flex justify-between ml-0 text-center">
      <li class=" list-none m-0 border-t-8 border-error flex-1 pt-3 font-bold text-lg">1. No-go</li>
      <li class=" list-none m-0 border-t-8 border-orange flex-1 pt-3 font-bold text-lg">2. Not-now</li>
      <li class=" list-none m-0 border-t-8 border-yellow flex-1 pt-3 font-bold text-lg">3. Slow-go</li>
      <li class=" list-none m-0 border-t-8 border-green flex-1 pt-3 font-bold text-lg">4. Go-now</li>
  </ol>
  
Understanding the airport’s readiness level can assist airport practitioners in identifying focus areas for preparation. The value of the level is not the focus of the assessment; rather, gaining an understanding of agency capability and potential gaps relative to the criteria. To assist filling these gaps, the assessment also provides references to specific guidebook sections.
  
</div>
<form id="airportClassification" class="home-content__right">
 <fieldset class="active">
   <legend>Airport Classification <span class="text-base text-dark">(Select One)</span></legend>
   <div class="error" id="classificationsError"></div>
   <div class="space-y-4">
     <div class="custom-group">
        <input id="classHub" class="custom-radio" type="radio" value="hub" name="classifications" required>
       <label for="classHub" class="custom-label home-radios">
         Hub
       </label>
     </div>
     <div class="custom-group">
        <input id="classUrban" class="custom-radio" type="radio" value="urban" name="classifications">
       <label for="classUrban" class="custom-label home-radios">
         Reliever/General Aviation Urban
       </label>
     </div>
     <div class="custom-group">
        <input id="classSuburban" class="custom-radio" type="radio" value="suburban" name="classifications">
       <label for="classSuburban" class="custom-label home-radios">
         Reliever/General Aviation Suburban
       </label>
     </div>
     <div class="custom-group">
        <input id="classRural" class="custom-radio" type="radio" value="rural" name="classifications">
       <label for="classRural" class="custom-label home-radios">
         General Aviation Rural
       </label>
     </div>
   </div>
     <button data-href="/classifications" type="submit" class="button next-button mr-auto mt-10" id="saveForm" data-save-form="airportClassification" data-step="1">
       Start Assessment
     </button>
 </fieldset>
</form>