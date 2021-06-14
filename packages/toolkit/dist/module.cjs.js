var __create = Object.create;
var __defProp = Object.defineProperty;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __markAsModule = (target) => __defProp(target, "__esModule", {value: true});
var __commonJS = (callback, module2) => () => {
  if (!module2) {
    module2 = {exports: {}};
    callback(module2.exports, module2);
  }
  return module2.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, {get: all[name], enumerable: true});
};
var __exportStar = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, {get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable});
  }
  return target;
};
var __toModule = (module2) => {
  return __exportStar(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? {get: () => module2.default, enumerable: true} : {value: module2, enumerable: true})), module2);
};

// node_modules/smoothscroll-polyfill/dist/smoothscroll.js
var require_smoothscroll = __commonJS((exports2, module2) => {
  (function() {
    "use strict";
    function polyfill() {
      var w = window;
      var d = document;
      if ("scrollBehavior" in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) {
        return;
      }
      var Element2 = w.HTMLElement || w.Element;
      var SCROLL_TIME = 468;
      var original = {
        scroll: w.scroll || w.scrollTo,
        scrollBy: w.scrollBy,
        elementScroll: Element2.prototype.scroll || scrollElement,
        scrollIntoView: Element2.prototype.scrollIntoView
      };
      var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;
      function isMicrosoftBrowser(userAgent) {
        var userAgentPatterns = ["MSIE ", "Trident/", "Edge/"];
        return new RegExp(userAgentPatterns.join("|")).test(userAgent);
      }
      var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;
      function scrollElement(x, y) {
        this.scrollLeft = x;
        this.scrollTop = y;
      }
      function ease(k) {
        return 0.5 * (1 - Math.cos(Math.PI * k));
      }
      function shouldBailOut(firstArg) {
        if (firstArg === null || typeof firstArg !== "object" || firstArg.behavior === void 0 || firstArg.behavior === "auto" || firstArg.behavior === "instant") {
          return true;
        }
        if (typeof firstArg === "object" && firstArg.behavior === "smooth") {
          return false;
        }
        throw new TypeError("behavior member of ScrollOptions " + firstArg.behavior + " is not a valid value for enumeration ScrollBehavior.");
      }
      function hasScrollableSpace(el, axis) {
        if (axis === "Y") {
          return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
        }
        if (axis === "X") {
          return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
        }
      }
      function canOverflow(el, axis) {
        var overflowValue = w.getComputedStyle(el, null)["overflow" + axis];
        return overflowValue === "auto" || overflowValue === "scroll";
      }
      function isScrollable(el) {
        var isScrollableY = hasScrollableSpace(el, "Y") && canOverflow(el, "Y");
        var isScrollableX = hasScrollableSpace(el, "X") && canOverflow(el, "X");
        return isScrollableY || isScrollableX;
      }
      function findScrollableParent(el) {
        while (el !== d.body && isScrollable(el) === false) {
          el = el.parentNode || el.host;
        }
        return el;
      }
      function step(context) {
        var time = now();
        var value;
        var currentX;
        var currentY;
        var elapsed = (time - context.startTime) / SCROLL_TIME;
        elapsed = elapsed > 1 ? 1 : elapsed;
        value = ease(elapsed);
        currentX = context.startX + (context.x - context.startX) * value;
        currentY = context.startY + (context.y - context.startY) * value;
        context.method.call(context.scrollable, currentX, currentY);
        if (currentX !== context.x || currentY !== context.y) {
          w.requestAnimationFrame(step.bind(w, context));
        }
      }
      function smoothScroll(el, x, y) {
        var scrollable;
        var startX;
        var startY;
        var method;
        var startTime = now();
        if (el === d.body) {
          scrollable = w;
          startX = w.scrollX || w.pageXOffset;
          startY = w.scrollY || w.pageYOffset;
          method = original.scroll;
        } else {
          scrollable = el;
          startX = el.scrollLeft;
          startY = el.scrollTop;
          method = scrollElement;
        }
        step({
          scrollable,
          method,
          startTime,
          startX,
          startY,
          x,
          y
        });
      }
      w.scroll = w.scrollTo = function() {
        if (arguments[0] === void 0) {
          return;
        }
        if (shouldBailOut(arguments[0]) === true) {
          original.scroll.call(w, arguments[0].left !== void 0 ? arguments[0].left : typeof arguments[0] !== "object" ? arguments[0] : w.scrollX || w.pageXOffset, arguments[0].top !== void 0 ? arguments[0].top : arguments[1] !== void 0 ? arguments[1] : w.scrollY || w.pageYOffset);
          return;
        }
        smoothScroll.call(w, d.body, arguments[0].left !== void 0 ? ~~arguments[0].left : w.scrollX || w.pageXOffset, arguments[0].top !== void 0 ? ~~arguments[0].top : w.scrollY || w.pageYOffset);
      };
      w.scrollBy = function() {
        if (arguments[0] === void 0) {
          return;
        }
        if (shouldBailOut(arguments[0])) {
          original.scrollBy.call(w, arguments[0].left !== void 0 ? arguments[0].left : typeof arguments[0] !== "object" ? arguments[0] : 0, arguments[0].top !== void 0 ? arguments[0].top : arguments[1] !== void 0 ? arguments[1] : 0);
          return;
        }
        smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
      };
      Element2.prototype.scroll = Element2.prototype.scrollTo = function() {
        if (arguments[0] === void 0) {
          return;
        }
        if (shouldBailOut(arguments[0]) === true) {
          if (typeof arguments[0] === "number" && arguments[1] === void 0) {
            throw new SyntaxError("Value could not be converted");
          }
          original.elementScroll.call(this, arguments[0].left !== void 0 ? ~~arguments[0].left : typeof arguments[0] !== "object" ? ~~arguments[0] : this.scrollLeft, arguments[0].top !== void 0 ? ~~arguments[0].top : arguments[1] !== void 0 ? ~~arguments[1] : this.scrollTop);
          return;
        }
        var left = arguments[0].left;
        var top = arguments[0].top;
        smoothScroll.call(this, this, typeof left === "undefined" ? this.scrollLeft : ~~left, typeof top === "undefined" ? this.scrollTop : ~~top);
      };
      Element2.prototype.scrollBy = function() {
        if (arguments[0] === void 0) {
          return;
        }
        if (shouldBailOut(arguments[0]) === true) {
          original.elementScroll.call(this, arguments[0].left !== void 0 ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== void 0 ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
          return;
        }
        this.scroll({
          left: ~~arguments[0].left + this.scrollLeft,
          top: ~~arguments[0].top + this.scrollTop,
          behavior: arguments[0].behavior
        });
      };
      Element2.prototype.scrollIntoView = function() {
        if (shouldBailOut(arguments[0]) === true) {
          original.scrollIntoView.call(this, arguments[0] === void 0 ? true : arguments[0]);
          return;
        }
        var scrollableParent = findScrollableParent(this);
        var parentRects = scrollableParent.getBoundingClientRect();
        var clientRects = this.getBoundingClientRect();
        if (scrollableParent !== d.body) {
          smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top);
          if (w.getComputedStyle(scrollableParent).position !== "fixed") {
            w.scrollBy({
              left: parentRects.left,
              top: parentRects.top,
              behavior: "smooth"
            });
          }
        } else {
          w.scrollBy({
            left: clientRects.left,
            top: clientRects.top,
            behavior: "smooth"
          });
        }
      };
    }
    if (typeof exports2 === "object" && typeof module2 !== "undefined") {
      module2.exports = {polyfill};
    } else {
      polyfill();
    }
  })();
});

