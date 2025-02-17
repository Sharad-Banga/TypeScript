"use strict";
function Delayed(fn) {
    setTimeout(fn, 1000);
}
Delayed(() => {
    console.log("hello");
});
