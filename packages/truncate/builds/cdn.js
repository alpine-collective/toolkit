import Truncate from '../src/index'

document.addEventListener('alpine:initializing', () => {
    Truncate(window.Alpine)
})
