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
export {
  module_default as default
};
