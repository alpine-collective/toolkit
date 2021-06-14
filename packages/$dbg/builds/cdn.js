import Dbg from '../src/index'

document.addEventListener('alpine:initializing', () => {
    Dbg(window.Alpine)
})
