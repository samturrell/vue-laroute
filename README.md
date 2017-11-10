# vue-laroute

[![npm](https://img.shields.io/npm/v/vue-laroute.svg)](https://www.npmjs.com/package/vue-laroute)
[![vue2](https://img.shields.io/badge/vue-2.x-brightgreen.svg)](https://vuejs.org/)

Inject Laravel routes into your Vue application via [aaronlord/laroute](https://github.com/aaronlord/laroute). I actually recommend the alternative and more slim-lined version of this package from [AXN-Informatique/laravel-laroute](https://github.com/AXN-Informatique/laravel-laroute).

## Using this plugin

Adding vue-laroute to your application is as simple as any other plugin:

```js
import VueLaroute from 'vue-laroute';
import routes from '../path/to/laroute.js';

Vue.use(VueLaroute, {
  routes,
  accessor: '$routes', // Optional: the global variable for accessing the router
});
```

You can now access your global accessor (`$routes` by default) in any component via `this.$routes`, for example:

```js
<template>
  <div>
    <h1>You can access it in your template</h1>
    <nav>
      <ul>
        <li>
          <a :href="$routes.route('home')">Home</a>
        </li>
        <li>
          <a :href="$routes.route('products')">Home</a>
          <ul>
            <li>
              <a :href="$routes.route('products.show', { id: 1 })">Product 1</a>
            </li>
            <li>
              <a :href="$routes.route('products.show', { id: 123 })">Product 123</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
    <button @click.prevent="purchaseProduct(123)">Purchase product</button>
  </div>
</template>

<script>
  export default {
    methods: {
      purchaseProduct (id) {
        this.$http.post(this.$routes.route('products.purchase', { id: id }))
          .then((response) => {
            // Handler
          });
      },
    },
  }
</script>
```



## :scroll: Changelog
Details changes for each release are documented in the [CHANGELOG.md](https://github.com/samturrell/vue-laroute/blob/master/CHANGELOG.md).


## :exclamation: Issues
Please make sure to read the [Issue Reporting Checklist](https://github.com/samturrell/vue-laroute/blob/master/CONTRIBUTING.md#issue-reporting-guidelines) before opening an issue. Issues not conforming to the guidelines may be closed immediately.


## :muscle: Contribution
Please make sure to read the [Contributing Guide](https://github.com/samturrell/vue-laroute/blob/master/CONTRIBUTING.md) before making a pull request.

## :copyright: License

[MIT](http://opensource.org/licenses/MIT)
