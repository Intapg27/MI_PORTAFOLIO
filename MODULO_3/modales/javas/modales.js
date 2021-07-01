function calcularAreaCi(){

	let radio=document.getElementById("radio").value
	let resultado=document.getElementById("resultado")

	let area=3.14*radio*radio;

	resultado.innerHTML=`El área del circulo es: ${area.toFixed(2)}cm<sup>2<sup>`

}

function calcularArea2(){

	let lad=document.getElementById("lado").value
	let resultado=document.getElementById("resultad")

	let carea= lad*4;

	resultado.innerHTML=`El área del cuadrado es: ${carea}cm<sup>2<sup>`

}
function calcularArea3(){

	let base=document.getElementById("base").value
	let altura=document.getElementById("alto").value
	let resultado=document.getElementById("result")

	let rarea= base*altura;

	resultado.innerHTML=`El área del rectángulo es: ${rarea}cm<sup>2<sup>`

}

function calcularArea4(){

	let baset=document.getElementById("baset").value
	let alturat=document.getElementById("altot").value
	let resultado=document.getElementById("resul")

	let tarea= (baset*alturat)/2 ;

	resultado.innerHTML=`El área del triángulo es: ${tarea}cm<sup>2<sup>`

}



