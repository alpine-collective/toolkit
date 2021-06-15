(() => {
  // packages/$root/src/index.js
  function src_default(Alpine) {
    Alpine.magic("root", (el) => {
      return closestRoot(el);
    });
  }
  var closestRoot = (el) => {
    if (el.hasAttribute("x-data")) {
      return el;
    }
    return closestRoot(el.parentNode);
  };

  // packages/$root/builds/cdn.js
  document.addEventListener("alpine:initializing", () => {
    src_default(window.Alpine);
  });
})();
