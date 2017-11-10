
function plugin (Vue, options = {}) {
  options = Object.assign({
    accessor: '$routes',
    routes: {}
  }, options)

  Vue.prototype[options.accessor] = options.routes
}

plugin.version = '__VERSION__'

export default plugin

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(plugin)
}
