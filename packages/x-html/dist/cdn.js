(() => {
  // packages/x-html/src/index.js
  function src_default(Alpine) {
    Alpine.directive("html", (el, {modifiers, expression}, {effect, evaluateLater}) => {
      const getHtml = evaluateLater(expression);
      effect(() => {
        getHtml((html) => {
          el.innerHTML = html;
          if (modifiers.includes("unsafe")) {
            nodeScriptReplace(el);
          }
        });
      });
    });
  }
  var nodeScriptClone = function(node) {
    const script = document.createElement("script");
    script.text = node.innerHTML;
    for (let i = 0; i < node.attributes.length; i++) {
      const attr = node.attributes[i];
      script.setAttribute(attr.name, attr.value);
    }
    return script;
  };
  var nodeScriptReplace = function(node) {
    if (node.tagName && node.tagName.toLowerCase() === "script") {
      node.parentNode.replaceChild(nodeScriptClone(node), node);
    } else {
      for (let i = 0; i < node.childNodes.length; i++) {
        nodeScriptReplace(node.childNodes[i]);
      }
    }
    return node;
  };

  // packages/x-html/builds/cdn.js
  document.addEventListener("alpine:initializing", () => {
    src_default(window.Alpine);
  });
})();
