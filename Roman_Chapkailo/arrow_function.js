
function arrow_functions() {
    var inputs = process.argv.slice(2);
    var result = inputs.map(a=>a[0]).reduce((a,b)=>(a.toUpperCase()+b.toUpperCase()));
    console.log(result);
}
module.exports = arrow_functions;