export default function (Alpine) {
    Alpine.magic('root', (el, { Alpine }) => {
        return Alpine.closestRoot(el)
    })
}
