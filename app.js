
// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
	const input = document.getElementById('amigo');
	const nombre = input.value.trim();
	
	// Validar que el campo no esté vacío
	if (nombre === "") {
		alert("Por favor, inserte un nombre.");
		return;
	}
	
	// Validar que el nombre no esté duplicado
	if (amigos.includes(nombre)) {
		alert("El nombre ya fue registrado en la lista de amigos");
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
	
	// Usar bucle for para recorrer el arreglo amigos
	for (let i = 0; i < amigos.length; i++) {
		const li = document.createElement('li');
		li.textContent = amigos[i];
		lista.appendChild(li);
	}
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
	
	// Mostrar el botón de reiniciar después del sorteo
	const botonReiniciar = document.getElementById('botonReiniciar');
	botonReiniciar.style.display = 'block';
}

// Función para reiniciar el juego
function reiniciarJuego() {
	// Limpiar el array de amigos
	amigos = [];
	
	// Limpiar la lista de amigos en pantalla
	const lista = document.getElementById('listaAmigos');
	lista.innerHTML = "";
	
	// Limpiar el resultado del sorteo
	const resultado = document.getElementById('resultado');
	resultado.innerHTML = "";
	
	// Limpiar el campo de entrada
	const input = document.getElementById('amigo');
	input.value = "";
	
	// Ocultar el botón de reiniciar
	const botonReiniciar = document.getElementById('botonReiniciar');
	botonReiniciar.style.display = 'none';
}

