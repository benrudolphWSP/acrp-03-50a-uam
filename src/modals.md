---
layout: child.html
path: modal
title: Modals
eleventyNavigation:
  key: Modal
  parent: Home
---

<button data-micromodal-trigger="modal-1" class="button bg-primary text-white">Open Modal</button>

<div class="modal micromodal-slide" id="modal-1" aria-hidden="true">
  <div class="modal__overlay" tabindex="-1" data-micromodal-close>
    <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
      <header class="modal__header">
        <h2 id="modal-1-title">
          Modal Window
        </h2>
        <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
      </header>
      <main class="modal__content" id="modal-1-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tecum optime, deinde etiam cum mediocri amico. Quis enim redargueret? An hoc usque quaque, aliter in vita? Qui ita affectus, beatum esse numquam probabis; Sed vobis voluptatum perceptarum recordatio vitam beatam facit, et quidem corpore perceptarum. Duo Reges: constructio interrete. Neque enim disputari sine reprehensione nec cum iracundia aut pertinacia recte disputari potest. Istam voluptatem perpetuam quis potest praestare sapienti? Tum Piso: Quoniam igitur aliquid omnes, quid Lucius noster? </p>
      </main>
      <footer class="modal__footer">
        <button class="modal__btn" data-micromodal-close aria-label="Close this dialog window">Close</button>
      </footer>
    </div>
  </div>
</div>

```html
<div class="modal micromodal-slide" id="modal-1" aria-hidden="true">
  <div class="modal__overlay" tabindex="-1" data-micromodal-close>
    <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-1-title">
      <header class="modal__header">
        <h2 id="modal-1-title">
          Modal Window
        </h2>
        <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
      </header>
      <main class="modal__content" id="modal-1-content">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tecum optime. </p>
      </main>
      <footer class="modal__footer">
        <button class="modal__btn" data-micromodal-close aria-label="Close this dialog window">Close</button>
        <button class="restart-assessment ml-auto modal__btn modal__btn-primary">Restart</button>
      </footer>
    </div>
  </div>
</div>
```
