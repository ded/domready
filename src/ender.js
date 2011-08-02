!function ($) {
  var domReady = require('domready');
  $.ender({domReady: domReady});
  $.ender({
    ready: function (f) {
      domReady(f);
      return this;
    }
  }, true);
}(ender);