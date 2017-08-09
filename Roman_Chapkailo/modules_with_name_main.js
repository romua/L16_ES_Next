function modules_with_name_main() {
    var arg1 = process.argv[2];
    var arg2 = process.argv[3];
    import {PI} from './modules_with_name';
    import {sqrt} from './modules_with_name';
    import {square} from './modules_with_name';

    console.log(PI);
    console.log(sqrt(+arg1));
    console.log(square(+arg2));
}

module.exports = modules_with_name_main;
