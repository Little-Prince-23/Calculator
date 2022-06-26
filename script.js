/* -------------- V A R I A B L E S -------------- */
const light = document.querySelector(".light");
const dark = document.querySelector(".dark");
const container = document.querySelector(".container");
const part = document.querySelectorAll(".part");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
const included = document.querySelector(".included");
const result = document.querySelector(".result");
const item = document.querySelectorAll(".item");
const screen = document.querySelector(".screen");

/* -------------- E V E N T S -------------- */

//LIGHT MODE
light.addEventListener("click", light_mode);

//DARK MODE
dark.addEventListener("click", dark_mode);

/* -------------- F U N C T I O N S -------------- */

//DARK MODE FUNCTION
function dark_mode() {
  for (let i = 0; i < part.length; i++) {
    part[i].style.backgroundColor = "black";
  }
  container.style.backgroundColor = "black";
  included.style.color = "white";
  result.style.color = "white";
  footer.style.backgroundColor = "rgb(45, 35, 35)";
  screen.style.backgroundColor = "rgb(45, 35, 35";
  light.style.color = "white";
  dark.style.color = "white";

  for (let i = 0; i < item.length; i++) {
    item[i].style.backgroundColor = "rgb(39, 20, 20)";
    item[i].style.color = "white";
  }

  console.log(`Dark mode active`);
}

//LIGHT MODE FUNCTION
function light_mode() {
  for (let i = 0; i < part.length; i++) {
    part[i].style.backgroundColor = "white";
  }
  container.style.backgroundColor = "white";
  included.style.color = "black";
  result.style.color = "black";
  screen.style.backgroundColor = "#E1E1E1";
  light.style.color = "black";
  dark.style.color = "black";
  footer.style.backgroundColor = "#E1E1E1";

  for (let i = 0; i < item.length; i++) {
    item[i].style.backgroundColor = "white";
    item[i].style.color = "black";
  }

  console.log(`Light mode active`);
}
