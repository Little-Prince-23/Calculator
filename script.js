/* -------------- V A R I A B L E S -------------- */
const light = document.querySelector(".light");
const container = document.querySelector(".container");
const part = document.querySelectorAll(".part");
const main = document.querySelector(".main");
const footer = document.querySelector(".header");
const included = document.querySelector(".included");
const result = document.querySelector(".result");
const item = document.querySelectorAll(".item");


/* -------------- E V E N T S -------------- */
light.addEventListener("click", function(){

    for(let i=0; i<part.length; i++){
        part[i].style.backgroundColor="white";
    }
    container.style.backgroundColor="white";
    included.style.color="black";
    result.style.color="black";

    for(let i=0; i<item.length; i++){
        item[i].style.backgroundColor="white";
        item[i].style.color="black"
    }


    console.log(`Light duymesine basildi`);
})

