let amigos = [];

const limpiar = id => document.getElementById(id).value = "";

function agregarAmigo() {
  const amigo = document.getElementById("amigo").value;
  
  amigo 
  ? (amigos.push(amigo), limpiar("amigo")) 
  : alert("Por favor, inserte un nombre.");

  console.log(amigos);
}
