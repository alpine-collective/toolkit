# Toolkit

A set of directives and magic properties for Alpine.js.

## About

This package provides the following directives and helpers:

## Installation

Include the following `<script>` tag in the `<head>` of your document, **before** Alpine:

```html
<script src="#" defer></script>
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
