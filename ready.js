!function (doc) {
  var loaded = 0, fns = [], ol,
      testEl = doc.createElement('a'),
      domContentLoaded = 'DOMContentLoaded', readyState = 'readyState',
      onreadystatechange = 'onreadystatechange';


  doc.addEventListener && doc.addEventListener(domContentLoaded, function fn() {
    doc.removeEventListener(domContentLoaded, fn, false);
    doc[readyState] = "complete";
  }, false);
  doc[readyState] = "loading";

  function again(fn) {
    setTimeout(function() {
      domReady(fn);
    }, 50);
  }

  testEl.doScroll && doc.attachEvent(onreadystatechange, (ol = function ol() {
    /^c/.test(doc[readyState]) &&
    (loaded = 1) &&
    !doc.detachEvent(onreadystatechange, ol) && !function () {
      for (var i = 0, l = fns.length; i < l; i++) {
        fns[i]();
      }
      testEl = null;
    }();
  }));

  var domReady = testEl.doScroll ?
    function (fn) {
      self != top ?
        !loaded ?
          fns.push(fn) :
          fn() :
        !function () {
          try {
            testEl.doScroll('left');
          } catch (e) {
            return again(fn);
          }
          fn();
        }();
    } :
    function (fn) {
      /^i|c/.test(doc[readyState]) ? fn() : again(fn);
    };

    (typeof module !== 'undefined') && module.exports ?
      (module.exports = {domReady: domReady}) :
      (window.domReady = domReady);

}(document);