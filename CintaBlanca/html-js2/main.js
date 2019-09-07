//alert("XD")
const baseJS = document.getElementById("basehtml")
const alturaJS = document.getElementById("alturahtml")
const calcularJS = document.getElementById("calcularhtml")

const calcularArea = ()=>{
  let base = baseJS.value
  let altura = alturaJS.value

  let resultado = base * altura;

  console.log(resultado);
}

calcularJS.addEventListener("Click", calcularArea)
