!function ($) {
  $.ender({domReady: require('domready')});
  $.ender({
    ready: function (f) {
      domReady(f);
      return this;
    }
  }, true);
}(ender);