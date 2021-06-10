var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};

// packages/$range/builds/module.js
__markAsModule(exports);
__export(exports, {
  default: () => module_default
});

// packages/$range/src/index.js
function src_default(Alpine) {
  Alpine.magic("range", () => {
    return function(start, stop, step = 1) {
      if (typeof stop === "undefined") {
        stop = start;
        start = start ? 1 : 0;
      }
      const reverse = start > stop;
      if (reverse) {
        [start, stop] = [stop, start];
      }
      const range = Array.from({length: (stop - start) / step + 1}, (_, i) => start + i * step);
      return reverse ? range.reverse() : range;
    };
  });
}

// packages/$range/builds/module.js
var module_default = src_default;
