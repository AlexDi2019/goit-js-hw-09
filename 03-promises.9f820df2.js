function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},r=t.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){o[e]=t},t.parcelRequired7c6=r);var i=r("iQIUW");const l={form:document.querySelector(".form")};function u(e,t){return new Promise(((n,o)=>{const r=Math.random()>.3;setTimeout((()=>{r?n({position:e,delay:t}):o({position:e,delay:t})}),t)}))}l.form.addEventListener("submit",(function(t){t.preventDefault();const{delay:n,step:o,amount:r}=t.currentTarget.elements;let s=Number(n.value);const a=Number(o.value),d=Number(r.value);for(let t=1;t<=d;t++)u(t,s).then((({position:t,delay:n})=>{e(i).success(`✅ Fulfilled promise ${t} in ${n}ms`)})).catch((({position:t,delay:n})=>{e(i).failure(`❌ Rejected promise ${t} in ${n}ms`)})),s+=a;l.form.reset()}));
//# sourceMappingURL=03-promises.9f820df2.js.map