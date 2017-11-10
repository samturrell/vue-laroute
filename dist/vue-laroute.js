/*!
 * vue-laroute v0.1.0 
 * (c) 2017 Sam Turrell
 * Released under the MIT License.
 */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global.VueLaroute = factory());
}(this, (function () { 'use strict';

function plugin (Vue, options) {
  if ( options === void 0 ) options = {};

  options = Object.assign({
    accessor: '$routes',
    routes: {}
  }, options);

  Vue.prototype[options.accessor] = options.routes;
}

plugin.version = '0.1.0';

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin);
}

return plugin;

})));
