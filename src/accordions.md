---
layout: child.html
title: Accordions
path: accordions
eleventyNavigation:
  key: Accordions
  parent: Home
galleryImages:
  - image: /images/_mg_5407.jpg
    altText: Vehicle driving on road in town
    caption: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quid enim
      tanto opus est instrumento in optimis artibus comparandis? Quae tamen a te
      agetur non melior, quam illae sunt, quas interdum optines. Semper enim ex
      eo, quod maximas partes continet latissimeque funditur, tota res
      appellatur. Se dicere inter honestum et turpe nimium quantum, nescio quid
      inmensum, inter ceteras res nihil omnino interesse. At vero Epicurus una
      in domo, et ea quidem angusta, quam magnos quantaque amoris conspiratione
      consentientis tenuit amicorum greges! quod fit etiam nunc ab Epicureis.
      Dolor ergo, id est summum malum, metuetur semper, etiamsi non aderit;
      Epicurei num desistunt de isdem, de quibus et ab Epicuro scriptum est et
      ab antiquis, ad arbitrium suum scribere? "
  - image: /images/_mg_5388.jpg
    altText: Car sandwiched between two semis
---


<div class='accordion'><div class='accordion__title'>Accordion 1</div>
<div class='accordion__panel'>

## Header

This is the first accordion.

* List item 1
* List Item 2

</div>
</div>

If you are using accordions outside of the NEWT CMS, below is the markup needed.

```html
<div class="accordion">
  <div class="accordion__title">
    Accordion Title
  </div>
  <div class="accordion__panel">
    <p>Content for accordion goes here.</p>
  </div>
</div>
```
