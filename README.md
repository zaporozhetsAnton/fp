# Functional programming in js, examples.

Functional programming is not about lambda calculus, monads, morphisms, and combinators. It’s about having many small well-defined composable functions without mutations of global state, their arguments, and IO.

# ````Pure functions````

Pure functions are stable, consistent, and predictable. Given the same parameters, pure functions will always return the same result. We don’t need to think of situations when the same parameter has different results — because it will never happen.
* It returns the same result if given the same arguments (it is also referred as deterministic)
* It does not cause any observable side effects

# ````Immutability````

When data is immutable, its state cannot change after it’s created. If you want to change an immutable object, you can’t. Instead, you create a new object with the new value.


# ````Functions as first-class entities````

The idea of functions as first-class entities is that functions are also treated as values and used as data.

Functions as first-class entities can:
* refer to it from constants and variables
* pass it as a parameter to other functions
* return it as result from other functions

The idea is to treat functions as values and pass functions like data. This way we can combine different functions to create new functions with new behavior.

# ````Higher-order functions````

When we talk about higher-order functions, we mean a function that either:
* takes one or more functions as arguments, or
* returns a function as its result

# ````Functional Composition````

Function composition is a mechanism of combining multiple simple functions to build a more complicated one.

# ````Currying````

Is a technique for converting function calls with N arguments into chains of N function calls with a single argument for each function call

# Conclusion

The big advantage functional programming gives us is that we can reason about and test our programs much more easily. This can help us to be more productive, reduce bugs and write better software. It is not always possible to write everything in a purely functional manner but it is something to strive for.

## Articles with more information

- [Concepts of Functional Programming in Javascript](https://medium.com/the-renaissance-developer/concepts-of-functional-programming-in-javascript-6bc84220d2aa)
- [Pure functions in JavaScript](https://www.nicoespeon.com/en/2015/01/pure-functions-javascript/)
- [Function composition in JavaScript](https://www.codementor.io/@michelre/use-function-composition-in-javascript-gkmxos5mj)
- [Currying VS Partial](https://towardsdatascience.com/javascript-currying-vs-partial-application-4db5b2442be8)
- [Short and very cool 30 minutes video tutorial](https://egghead.io/courses/just-enough-functional-programming-in-javascript)
