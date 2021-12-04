# $scroll

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
