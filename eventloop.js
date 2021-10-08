const bar = () => console.log("bar");

const baz = () => console.log("baz");

const foo = () => {
  console.log("foo");
  setTimeout(bar, 0);
  baz();
  console.log("End of Program");
};

console.log("Change After Eslint");
console.log("I'm new here.");

foo();
