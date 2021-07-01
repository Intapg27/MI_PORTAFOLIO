document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('formulario').addEventListener('submit',validarCosto)
});

	let cant=document.getElementById("tiempo").value
	let op=document.getElementById("tipo").value
	op=parseInt(op)
	let res 

function validarCosto(event){
  event.preventDefault()
 
 if (cant===0 || op===0) {
                alert("Por favor diligencia todos los campos");
            } 
  else{
              alert("el valor de su llamada es " +res );
}

function validarCosto(){


switch(op){

	case 1:
	
	vrminu=200
	res=parseInt(vrminu)*parseInt(cant)
	alert("el costo de la llamada que usted ha realizado es " +res)

	break;

	case 2:

	vrminu=300
	res=parseInt(vrminu)*parseInt(cant)
	alert("el costo de la llamada que usted ha realizado es " +res)

	break;

	default:
	alert("ingrese un valor valido")

}
}
 this.submit();

}


