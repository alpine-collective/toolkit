# $range

[![GitHub tag (latest by date)](https://img.shields.io/npm/v/@alpine-collective/toolkit-range)](https://www.npmjs.com/package/@alpine-collective/toolkit-range)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@alpine-collective/toolkit-range?color=#0F0)](https://bundlephobia.com/result?p=@alpine-collective/toolkit-range)

A magic helper to generate an array containing a range of elements in Alpine.js.

## Usage
Coming soon

## Installation

This helper is part of `alpine-collective/toolkit`. If you have already installed the main library, you won't need to do anything else. If you desire to install the helper as a standalone packacage, follow the steps below.

### CDN

Include the following `<script>` tag in the `<head>` of your document, **before** Alpine:

```html
<script src="https://unpkg.com/@alpine-collective/toolkit-range@1.0.2/dist/cdn.min.js" defer></script>
```
or
```html
<script src="https://cdn.jsdelivr.net/npm/@alpine-collective/toolkit-range@1.0.2/dist/cdn.min.js" defer></script>
```

### NPM

If you would like to bundle the plugin yourself, install it via NPM:

```bash
npm install @alpine-collective/toolkit-range --save-dev
```

You can then register the plugin with Alpine:

```js
import Alpine from 'alpinejs'
import Range from '@alpine-collective/toolkit-range'

Alpine.plugin(Range)

Alpine.start()
```
