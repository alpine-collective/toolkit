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

// packages/$root/builds/module.js
var module_default = src_default;
export {
  module_default as default
};
