function getTotal(one: number, two: number): number {
  return one + two;
}

const total = getTotal(1, 2);

function sayHello(): void {
  console.log("hello world");
}

function errorFuntion(): never {
  throw new Error();
  console.log("Hello World");
}
// errorFuntion();

function forNever(): never {
  while (true) {}
  console.log("Hello JSPang");
}
forNever();
