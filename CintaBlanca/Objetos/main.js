let objeto = {
  key: "valor",
  nombre: "Daniel",
  edad: 23,
  email: "danielclt22@gmail.com"
  batch: [22, 23],
  direccion{
    calle: "Norte 40-A",
    exterior: "3623",
    colonia: "Siete de Noviembre"
  },
  saludo: () => {
    console.log("Hola, humano!")
  },
}

for(let i=0; i<objeto.batch.lenght; i++){
  console.log(objeto.batch[i])
}

// for in
for(let i in objeto.batch){
  console.log(objeto.batch[i])
}

console.log (objeto.nombre)

// console.log(Math.random())

objeto.saludo()
