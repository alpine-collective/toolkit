import Dbg from '../src/index'

document.addEventListener('alpine:init', () => {
    Dbg(window.Alpine)
})
