# $dbg

A magic function to assist in debugging Alpine.js components.

## Usage
The function automatically unwraps the alpine properties and prints them to the browser console.

```html
<div x-data="{ foo: 'bar', baz: { bob: 'qux' } }">
    <button @click="$dbg(name, user)">Debug</button>
</div>
```

## Installation

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
