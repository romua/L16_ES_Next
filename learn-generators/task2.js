function *factorial(n){
    var rval=1;
    for (var i = 2; i <= n+1; i++) {
        yield rval;
        rval = rval * i;
    }

}

for (var n of factorial(5)) {
    console.log(n)
}
// 1, 2, 6, 24, 120

module.exports = factorial;