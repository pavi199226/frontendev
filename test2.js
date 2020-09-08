var a = 10;
const disp = {
  a: 20,
  b: 10,
  add: function () {
    var a = 10;
    console.log(this.a);
    return this;
  },
  bdd: function () {
    var b = 20;
    console.log(this.b);
  },
};

disp.add().bdd();
function fact(n) {
  if (n < 0) return;
  if (n === 1) return 1;
  return n * fact(n - 1);
}
console.log(fact(3));
const arr = ["i love"];
const arrb = ["hey"];
console.log(arr.map((item) => item.split("")));
console.log([...arrb, ...arr, "you"]);
const fn = (...args) => {
  return args;
};
console.log(fn(arr));
const newarr = [1, 2, 3, 4, 5, 5, 5, 5];
var s = new Set(newarr);
console.log(s);
var num = 123;
console.log(num.__proto__);
var sum = 0,
  m;
while (num > 0) {
  m = num % 10;
  sum += m;
  num = num / 10;
}
console.log(sum);
function resolveAfter2Seconds() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("resolved");
    }, 2000);
  });
}

async function asyncCall() {
  console.log("calling");
  const result = await resolveAfter2Seconds();
  console.log(result);
  // expected output: "resolved"
}

asyncCall();

function cb() {
  return new Promise((resolve) => {
    console.log("hey");
  });
}

async function display() {
  const disp = await cb();
  console.log(disp);
}
display();

const nameobj = {
  name: "mitu",
};
const show = function (name, age) {
  this.name = name;
  this.age = age;
};
show.apply(nameobj, ["hari", 32]);
console.log(nameobj);
