# $screen

A magic helper to detect if the current browser width is equal or greater than a given breakpoint in Alpine.Js.

## Usage
Coming soon

## Installation

Include the following `<script>` tag in the `<head>` of your document, **before** Alpine:

```html
<script src="https://unpkg.com/@alpine-collective/toolkit-screen@1.0.0/dist/cdn.min.js" defer></script>
```

### NPM

If you would like to bundle the plugin yourself, install it via NPM:

```bash
npm install @alpine-collective/toolkit-screen --save-dev
```

You can then register the plugin with Alpine:

```js
import Alpine from 'alpinejs'
import Screen from '@alpine-collective/toolkit-screen'

Alpine.plugin(Screen)

Alpine.start()
```
