(function() {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('next-js-core2');

  nx.isNumeric = function(inTarget) {
    return !isNaN(parseFloat(inTarget)) && isFinite(inTarget);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.isNumeric;
  }
})();
