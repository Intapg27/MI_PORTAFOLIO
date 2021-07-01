function mensaje(){// como atributo
	alert("la página se cargó completamente")
}

function MuestraMensaje(){//como funcion externa desde html
	console.log("Gracias por oprimir")// o también un alert
}

//document.getElementById("mibton").onclick=MuestraMensaje//evento semàntico-->


//const button=document.getElementById("button")
const caja=document.getElementById("caja")
const input=document.getElementById("input")
const link=document.getElementById("link")


//caja.addEventListener("mouseenter",()=>{
	//caja.style.background="green"
		//caja.classList.replace('red','green')
 //})

/*caja.addEventListener("mouseleave",()=>{
	caja.style.background=("red")
})*/

//caja.addEventListener("mouseleave",()=>{
	//caja.style.background="green"
	//caja.classList.remove("green")
	//caja.classList.addEventListener("red")
	//caja.classList.replace('green','red')
//})

//caja.addEventListener("mousedown", ()=>{
	console.log("usted hizo click sobre la caja")
//})

//caja.addEventListener("mouseup", ()=>{
	console.log("ya no estás oprimiendo nada")
//})

/*button.addEventListener("mousedown",()=>{
	console.log("pichaste el botón")
})*/

//caja.addEventListener("mousemove",()=>{
	console.log("usted está moviendo el mouse")
//})

//button.addEventListener("mousemove",()=>{
	//console.log("usted está sobre el botón")
//})

/*	console.log("usted está oprimiendo una tecla")
})*/


input.addEventListener("keyup",()=>{
	console.log("usted ya no está oprimiendo una tecla")
})

input.addEventListener("keypress",()=>{
	console.log("usted oprimió una tecla")
})


const form=document.getElementById("form")
//const input=document.getElementById("input")
//const button=document.getElementById("button")

input.addEventListener("keyup",(event)=>{
	console.log(input.value);
	console.log(event);
	console.log(event.target.attributes[1].nodeValue);
})

/*window.addEventListener("keyup",(e)=>{
	console.log("e.key")
})*/

const gallery=document.getElementById("gallery")

gallery.addEventListener("click", (event)=>{
	console.log(event)
	console.log(event.target.textContent);
	event.target.classList.add("red");
	event.target.classList.replace("red", "green");
})

link.addEventListener("click", (event)=>{
	console.log("prueba")
})


form.addEventListener("submit", (event)=>{
	event.preventDefault()
console.log(" Envío de la información")
})



//button.addEventListener("click",()=>{
	//input.value="Se envió la información"
//})
