// packages/$root/src/index.js
function src_default(Alpine) {
  Alpine.magic("root", (el, {Alpine: Alpine2}) => {
    return Alpine2.closestRoot(el);
  });
}

// packages/$root/builds/module.js
var module_default = src_default;
export {
  module_default as default
};
