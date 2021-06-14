import Toolkit from '../src/index'

document.addEventListener('alpine:initializing', () => {
    Toolkit(window.Alpine)
})
