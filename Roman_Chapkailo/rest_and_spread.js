function rest_and_spread() {
    var rawArgs = process.argv.slice(2);
    var args = [];

    rawArgs.forEach(val => {
        let commaSep = val.split(',');
        commaSep.forEach(val => {
            if(val !== '') args.push(+val);
        });
    });

    let avg = (...args)=> {
        let sum =0;
        for (var i = 0; i < args.length; i++) {
            sum+=args[i];
        }
        return sum/args.length;
    }
    console.log(avg(...args));
}

module.exports = rest_and_spread;