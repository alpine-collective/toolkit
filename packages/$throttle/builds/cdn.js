import Throttle from '../src/index'

document.addEventListener('alpine:init', () => {
    Throttle(window.Alpine)
})
