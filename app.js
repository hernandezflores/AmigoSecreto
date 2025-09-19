// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombres = [];

function asignarTextoElemeno (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

//Agrega nombres desde el boton añadir se vincula el html
function agregarAmigo() {
  let nombreAmigo = document.getElementById("amigo").value.trim();

  // Solo acepta letras y espacios
  let soloLetras = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/;

  if (nombreAmigo === "" || !soloLetras.test(nombreAmigo)) {
    alert("No se permiten números, caracteres especiales, ni campos vacíos. Ingrese un nombre válido.");
    limpiarCaja();
    return;
  }

  // Verificar si el nombre ya existe (ignorando mayúsculas/minúsculas)
  let nombreNormalizado = nombreAmigo.toLowerCase();
  let nombresNormalizados = nombres.map(n => n.toLowerCase());

  if (nombresNormalizados.includes(nombreNormalizado)) {
    alert("Este nombre ya fue ingresado. Por favor, agregue un segundo nombre o apellido para diferenciarlo.");
    limpiarCaja();
    return;
  }

  // Si es válido y no está repetido, lo agregamos
  nombres.push(nombreAmigo);
  console.log(nombres);

  const lista = document.getElementById("listaAmigos");
  const nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = nombreAmigo;
  lista.appendChild(nuevoElemento);

  limpiarCaja();
}


function limpiarCaja(){
    document.querySelector("#amigo").value = "";
}

function actualizarLista() {

  const lista = document.getElementById("listaAmigos");

  lista.innerHTML = "";

  for (let i = 0; i < nombres.length; i++) {
    
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = nombres[i];

    lista.appendChild(nuevoElemento);
  }
}

function sortearAmigo() {
  if (nombres.length === 0) {
    alert("No hay nombres para sortear");
    return;
  }

  let sortear = Math.floor(Math.random() * nombres.length);
  let nombreSeleccionado = nombres[sortear];

  // Mostrar el resultado
  asignarTextoElemeno("h2", `Tu amigo secreto es: ${nombreSeleccionado}`);

  // Limpiar la lista visual
  document.getElementById("listaAmigos").innerHTML = "";

  // Opcional: vaciar el array si no querés que se vuelva a sortear
  // nombres = [];

  document.getElementById("botonReiniciar").style.display = "inline-block";
}

function reiniciarJuego() {
  // Vaciar el array
  nombres = [];

  // Limpiar la lista en pantalla
  document.getElementById("listaAmigos").innerHTML = "";

  // Borrar el resultado del sorteo
  asignarTextoElemeno("h2", "");

  // Limpiar caja de texto
  limpiarCaja();

  console.log("Juego reiniciado");

  document.getElementById("botonReiniciar").style.display = "none";
}

document.getElementById("amigo").addEventListener("keydown", (event) => { 
  if (event.key === "Enter"){
    event.preventDefault();
    agregarAmigo();
  }
})