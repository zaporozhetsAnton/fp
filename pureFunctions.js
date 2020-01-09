let PI = 3.14;

const calculateArea = (radius) => radius * radius * PI;

calculateArea(10); // returns 314.0

const calculateAreaPurely = (radius, pi) => radius * radius * pi;

calculateAreaPurely(10, PI); // returns 314.0










const yearEndEvaluation = () => {
  if (Math.random() > 0.5) {
    return "You get a raise!";
  } else {
    return "Better luck next year!";
  }
}
yearEndEvaluation()










let counter = 1;

const increaseCounter = value => {
  counter = value + 1;
}

increaseCounter(counter);
console.log(counter); // 2


const increaseCounterPurely = (value) => value + 1;

increaseCounterPurely(counter) // 2
console.log(counter); // 1
