function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},n={},l=t.parcelRequire7bc7;null==l&&((l=function(e){if(e in r)return r[e].exports;if(e in n){var t=n[e];delete n[e];var l={id:e,exports:{}};return r[e]=l,t.call(l.exports,l,l.exports),l.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},t.parcelRequire7bc7=l);var o=l("eWCmQ");document.querySelector(".form").addEventListener("submit",(t=>{t.preventDefault();let r=0,n=t.currentTarget.elements.delay.value,l=t.currentTarget.elements.step.value,i=l,a=t.currentTarget.elements.amount.value;setTimeout((()=>{setInterval,intervalId=setInterval((function(){i=l*r+ +n,r++,r==a&&clearInterval(intervalId),function(t,r){Math.random()>.3?e(o).Notify.success(`Fullfield promise ${t} in ${r} ms`):e(o).Notify.failure(`Reject promise ${t} in ${r} ms`)}(r,i)}),i)}),n)}));
//# sourceMappingURL=03-promises.fd56d778.js.map
