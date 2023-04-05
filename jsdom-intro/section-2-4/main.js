console.log("Selecting Element");
let getMenu = document.getElementById("menu");
let getMenuItem = document.getElementsByClassName("menu__item");
let getAllMenu = document.getElementsByTagName("li");

console.log(getMenu);
console.log(getMenuItem);
console.log(getAllMenu);

console.log(" ");
console.log("Travesing Element");
let getMenuParent = getMenu.parentNode;
let getMenuDua = document.querySelector(".menu__item");
let getMenuTiga = getMenuDua.nextElementSibling;
let getMenuSatu = getMenu.firstElementChild;

console.log(getMenuParent);
console.log(getMenuTiga);
console.log(getMenuSatu);

//Manipulating Element
const createSubtitle = () => {
  let createEl = document.createElement("p");
  let createText = document.createTextNode(
    "Subtitle : Javascript DOM Manipulating Element"
  );
  createEl.appendChild(createText);
  document.getElementById("subtitle__wrapper").appendChild(createEl);
};
