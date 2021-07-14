// Element.matches Polyfill
if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector;
}

// Element.closest Polyfill
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
