const max = +process.argv[2];
let FizzBuzz = function*(){
    let cur = 0, step = 1;
    while (cur < max) {
        // Here we destruct the former state
        [cur] = [cur+step];
        // and yield (return) each step
        if (cur % 15 === 0) {
            yield 'FizzBuzz';
        } else if (cur % 3 === 0) {
            yield  'Fizz';
        } else if (cur % 5 === 0) {
            yield  'Buzz';
        } else {
            yield cur;
        }

    }
}();

for (var n of FizzBuzz) {
    console.log(n);
}
module.exports = FizzBuzz;