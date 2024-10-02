function add(a, b) {
    return a + b;
}

function add_from(a, b) {
    let sum = 0;
    for (let i = a; i <= b; i++) {
        sum += i;
    }
    return sum;
}

let in1 = 5;
let in2 = 10;

console.log("add result: " + add(in1, in2));
console.log("add_from result: " + add_from(in1, in2));
