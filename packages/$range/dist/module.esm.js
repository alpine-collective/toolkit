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
export {
  module_default as default
};
