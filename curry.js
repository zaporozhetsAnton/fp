const add = x => y => x + y

const add3 = add(3)

add3(4) // 7






const modulo = x => y => y % x

const isOdd = modulo(2)

isOdd(2) // 0
isOdd(3) // 1
isOdd(4) // 0






// Partial application

const addition = (x, y) => x + y

const plus5 = addition.bind(null, 5)

plus5(10) // 15
