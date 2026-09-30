function obtenerIniciales(nombreCompleto) {
	if (typeof nombreCompleto !== "string" || nombreCompleto.trim() === "") {
		return "Entrada inválida";
	}

	const palabras = nombreCompleto.trim().split(" ").filter((palabra) => palabra !== "");
	const iniciales = palabras.map((palabra) => palabra[0]);

	return iniciales.join("").toUpperCase();
}

console.log(obtenerIniciales("ana maria lópez"));
console.log(obtenerIniciales("juan perez"));
console.log(obtenerIniciales("  luis   fernando   gómez  "));
console.log(obtenerIniciales(""));

