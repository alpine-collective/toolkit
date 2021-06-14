var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};

// packages/$dbg/builds/module.js
__markAsModule(exports);
__export(exports, {
  default: () => module_default
});

// packages/$dbg/src/index.js
function src_default(Alpine) {
  Alpine.magic("dbg", (el) => {
    return function(...args) {
      const raw = args.map((arg) => Alpine.raw(arg));
      console.log(...raw);
    };
  });
}

// packages/$dbg/builds/module.js
var module_default = src_default;
