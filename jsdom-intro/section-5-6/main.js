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
