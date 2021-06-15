var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};

// packages/$root/builds/module.js
__markAsModule(exports);
__export(exports, {
  default: () => module_default
});

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
