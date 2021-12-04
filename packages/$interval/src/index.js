export default function (Alpine) {
    Alpine.magic('interval', () => {
        return function (...parameters) {
            if (typeof parameters[0] !== 'function') return parameters[0]

            let timer = parameters[1]
            let delay = 0
            let forceInterval = false

            // Users can pass in an object as a second parameter instead
            if (typeof parameters[1] === 'object') {
                if (Object.prototype.hasOwnProperty.call(parameters[1], 'timer')) {
                    timer = parameters[1].timer
                }

                if (Object.prototype.hasOwnProperty.call(parameters[1], 'delay')) {
                    delay = parameters[1].delay
                }

                if (Object.prototype.hasOwnProperty.call(parameters[1], 'forceInterval')) {
                    forceInterval = parameters[1].forceInterval
                }
            }

            let autoIntervalLoop = null

            const loop = () => {
                autoIntervalLoop = setTimeout(() => {
                    parameters[0].call(this)
                    forceInterval ? loop() : requestAnimationFrame(loop)
                }, timer)
            }

            Alpine.effect(() => {
                if (!this.hasOwnProperty('autoIntervalTest') || this.autoIntervalTest) {
                    forceInterval ? loop() : requestAnimationFrame(loop)
                } else {
                    clearTimeout(autoIntervalLoop)
                }
            })
        }
    })
}
