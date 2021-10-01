---
layout: summary.html
title: Results Summary
path: summary
eleventyNavigation:
key: Summary
parent: Home
---

<div class="flex justify-end pb-6 border-b-2 border-light active">
  <a href="#" data-href="/classifications" class="prev-button">Modify Assessment</a>
  <div class="flex justify-end">
    <button data-micromodal-trigger="modal-1" class="button restart-button mr-3">Restart Assessment</button>
    <button class="button print-plan ml-0">Print</button>
  </div>
</div>

<div class="print-area my-10 max-w-6xl mx-auto">

  <h2 class="page-title action-plan h3 print-only">ACRP 03-50A Urban Air Mobility (UAM) Airport Assessment Tool</h2>
  <h3 class="page-title action-plan h1">Airport Readiness Level</h3>
  <p>Thank you for completing the assessment. Based on the inputs provided, the assessment level is:</p>

  <div id="recommendations" class="action-items"></div>

  <div id="summaryReview"></div>

</div>

<div class="modal micromodal-slide" id="modal-1" aria-hidden="true">
  <div class="modal__overlay" tabindex="-1" data-micromodal-close>
    <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
      <header class="modal__header">
        <h2 id="modal-1-title">
          Restart Assessment
        </h2>
        <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
      </header>
      <main class="modal__content" id="modal-1-content">
        <p>
          By clicking the restart button all previously saved information for the assessment will be deleted.
        </p>
      </main>
      <footer class="modal__footer">
        <button class="modal__btn" data-micromodal-close aria-label="Close this dialog window">Close</button>
        <button class="restart-assessment ml-auto modal__btn modal__btn-primary">Restart</button>
      </footer>
    </div>
  </div>
</div>
