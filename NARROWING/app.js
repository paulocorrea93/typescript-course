"use strict";
// TYPE GUARD
function sum(a, b) {
    if (typeof a === "string" && typeof b === "string") {
        console.log(parseFloat(a) + parseFloat(b));
    }
    else if (typeof a === "number" && typeof b === "number") {
        console.log(a + b);
    }
    else {
        console.log("Impossível realizar operação.");
    }
}
sum("10", "20");
sum(20, 20);
sum("5", 3);
