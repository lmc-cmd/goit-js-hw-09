!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},r={},a=t.parcelRequire7bc7;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in r){var t=r[e];delete r[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,t){r[e]=t},t.parcelRequire7bc7=a);var l=a("iU1Pc");document.querySelector(".form").addEventListener("submit",(function(t){t.preventDefault(),count=0,startDelay=t.currentTarget.elements.delay.value,stepDelay=t.currentTarget.elements.step.value,delay=stepDelay;var n=t.currentTarget.elements.amount.value;setInterval,intervalId=setInterval((function(){delay=stepDelay*count+ +startDelay,count++,count==n&&clearInterval(intervalId),function(t,n){Math.random()>.3?e(l).Notify.success("Fullfield promise ".concat(t," in ").concat(n," seconds")):e(l).Notify.failure("Reject promise ".concat(t," in ").concat(n," seconds"))}(count,delay)}),delay)}))}();
//# sourceMappingURL=03-promises.f6283324.js.map
