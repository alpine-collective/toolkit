# $scroll

[![GitHub tag (latest by date)](https://img.shields.io/npm/v/@alpine-collective/toolkit-scroll)](https://www.npmjs.com/package/@alpine-collective/toolkit-scroll)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@alpine-collective/toolkit-scroll?color=#0F0)](https://bundlephobia.com/result?p=@alpine-collective/toolkit-scroll)

A magic helper to generate to scroll the viewport in Alpine.Js

## Usage
Coming soon

## Installation

Include the following `<script>` tag in the `<head>` of your document, **before** Alpine:

```html
<script src="https://unpkg.com/@alpine-collective/toolkit-scroll@1.0.0/dist/cdn.min.js" defer></script>
```

### NPM

If you would like to bundle the plugin yourself, install it via NPM:

```bash
npm install @alpine-collective/toolkit-scroll --save-dev
```

You can then register the plugin with Alpine:

```js
import Alpine from 'alpinejs'
import Scroll from '@alpine-collective/toolkit-scroll'

Alpine.plugin(Scroll)

Alpine.start()
```
