# $dbg

[![GitHub tag (latest by date)](https://img.shields.io/npm/v/@alpine-collective/toolkit-dbg)](https://www.npmjs.com/package/@alpine-collective/toolkit-dbg)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@alpine-collective/toolkit-dbg?color=#0F0)](https://bundlephobia.com/result?p=@alpine-collective/toolkit-dbg)

A magic helper to assist in debugging Alpine.js components.

## Usage
The helper automatically unwraps the alpine properties and prints them to the browser console.

```html
<div x-data="{ foo: 'bar', baz: { bob: 'qux' } }">
    <button @click="$dbg(foo, baz)">Debug</button>
</div>
```

## Installation

This helper is part of `alpine-collective/toolkit`. If you have already installed the main library, you won't need to do anything else. If you desire to install the helper as a standalone packacage, follow the steps below.

### CDN

Include the following `<script>` tag in the `<head>` of your document, **before** Alpine:

```html
<script src="https://unpkg.com/@alpine-collective/toolkit-dbg@1.0.0/dist/cdn.min.js" defer></script>
```

### NPM

If you would like to bundle the plugin yourself, install it via NPM:

```bash
npm install @alpine-collective/toolkit-dbg --save-dev
```

You can then register the plugin with Alpine:

```js
import Alpine from 'alpinejs'
import Dbg from '@alpine-collective/toolkit-dbg'

Alpine.plugin(Dbg)

Alpine.start()
```
