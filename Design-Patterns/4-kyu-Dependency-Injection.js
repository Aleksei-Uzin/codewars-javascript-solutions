/**
 * Dependency Injection
 * https://www.codewars.com/kata/5302d655be2a91068b0001fb/train/javascript
 *
 */

/**
 * Constructor DependencyInjector
 * @param {Object} - object with dependencies
 */
var DI = function (dependency) {
  this.dependency = dependency
}

// Should return new function with resolved dependencies
DI.prototype.inject = function (func) {
  const FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m
  const strArgs = func.toString().match(FN_ARGS)[1].split(', ')
  const args = strArgs.map(name => this.dependency[name]).filter(Boolean)

  return () => func.apply(null, args)
}
