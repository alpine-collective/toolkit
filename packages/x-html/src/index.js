export default function (Alpine) {
    Alpine.directive('html', (el, { modifiers, expression }, { effect, evaluateLater }) => {
        let getHtml = evaluateLater(expression);

        effect(() => {
            getHtml(html => {
                el.innerHTML = html
            })
        })
    })
}
