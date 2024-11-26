let boton=document.getElementById("button")

boton.addEventListener("click",function(event){
event.preventDefault();

let nuevoid=document.createElement("div");
nuevoid.innerHTML="Boton creado";

let resultado=document.getElementById("resultadoDiv")
nuevoid.classList.add("borde-negro");
let contenido=document.getElementById("botones");
contenido.appendChild(nuevoid);
})