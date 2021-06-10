import Html from '../src/index'

document.addEventListener('alpine:initializing', () => {
    Html(window.Alpine)
})
