let amigos = [];
let $listaAmigos = document.getElementById("listaAmigos");
let $resultado = document.getElementById("resultado");

const limpiar = id => document.getElementById(id).value = "";

function agregarAmigo() {
  const amigo = document.getElementById("amigo").value;

  amigo
    ? (amigos.push(amigo), limpiar("amigo"), imprimirNombre(amigos, $listaAmigos))
    : alert("Por favor, inserte un nombre.");
}

function crearNombre(e) {
  let li = document.createElement("li");
  li.textContent = e;
  return li;
}

function imprimirNombre(e, contenedor) {
  contenedor.innerHTML = "";

  for (i = 0; i < e.length; i++) {
    const text = crearNombre(e[i]);
    contenedor.appendChild(text);
  }
}

function sortearAmigo() {
  if (amigos.length > 0) {
    let amigoSecreto = amigos[Math.floor(Math.random() * amigos.length)];
    imprimirNombre([amigoSecreto], $resultado);
  } else {
    alert("Por favor, inserte al menos un nombre.");
  };
}