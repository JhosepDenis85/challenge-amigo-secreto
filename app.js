
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
	const input = document.getElementById('amigo');
	const nombre = input.value.trim();
	if (nombre === "") {
		alert("Por favor, inserte un nombre.");
		return;
	}
	amigos.push(nombre);
	input.value = "";
	actualizarLista();
}

// Función para actualizar la lista de amigos en pantalla
function actualizarLista() {
	const lista = document.getElementById('listaAmigos');
	lista.innerHTML = "";
	amigos.forEach(function(amigo) {
		const li = document.createElement('li');
		li.textContent = amigo;
		lista.appendChild(li);
	});
}

// Función para sortear el amigo secreto
function sortearAmigo() {
	if (amigos.length === 0) {
		alert("Agregue al menos un amigo para realizar el sorteo.");
		return;
	}
	const indice = Math.floor(Math.random() * amigos.length);
	const amigoSorteado = amigos[indice];
	const resultado = document.getElementById('resultado');
	resultado.innerHTML = "";
	const li = document.createElement('li');
	li.innerHTML = `El amigo secreto es: <strong>${amigoSorteado}</strong>`;
	resultado.appendChild(li);
}

