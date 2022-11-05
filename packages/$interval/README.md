# $interval

[![GitHub tag (latest by date)](https://img.shields.io/npm/v/@alpine-collective/toolkit-interval)](https://www.npmjs.com/package/@alpine-collective/toolkit-interval)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@alpine-collective/toolkit-interval?color=#0F0)](https://bundlephobia.com/result?p=@alpine-collective/toolkit-interval)

A magic helper to run a function every n milliseconds in Alpine.Js.

## Usage
The helper will run a function every x milliseconds.

```html
<div x-init="$interval(() => console.log('Hello World'), 1000)"></div>
```

The first parameter of the helper is the function to run while the second parameter is the interval.

### Advanced usage
It's possible to use a config object as a second parameter to specify additional options:
| Property | Description |
| --- | --- |
| `timer` | Timer in milliseconds.  |
| `delay` | Delay the first run. N.B. The first run is also delayed by the timer time. |
| `forceInterval` |  Ignore the browser animation request mechanism. Default is false |

> ⚠️ By default, `$interval ` will run your function every `nth` millisecond when browser provides an animation frame (via `requestAnimationFrame`). This means that the function will not run if the browser tab is not visible unless forceInterval is set to `true`.

### Pausing the timer

If the component defines a property called `autoIntervalTest`, the function will only be called when the said property is set to a truthy value.

## Installation

This helper is part of `alpine-collective/toolkit`. If you have already installed the main library, you won't need to do anything else. If you desire to install the helper as a standalone packacage, follow the steps below.

### CDN

Include the following `<script>` tag in the `<head>` of your document, **before** Alpine:

```html
<script src="https://unpkg.com/@alpine-collective/toolkit-interval@1.0.1/dist/cdn.min.js" defer></script>
```
```html
<script src="https://cdn.jsdelivr.net/npm/@alpine-collective/toolkit-interval@1.0.1/dist/cdn.min.js" defer></script>
```

### NPM

If you would like to bundle the plugin yourself, install it via NPM:

```bash
npm install @alpine-collective/toolkit-interval --save-dev
```

You can then register the plugin with Alpine:

```js
import Alpine from 'alpinejs'
import Interval from '@alpine-collective/toolkit-interval'

Alpine.plugin(Interval)

Alpine.start()
```
