import Root from '../src/index'

document.addEventListener('alpine:initializing', () => {
    Root(window.Alpine)
})
