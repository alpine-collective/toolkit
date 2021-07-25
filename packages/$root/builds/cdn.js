import Root from '../src/index'

document.addEventListener('alpine:init', () => {
    Root(window.Alpine)
})
