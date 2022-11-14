# Alpine toolkit

[![GitHub tag (latest by date)](https://img.shields.io/npm/v/@alpine-collective/toolkit)](https://www.npmjs.com/package/@alpine-collective/toolkit)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@alpine-collective/toolkit?color=#0F0)](https://bundlephobia.com/result?p=@alpine-collective/toolkit)

A set of directives and magic properties for Alpine.js V3.

## About

This package provides the following directives and helpers:

| Helper | Description |
| --- | --- |
| [$dbg](https://github.com/alpine-collective/toolkit/blob/main/packages/%24dbg/README.md) | A magic helper to assist in debugging Alpine.js components. |
| [$interval](https://github.com/alpine-collective/toolkit/blob/main/packages/%24interval/README.md) | A magic helper to run a function every n milliseconds in Alpine.Js. |
| [$range](https://github.com/alpine-collective/toolkit/blob/main/packages/%24range/README.md) | A magic helper to generate an array containing a range of elements in Alpine.js. |
| [$screen](https://github.com/alpine-collective/toolkit/blob/main/packages/%24screen/README.md) | A magic helper to detect if the current browser width is equal or greater than a given breakpoint in Alpine.Js. |
| [$scroll](https://github.com/alpine-collective/toolkit/blob/main/packages/%24scroll/README.md) | A magic helper to generate to scroll the viewport in Alpine.Js |
| [$truncate](https://github.com/alpine-collective/toolkit/blob/main/packages/%24truncate/README.md) | A magic helper to truncate a string in Alpine.js. |

Each helper can also be used independently.

## Installation

Include the following `<script>` tag in the `<head>` of your document, **before** Alpine:

```html
<script src="https://unpkg.com/@alpine-collective/toolkit@1.0.2/dist/cdn.min.js" defer></script>
```
or
```html
<script src="https://cdn.jsdelivr.net/npm/@alpine-collective/toolkit@1.0.2/dist/cdn.min.js" defer></script>
```

### NPM

If you would like to bundle the plugin yourself, install it via NPM:

```bash
npm install @alpine-collective/toolkit --save
```

You can then register the plugin with Alpine:

```js
import Alpine from 'alpinejs'
import Toolkit from '@alpine-collective/toolkit'

Alpine.plugin(Toolkit)

Alpine.start()
```
