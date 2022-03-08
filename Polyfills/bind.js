// Function.prototype.bind polyfill

Function.prototype.customBind = function (context, ...args) {
  context._this = this;
  return function () {
    return context._this(...args);
  }
}