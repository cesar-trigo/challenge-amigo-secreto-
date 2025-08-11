let amigos = [];
let $listaAmigos = document.getElementById("listaAmigos");

const limpiar = id => document.getElementById(id).value = "";

function agregarAmigo() {
  const amigo = document.getElementById("amigo").value;

  amigo
    ? (amigos.push(amigo), limpiar("amigo"), imprimirNombre(amigos, $listaAmigos))
    : alert("Por favor, inserte un nombre.");

  console.log(amigos);
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
