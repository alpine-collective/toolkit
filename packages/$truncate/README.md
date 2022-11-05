# $truncate

[![GitHub tag (latest by date)](https://img.shields.io/npm/v/@alpine-collective/toolkit-truncate)](https://www.npmjs.com/package/@alpine-collective/toolkit-truncate)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@alpine-collective/toolkit-truncate?color=#0F0)](https://bundlephobia.com/result?p=@alpine-collective/toolkit-truncate)

A magic helper to truncate a string in Alpine.js.

## Usage
Coming soon

## Installation

### CDN

Include the following `<script>` tag in the `<head>` of your document, **before** Alpine:

```html
<script src="https://unpkg.com/@alpine-collective/toolkit-truncate@1.0.1/dist/cdn.min.js" defer></script>
```
or
```html
<script src="https://cdn.jsdelivr.net/npm/@alpine-collective/toolkit-truncate@1.0.1/dist/cdn.min.js" defer></script>
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
