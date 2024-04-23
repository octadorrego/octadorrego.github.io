const boton1=document.getElementById('boton1');
const boton2=document.getElementById('boton2');
const body=document.querySelector('body');
let sound = new Audio('jeff.mp4');

const a=document.getElementById('cookies');
const b=document.getElementById('this');

boton1.addEventListener('click', function(){
    body.classList.remove("body");
    body.classList.add("body2");
    sound.play();
    a.style.display = "none";
    b.style.display = "none";
    boton1.style.display = "none";
    boton2.style.display = "none";


});

boton2.addEventListener('click', function(){
    body.classList.remove("body");
    body.classList.add("body2");
    sound.play();
    a.style.display = "none";
    b.style.display = "none";
    boton1.style.display = "none";
    boton2.style.display = "none";
});
