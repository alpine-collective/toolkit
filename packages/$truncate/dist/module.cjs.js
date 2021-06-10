var __defProp = Object.defineProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};

// packages/$truncate/builds/module.js
__markAsModule(exports);
__export(exports, {
  default: () => module_default
});

// packages/$truncate/src/index.js
function src_default(Alpine) {
  Alpine.magic("truncate", () => {
    return function(...parameters) {
      if (typeof parameters[0] !== "string")
        return parameters[0];
      if (!parameters[1])
        return parameters[0];
      if (typeof parameters[1] !== "object") {
        return appendEllipsis(parameters[0].slice(0, parameters[1]), parameters);
      }
      if (Object.prototype.hasOwnProperty.call(parameters[1], "words") && parameters[1].words) {
        return appendEllipsis(parameters[0].split(" ").splice(0, parameters[1].words).join(" "), parameters);
      }
      if (Object.prototype.hasOwnProperty.call(parameters[1], "characters") && parameters[1].characters) {
        return appendEllipsis(parameters[0].slice(0, parameters[1].characters), parameters);
      }
      return parameters[0];
    };
  });
}
var appendEllipsis = (string, parameters) => {
  if (parameters[0].length <= string.length)
    return string;
  let ellipsis = "\u2026";
  if (typeof parameters[2] !== "undefined") {
    ellipsis = parameters[2];
  }
  if (Object.prototype.hasOwnProperty.call(parameters[1], "ellipsis")) {
    ellipsis = parameters[1].ellipsis;
  }
  return string + ellipsis;
};

// packages/$truncate/builds/module.js
var module_default = src_default;
