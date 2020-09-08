var input = document.querySelector("input");
var button = document.querySelector("button");
var ul = document.querySelector("ul");

button.addEventListener("click", (e) => {
  e.preventDefault();
  var item = input.value;
  var text = document.createTextNode(item);
  var close = document.createTextNode("X");
  var closebutton = document.createElement("button");
  closebutton.appendChild(close);
  closebutton.addEventListener("click", () => {
    li.remove(closebutton);
  });
  //li.appendChild(closebutton);
  console.log(closebutton);
  var li = document.createElement("li");

  li.appendChild(text);

  ul.append(li);
  li.append(closebutton);
});
