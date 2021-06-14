export default function (Alpine) {
    Alpine.magic('dbg', (el) => {
        return function (...args) {
            const raw = args.map(arg => Alpine.raw(arg))

            console.log(...raw)
        }
    })
}
