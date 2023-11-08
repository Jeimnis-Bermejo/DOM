//1//
let titulo = document.getElementById("tituloprincipal")

//2//
titulo.textContent="Frutas"

let colorHF = document.querySelectorAll(".color")


for (const naranja of colorHF) {
  naranja.classList.add("bg-orange-500")
}


let cambioFooter = document.getElementById("thefooter")
cambioFooter.textContent = "Jeimnis Bermejo Cohort 52"


const nuevodiv = document.getElementById("contenedor")

function  card(elemento) {
  return ` <article class=" border-2 border-black flex flex-col    h-[25rem] w-[26rem]  p-8 rounded-lg mt-5 item-center justify-center">
<img class=" object-contain rounded-xl h-64 "src="${elemento.foto}" alt="${elemento.nombre}">
 <h2  class= " text-black justify-items-start text-center p-1 font-bold  ">${elemento.nombre}</h2>
 <p class=" text-black text-left justify-items-start">${elemento.descripcion}</p>
</article>`
}
//7//
function agregarcard(array, contenedor) {
  let fruit = ""
  for (const frutos of array) {
    const cards = card(frutos)
    fruit += cards
  }
  contenedor.innerHTML += fruit
}
//8//
agregarcard(frutas, nuevodiv)

//9//
let divlista = document.getElementById("lista")

function lisfru(frutas) {
  divlista.innerHTML = `<h2 class="font-bold text-xl text-center">Frutas Dulces</h2>`
    const lista = document.createElement("ul")
  for (const fruta of frutas) {
    if (fruta.esDulce) {
     
      const listaFrutas = document.createElement("li")
      listaFrutas.textContent = fruta.nombre
      lista.appendChild(listaFrutas)
    }
  }
  return lista
}
divlista.appendChild(lisfru(frutas))

