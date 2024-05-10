let btn=document.querySelector("#Btn");
let colo=document.querySelector("#gcolor");

btn.addEventListener("click",()=>{
    let inp = document.querySelector("#Head");
    let red=Math.floor(Math.random()*256);
    let green=Math.floor(Math.random()*256);
    let blue=Math.floor(Math.random()*256);

    let color=`rgb(${red},${green},${blue})`;

    inp.innerText=color;
    colo.style.backgroundColor=color;
})