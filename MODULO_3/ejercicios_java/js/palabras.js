function calcularLongitud(){//por declaración
	let palabra=document.getElementById("palabra").value
	let text=palabra.length
	alert("la extensión de la palabra "+palabra+"\n es "+text+" letras ")
}

function convertirMayus(){//por declaración
	let palabra=document.getElementById("palabra").value
	let text=palabra.toUpperCase()
	alert("la palabra en mayusculas es " +text+ "")
}
/*
let calcularLongitud=function (){//anonima
	let palabra=document.getElementById("palabra").value
	//let text=palabra.lenght
	alert("la extensión de la palabra "+palabra+"\n es" +palabra.lenght+" letras ")
}*/

function convertirMinus(){//por declaración
	let palabra=document.getElementById("palabra").value
	let text=palabra.toLowerCase()
	alert("la palabra en minusculas es " +text+ "")
}

/*
let calcularLongitud=function (){//anonima
	let palabra=document.getElementById("palabra").value
	//let text=palabra.lenght
	alert("la extensión de la palabra "+palabra+"\n es" +palabra.lenght+" letras ")
}*/

function extraerInicial(){//por declaración
	let palabra=document.getElementById("palabra").value
	let text=palabra.charAt(0)
	alert("la primera letra de la palabra es " +text+"")
}
/*
let calcularLongitud=function (){//anonima
	let palabra=document.getElementById("palabra").value
	//let text=palabra.lenght
	alert("la extensión de la palabra "+palabra+"\n es" +palabra.lenght+" letras ")
}*/

function concatenar(){
	let palabra=document.getElementById("palabra").value
	let ape=document.getElementById("ape").value
	let text=palabra.concat(" ", ape)
	alert ("las palabras unidas son " +text+ "" )

}


document.addEventListener('DOMContentLoaded', function(){
document.getElementById('formulario').addEventListener('submit',validarFormulario);
});

function validarFormulario(event){

	palabra1=/[a-zA-ZáéíóúÁÉÍÓÚñÑ]\s\w/

	event.preventDefault()

	let palabra=document.getElementById('palabra').value;

	if (palabra1.test(palabra)){
		console.log('la palabra es ' +palabra)
		return;
	}
	else{
		console.log('No cumple con los parámetros')
		return;
	}

	this.submit();
}