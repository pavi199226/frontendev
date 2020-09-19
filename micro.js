var n = 5;
const a = [
  [1, 2, 10],
  [2, 3, 20],
  [2, 5, 25],
];

const devarr = a.flat();

devarr.splice();
const begarr = a.flat();

begarr.splice(0, "10", 0, 0, 0, 0, 0);
var length = begarr.length;
for (let [index, item] of begarr.entries()) {
  if (index == 0) {
    item = item + 10;
  }
  if (index == 1) {
    item = item + 10 + 20;
  }
  if (index == 1 || index == 2) {
    item = item + 20;
  }
  if (index == 2 || index == 3 || index == 4) {
    item = item + 25;
  }
}
var newarr = [0, 0, 0, 0, 0];
let newarrlen = newarr.length;
let len = a.length;

for (let i = 0; i <= len - 1; i++) {
  for (let j = 0; j <= a[i].length - 1; j++) {}
}
console.log(newarr);
