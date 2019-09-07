// // alert(XD")
//
// //ECMA 5
// function despedida(){
//   console.log("Adiós")
// }
//
// const saludo = () =>{
//   console.log("Hola")
// }
//
// // saludo ()
// // despedida()
//
// // const yaf = () =>{
// //   console.log("Te amito")
// // }
// //
// // yaf()
//
// // const cuadrado = () =>{
// //   let resulrado = numero * numero;
// //   console.log(resultado);
// // }
// //
// // cuadrado(2);
// // cuadrado(5);
// // cuadrado(6);
//
// // const parImpar = () =>{
// //   let numero = prompt("Ingresa un número");
// //   if(numero % 2 === 0){
// //     console.log("El número es par")
// //   }else{
// //     console.log("El número es impar")
// //   }
// // }
// //
// // parImpar()
//
// const concatenar = (x, y, z) =>{
//   let concatenacion = x + y + z
//   console.log(concatenacion);
// }
//
// concatenar("ola", "ke", "aze")

let alto = prompt("¿Cuál es el alto del rectángulo?")
let ancho = prompt("¿Cuál es el ancho del rectángulo?")

const calculaArea = () => {
  let area = alto * ancho;
  console.log(area);
}

calculaArea();

// const calculaArea = (largo, base) => {
//   let area = largo * base;
//   console.log(area);
// }
//
// calculaArea(4, 2);
