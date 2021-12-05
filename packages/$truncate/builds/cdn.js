import Truncate from '../src/index'

document.addEventListener('alpine:init', () => {
    window.Alpine.plugin(Truncate)
})
