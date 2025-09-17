// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];

//Agrega nombres desde el boton añadir se vincula el html
function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value;
  
  if (nombreAmigo === ""){
    alert("Ingresa un nombre valido");
  } else {
    nombres.push(nombreAmigo);
    console.log(nombres);
  }

    const lista = document.getElementById("listaAmigos");
    const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = nombreAmigo;
        lista.appendChild(nuevoElemento);
    limpiarCaja();

}