// packages/toolkit/builds/module.js
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

// packages/$scroll/src/index.js
var import_smoothscroll_polyfill = __toModule(require_smoothscroll());
function src_default2(Alpine) {
  import_smoothscroll_polyfill.default.polyfill();
  Alpine.magic("scroll", () => {
    return function(target, options = {}) {
      const originalTarget = target;
      const offset = options.offset ? parseInt(options.offset, 10) : 0;
      delete options.offset;
      if (typeof target === "string" && /^[0-9]+?/g.test(target)) {
        target = parseInt(target, 10);
      }
      if (typeof target === "string") {
        target = document.querySelector(target);
      }
      if (target instanceof Element) {
        target = Math.floor(target.getBoundingClientRect().top + window.pageYOffset);
      }
      if (Number.isInteger(target)) {
        target = {
          top: target - offset,
          behavior: "smooth"
        };
      }
      if (typeof target !== "object") {
        throw Error("Unsupported $scroll target: ", originalTarget);
      }
      Object.assign(target, options);
      window.scroll(target);
    };
  });
}

// packages/$truncate/src/index.js
function src_default3(Alpine) {
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

// packages/$dbg/src/index.js
function src_default4(Alpine) {
  Alpine.magic("dbg", (el) => {
    return function(...args) {
      const raw = args.map((arg) => Alpine.raw(arg));
      console.log(...raw);
    };
  });
}

// packages/x-html/src/index.js
function src_default5(Alpine) {
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

// packages/toolkit/src/index.js
function src_default6(Alpine) {
  src_default(Alpine);
  src_default2(Alpine);
  src_default3(Alpine);
  src_default4(Alpine);
  src_default5(Alpine);
}

// packages/toolkit/builds/module.js
var module_default = src_default6;
