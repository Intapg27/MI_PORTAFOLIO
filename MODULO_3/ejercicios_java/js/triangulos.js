const form=document.querySelector('#formulario')//formulario
const fe1=document.querySelector('#lado1 .feedback')


lado=/[0-9]{1,4}/

	event.preventDefault()

	form.lado1.addEventListener('input',event=>{
    if (lado.test(event.target.value)){
    	form.lado1.setAttribute("class","success")
		fe1.textContent=""
		fe1.style.setProperty("visibility","hidden")
		fe1.style.setProperty("opacity","0")
	}
	    else{
		form.lado1/*ape*/.setAttribute("class","error")
		fe1.textContent="El valor no es numérico y no tiene los caracteres establecidos"
		fe1.style.setProperty("visibility","visible")
		fe1.style.setProperty("opacity","1")
	}

document.addEventListener('DOMContentLoaded', function(){
document.getElementById('formulario').addEventListener('submit',validarFormulario);
});

function validarFormulario(event){

	
	let l1=document.getElementById("lado1")
	let l2=document.getElementById("lado2")
	let l3=document.getElementById("lado3")


if(l1===0 && l2===0 && l3===0 ) {
     alert("hay campos vacíos, completa los valores")
	}
else {

	if (l1===l2 && l1===l3){
		alert ("según las medidas ingresadas, es un triángulo equilátero")
	}

	else if (l1===l2 && l2===l1 && l3!=l1 && l3!=l2) {
		alert("según las medidas ingresadas, es un triángulo isósceles")
	}

	else if (l1!=l2 && l1!=l3  &&  l2!=l1  && l2!=l3 && l3!=l1 && l3!=l2) {
		alert("según las medidas ingresadas, es un triángulo escaleno")
	}

}	
	this.submit();
}


