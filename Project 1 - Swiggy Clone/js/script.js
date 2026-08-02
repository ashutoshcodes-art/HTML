// Typing Animation

const text =
"Order food & groceries. Discover best restaurants. Swiggy it!";

const para = document.querySelector("p");

let index = 0;

para.innerHTML = "";

function typing(){

    if(index < text.length){

        para.innerHTML += text.charAt(index);

        index++;

        setTimeout(typing,45);

    }

}

typing();


// Fade Animation

const elements = document.querySelectorAll("div");

const observer = new IntersectionObserver((entries)=>{

entries.forEach((entry)=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

});

elements.forEach((el)=>{

el.classList.add("fade");

observer.observe(el);

});


// Button Animation

const button = document.querySelector("button");

button.addEventListener("mouseenter",()=>{

button.style.transform="scale(1.1)";

});

button.addEventListener("mouseleave",()=>{

button.style.transform="scale(1)";

});


// Logo Click Animation

const logo = document.querySelector("header img");

logo.addEventListener("click",()=>{

logo.animate(

[
{transform:"rotate(0deg)"},
{transform:"rotate(360deg)"}
],

{
duration:800
}

);

});


// Floating Mouse Effect

document.addEventListener("mousemove",(e)=>{

const left=document.querySelector("body>body div:first-child img");
const right=document.querySelector("body>body div:last-child img");

let x=(e.clientX/window.innerWidth-0.5)*20;
let y=(e.clientY/window.innerHeight-0.5)*20;

left.style.transform=`translate(${x}px,${y}px)`;

right.style.transform=`translate(${-x}px,${-y}px)`;

});