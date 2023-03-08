
const tarjetas = document.getElementById("tarjetas")
const url = "https://fakestoreapi.com/products"


const image = document.getElementById("imagen")


function carrusel (){
    if(indice<imagenes.length){
        image.src=imagenes[indice]
        indice++
    }else
    {
        indice=0
    }
}

let indice=0
const imagenes=[
    './imagenes/image1.jpg',
    './imagenes/image2.jpg',
    './imagenes/image3.jpg',
    './imagenes/image4.jpg'
]


setInterval(carrusel,2000)

let elementos = []

async function traer (){
    const respuesta = await fetch(url)
    const datos = await respuesta.json()
    elementos = Array.from(datos)
    
    datos.forEach(tarjeta => {
    tarjetas.innerHTML+= `<div class="container_tarjetas">
    <img src="${tarjeta.image}" alt="">
    <h3>${tarjeta.title}</h3>
    <p>${tarjeta.description}</p>
    <span class="container_tarjetas_precio">${tarjeta.price}$</span>
    <button class="container_tarjetas_boton" id='${tarjeta.id}'>Comprar</button>
    </div>`
    });
}
traer()

addEventListener('click', (event)=>{
    if(event.target.className == "container_tarjetas_boton"){
        document.getElementById('modal').style.display='flex'
        console.log(event.target)

        document.querySelector('#contenido').innerHTML=`<div class="container_tarjetas">
        <img src="${elementos[event.target.id -1].image}" alt="">
        <h3>${elementos[event.target.id -1].title}</h3>
        <p>${elementos[event.target.id -1].description}</p>
        <span class="container_tarjetas_precio">${elementos[event.target.id-1].price}$</span>
        <button class="container_tarjetas_boton boton_comprar" id='${elementos[event.target.id-1].id}'>Comprar</button>
        </div>`
    }

    if(event.target.className == 'container_tarjetas_boton boton_comprar'){
        alert('Compra exitosa')
        document.getElementById('modal').style.display='none'
    }
})

const botonCerrar =document.querySelector('.cerrar')
botonCerrar.addEventListener('click',()=>{
    document.getElementById('modal').style.display='none'
})