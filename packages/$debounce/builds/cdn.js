import Debounce from '../src/index'

document.addEventListener('alpine:init', () => {
    Debounce(window.Alpine)
})
