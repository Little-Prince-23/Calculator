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
const transitions_effect = document.querySelectorAll(".transition");

/* -------------- T R A N S I T I O N -------------- */
transition_effect.forEach(function(item){
  item.style.transition="all 1s"
})

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
    item[i].style.transition = "all 1s";
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
    item[i].style.transition = "all 1s";
  }

  console.log(`Light mode active`);
}

/* ------------ C A L C U L A T E ----------- */

number_3 = document.querySelector(".num-3");
number_3.addEventListener("click", function(){
    included.textContent="3";
    console.log("3")
})

number_2 = document.querySelector(".num-2");
number_2.addEventListener("click", function(a){
    included.textContent="2";
    console.log("2")
})

plus = document.querySelector(".plus");
plus.addEventListener("click", function(){
  included.textContent="3";
  console.log(`+`);
})

equal = document.querySelector(".equal");
equal.addEventListener("click", function(){
  included.textContent="";
  console.log("=");
})
