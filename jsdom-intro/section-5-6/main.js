const setIcon = () => {
  let getImageEl = document.getElementById("icon");
  getImageEl.setAttribute(
    "src",
    "https://res.cloudinary.com/dso5ztlee/image/upload/v1680015473/event-icon_f587s5.png"
  );
};

const removeIcon = () => {
  let getImageEl = document.getElementById("icon");
  getImageEl.removeAttribute("src");
};

const setBackground = () => {
  let getImageEl = document.getElementById("icon");
  getImageEl.style.backgroundColor = "green";
};

const getSize = () => {
  let getImageEl = document.getElementById("icon");
  let width = getImageEl.offsetWidth;
  let height = getImageEl.offsetHeight;
  let createEl = document.createElement("p");
  let createText = document.createTextNode(`Icon Size : ${width} X ${height}`);
  createEl.appendChild(createText);
  document.getElementById("size__text").appendChild(createEl);
};
