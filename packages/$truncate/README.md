# $truncate

[![GitHub tag (latest by date)](https://img.shields.io/npm/v/@alpine-collective/toolkit-interval)](https://www.npmjs.com/package/@alpine-collective/toolkit-interval)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@alpine-collective/toolkit-interval?color=#0F0)](https://bundlephobia.com/result?p=@alpine-collective/toolkit-interval)

A magic helper to truncate a string in Alpine.js.

## Usage
Coming soon

## Installation

### CDN

Include the following `<script>` tag in the `<head>` of your document, **before** Alpine:

```html
<script src="https://unpkg.com/@alpine-collective/toolkit-truncate@1.0.0/dist/cdn.min.js" defer></script>
```

### NPM

If you would like to bundle the plugin yourself, install it via NPM:

```bash
npm install @alpine-collective/toolkit-truncate --save-dev
```

You can then register the plugin with Alpine:

```js
import Alpine from 'alpinejs'
import Truncate from '@alpine-collective/toolkit-truncate'

Alpine.plugin(Truncate)

Alpine.start()
```
