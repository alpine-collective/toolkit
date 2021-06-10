export default function (Alpine) {
    Alpine.directive('html', (el, { modifiers, expression }, { effect, evaluateLater }) => {
        let getHtml = evaluateLater(expression);

        effect(() => {
            getHtml(html => {
                el.innerHTML = html

                if (modifiers.includes('unsafe')) {
                    nodeScriptReplace(el)
                }
            })
        })
    })
}

const nodeScriptClone = function (node) {
    const script = document.createElement('script')
    script.text = node.innerHTML

    for (let i = 0; i < node.attributes.length; i++) {
        const attr = node.attributes[i]
        script.setAttribute(attr.name, attr.value)
    }

    return script
}

const nodeScriptReplace = function (node) {
    if (node.tagName && node.tagName.toLowerCase() === 'script') {
        node.parentNode.replaceChild(nodeScriptClone(node), node)
    } else {
        for (let i = 0; i < node.childNodes.length; i++) {
            nodeScriptReplace(node.childNodes[i])
        }
    }

    return node
}
