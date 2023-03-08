const tarjetas = document.getElementById("tarjetas")
const url = "https://fakestoreapi.com/products"

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
        <img src="${elementos[1].image}" alt="">
        <h3>${elementos[1].title}</h3>
        <p>${elementos[1].description}</p>
        <span class="container_tarjetas_precio">${elementos[1].price}$</span>
        <button class="container_tarjetas_boton" id='${elementos[1].id}'>Comprar</button>
        </div>`
    }
})

const botonCerrar =document.querySelector('.cerrar')
botonCerrar.addEventListener('click',()=>{
    document.getElementById('modal').style.display='none'
})