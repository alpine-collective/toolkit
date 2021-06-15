export default function (Alpine) {
    Alpine.magic('root', (el) => {
        return closestRoot(el)
    })
}

const closestRoot = (el) => {
    if (el.hasAttribute('x-data')) {
        return el
    }

    return closestRoot(el.parentNode)
}
