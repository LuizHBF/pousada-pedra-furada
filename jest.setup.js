require("@testing-library/jest-dom");
global.TextEncoder = require('util').TextEncoder;
global.TextDecoder = require('util').TextDecoder;
// 膆 Silencia o warning do React sobre JSX transform antigo
const originalWarn = console.warn;
console.warn = (...args) => {
if (
typeof args[0] === "string" &&
args[0].includes("using an outdated JSX transform")
) {
return;
}
originalWarn(...args);
};