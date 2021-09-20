---
layout: child.html
title: Accordions
path: accordions
eleventyNavigation:
  key: Accordions
  parent: Home
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
