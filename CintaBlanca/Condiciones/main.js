// Mayor que
// >
// menor que
// <
// mayor o igual
// >=
// menor o igual
// <=
// igual
// ===
// diferente
// !==
// let edad = 10

//No hizo nada
// if ( edad >= 18 ) {
// console.log("Disfruta la pelicula");
// }else{
// console.log("Vete a ver las caricaturas");
// }

// Preguntarle al usuario su nombre; si su nombre tiene más de 5 letras, imprimir un ":D", si no imprimir "-_-".

// let nombre = prompt("Nombre");
// //No hizo nada a partir de aquí
// if (nombre.length > 4) {
// console.log(":D");
// }else{
// console.log("-_-");
// }

// ----------------------
 // No hizo nada
 // let edad = prompt("Edad");
 //
 // if (edad >= 18) {
 // 	console.log("Clasificación C");
 // }else if (edad >= 15) {
 // 	 else if se ejecuta si no se cumple la primera condición
 // 	console.log("Clasificación B15")
 // }else{
 // 	console.log("Clasificación B")
 // }

// ¿Por qué no tiene un prompt?
// if (pais ==="México") {
// 	console.log("Mexicano");
// }
// if (locacion === "ciudad") {
// 	console.log("Vive en ciudad")
// }

let edad = 28;
let ine = false;
let residencia = "México"

if (edad >= 18) {
	console.log("Tienes edad para votar");
	if (ine === true) {
		console.log("Podrías votar");
		if (residencia === "México") {
			console.log("ve a tu casilla para votar")
		}else{
			console.log("ve a la embajada")
		}
	}else{
		console.log("No puedes")
	}
}else{
	console.log("No puedes votar")
}

let player1
let player2

if(player1 ==="piedra"){
  if(player2 === "tijera"){
    console.log("Jugador 1 eligió " + player1 + ", gana jugador 1")
  }
}
