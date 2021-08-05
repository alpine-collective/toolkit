export default function (Alpine) {
    Alpine.magic('debounce', (el) => {
        return (func, time, immediate = false) => (...args) => {
            const later = func.bind(this, ...args)
            clearTimeout(el.__x_debounce_timer)
            if (immediate && !el.__x_debounce_timer) later()
            el.__x_debounce_timer = setTimeout(() => {
                delete el.__x_debounce_timer
                if (!immediate) later()
            }, time)
        }
    })
}
