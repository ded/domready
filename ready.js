/*!
  * domready (c) Dustin Diaz 2014 - License MIT
  */
!function (name, definition) {

  if (typeof exports !== 'undefined' && this.exports !== exports) module.exports = definition(true)
  else if (typeof define == 'function' && typeof define.amd == 'object') define(definition)
  else this[name] = definition()

}('domready', function () {

  if (!document.addEventListener) {
    var ret = function() {};
    ret.nodom = true;
    return ret;
  }

  var fns = [], listener
    , doc = document
    , domContentLoaded = 'DOMContentLoaded'
    , loaded = /^loaded|^i|^c/.test(doc.readyState)

  if (!loaded)
  doc.addEventListener(domContentLoaded, listener = function () {
    doc.removeEventListener(domContentLoaded, listener)
    loaded = 1
    while (listener = fns.shift()) listener()
  })

  return function (fn) {
    loaded ? fn() : fns.push(fn)
  }

})
