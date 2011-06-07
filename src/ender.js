!function ($) {
  $.ender({domReady: domReady});
  $.ender({
    ready: function (f) {
      domReady(f);
      return this;
    }
  }, true)
  var _$ = $;
  $ = function (s, r) {
    if (typeof s == 'function') {
      domReady(s);
    } else {
      return _$(s, r);
    }
  };
}(ender);