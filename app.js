const Car = {
  name: "mitu",
  getName() {
    return this.name;
  },
};
console.log(Car.getName);
const output = Car.getName;
console.log(output());
const x = function (name) {
  return (this.name = name);
};
console.log(x("hari"));
const obj = {
  a: 1,
  b: 2,
  geta() {
    console.log(this.a);
    return this;
  },
  getb() {
    console.log(this.b);
  },
};
console.log(obj.geta().getb());
let id = setInterval(() => {
  console.log(1);
}, 1000);
setTimeout(() => {
  clearInterval(id);
}, 2001);
let prom = new Promise((resolve, reject) => {
  let i = "true";
  if (i) {
    resolve("hi");
  } else {
    reject("hello");
  }
});
prom
  .then((res) => {
    console.log(res);
  })
  .catch((rej) => console.log(rej));
var item = "hey    ";
console.log(item.length);
let v = 1;
function v1() {
  console.log(v);
}
function v2() {
  let v = 2;
  v1();
}
v1();
let obj1 = {
  // func: setInterval(() => {
  //   console.log("hello");
  // }, 1000),
};
//obj1 = null;
//console.log(obj1);
const func = (...arguments) => {
  console.log(arguments);
};
func(1, 2, 3);
const age = 21;
function getage() {
  const age = 20;
  console.log(age);
}
getage();
const arr = [1, 2, 3];
console.dir(arr);
var obj2 = {
  a: 1,
  b: 2,
  c: 3,
};
for (let i of Object.keys(obj2)) {
  console.log(i, obj2[i]);
}
const arr2 = arr;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] == arr2[i]) {
    arr2.slice(i);
  } else {
    console.log(arr2[i]);
  }
}
