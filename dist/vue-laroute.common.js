/*!
 * vue-laroute v0.1.1 
 * (c) 2018 Sam Turrell
 * Released under the MIT License.
 */
'use strict';

function plugin (Vue, options) {
  if ( options === void 0 ) options = {};

  options = Object.assign({
    accessor: '$routes',
    routes: (typeof window !== 'undefined' && window.laroute)
      ? window.laroute
      : {}
  }, options);

  Vue.prototype[options.accessor] = options.routes;
}

plugin.version = '0.1.1';

if (typeof window !== 'undefined' && window.Vue && window.laroute) {
  window.Vue.use(plugin);
}

module.exports = plugin;
