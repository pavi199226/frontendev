const x = [
  {
    id: 1,
    name: "mitu",
  },
  {
    id: 2,
    name: "hari",
  },
  {
    id: 3,
    name: "pavi",
  },
];

console.dir(x);
const obj = {
  id: 1,
  name: "mithraa",
  address: {
    number: 51,
    street: "ixelles",
  },
};
console.dir(obj);
for (let val in obj) {
  console.log(val);
}
for (let val of x) {
  console.log(val);
}
const y = [1, 2, 3];
for (var val of y) {
  console.log(val);
}
const {
  id,
  name,
  address: { number, street },
} = obj;
console.log(id, name, number, street);
const flat = x.flat(1).reduce((a, v) => a + v.id, 0);
const filter = x.filter((v) => {
  if (v.id == 1) {
    return v;
  }
});
const z = ["a", "b", "c"];
//z.splice(1, 0, "hi");
console.log(flat, filter, z);
const Parents = function (mom, dad) {
  (this.mom = mom), (this.dad = dad);
  this.show = () => {
    console.log(this.mom, this.dad);
  };
};
Parents.prototype.show = () => {
  console.log(this.mom, this.dad);
};
const Child = function (mom, dad, child) {
  Parents.call(this, mom, dad);
  this.child = child;
  this.showChild = () => {
    console.log(this.mom, this.dad, this.child);
  };
};
Child.prototype = Object.create(Parents.prototype);
var childObj = new Child("pavi", "hari", "mitu");
childObj.showChild();
console.dir(Child);
const display = {
  x: 1,
  y: 1,
  showx() {
    console.log(this.x);
    return this;
  },
  showy() {
    console.log(this.y);
  },
};
display.showx().showy();
class Movies {
  constructor(name) {
    this.name = name;
  }
  display() {
    return this.name;
  }
}
window.name = "sai";
class Language extends Movies {
  constructor(name, language) {
    super(name);
    this.language = language;
  }
  review() {
    return this.name + this.language;
  }
}
const review = new Language("minnale", "tamil");
const showMovie = review.review();
console.log(showMovie);
const varArray = [1, [2, 3, 3], [4, 5, 5]];
const arr21 = varArray.flat();
const arr22 = new Set(arr21);
console.log([...arr22]);
const callobj = {
  name: "mitu",
  age: 2,
};
const setfunc = () => {
  this.name = name;
  this.age = age;
};
const boundfunc = setfunc.bind(callobj);
console.dir(boundfunc);
