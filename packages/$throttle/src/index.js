export default function (Alpine) {
    Alpine.magic('throttle', (el) => {
        return (func, time) => (...args) => {
            const later = () => {
                el.__x_throttle_timeout = setTimeout(() => {
                    delete el.__x_throttle_timeout
                    if (el.__x_throttle_queued) el.__x_throttle_queued()
                    delete el.__x_throttle_queued
                }, time)
                func.call(this, ...args)
            }

            if (!el.__x_throttle_timeout) {
                later()
            } else {
                el.__x_throttle_queued = later
            }
        }
    })
}
