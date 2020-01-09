const add10 = num => num + 10;
const add100 = num => num + 100;

const minus10 = num => num - 10;
const minus100 = num => num - 100;

add10(add100(20)) // 130
minus10(minus100(130)) // 20

const composeTwoFunctions = (func1, func2) => arg => func2(func1(arg));

const add110 = composeTwoFunctions(add10, add100);
const minus110 = composeTwoFunctions(minus10, minus100);

add110(20) // 130
minus110(130) // 20







const compose = (...functions) => args => functions.reduceRight((arg, fn) => fn(arg), args);

const composedTestFunctions = compose(add100, add10, minus100) // === minus100(add10(add100(20)))

composedTestFunctions(20)  // 30
