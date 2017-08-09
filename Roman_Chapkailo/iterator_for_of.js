'use strict';

let range = {
    from: 1,
    to: process.argv[2],

    [Symbol.iterator]() {
        return this;
    },

    next() {
        if (this.current === undefined) {

            this.current = this.from;
        }

        if (this.current <= this.to) {
            if(this.current %3 === 0 && this.current %5 === 0){
                this.current++;
                return {
                    done: false,
                    value: 'FizzBuzz'
                };
            } else if(this.current %3 === 0){
                this.current++;
                return {
                    done: false,
                    value: 'Fizz'
                };
            } else if(this.current %5 === 0){
                this.current++;
                return {
                    done: false,
                    value: 'Buzz'
                };
            } else {
                return {
                    done: false,
                    value: this.current++
                };
            }
        } else {

            delete this.current;
            return {
                done: true
            };
        }
    }

};

for (let num of range) {
    console.log(num);
}

module.exports = range;