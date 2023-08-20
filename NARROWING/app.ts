// TYPE GUARD

function sum(a: number | string, b: number | string) {
  if (typeof a === "string" && typeof b === "string") {
    console.log(parseFloat(a) + parseFloat(b));
  } else if (typeof a === "number" && typeof b === "number") {
    console.log(a + b);
  } else {
    console.log("Impossível realizar operação.");
  }
}

sum("10", "20");
sum(20, 20);
sum("5", 3);

// CHECANDO SE O VALOR EXISTE

function operations(arr: number[], operator?: string | undefined) {
  if (operator) {
    if (operator === "sum") {
      const sum = arr.reduce((i, total) => i + total);
      console.log(sum);
    } else if (operator === "multiply") {
      const multiply = arr.reduce((i, total) => i * total);
      console.log(multiply)
    }
  } else {
    console.log("Por favor defina uma operação.");
  }
}

operations([1, 2, 3]);
operations([1, 2, 3], "sum")
operations([5, 4], "multiply")