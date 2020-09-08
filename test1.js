/*const arr = [1, 2, 3];
const newarr = [1, 2, 3];
const marr = [];
//newarr.push(arr.map((item) => item));
arr.forEach((index, item) => {
  console.log(arr[item], newarr[item]);
  if (arr[item] == newarr[item]) {
    console.log("same array");
  } else {
    console.log("not same");
  }
});*/
function fibo(n) {
  let a = 0,
    b = 1;
  let sum = 0;
  console.log(a);
  console.log(b);
  for (let i = 0; i <= n; n--) {
    sum = a + b;
    console.log(sum);
    b = a;
    a = sum;
  }
}
const sum = fibo(5);
const arr = [1, 2, 3];
const obj = [
  {
    name: "hari",
    age: 32,
  },
  {
    name: "mitu",
    age: 2,
  },
  {
    name: "pavi",
    age: 27,
  },
];
const cb = (a, b) => {
  return b.age - a.age;
};
obj.sort(cb);
console.log(obj);
const person = {
  name: "mitu",
  parents: ["hari", "pavi"],
  toString: function () {
    this.parents.forEach(
      //(name) => {
      //  console.log(that.name, name);
      //}
      function (name) {
        console.log(this.name, name);
      }.bind(this)
    );
  },
};
console.log((globalThis.name = "sai"));
person.toString();
