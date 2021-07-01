 document.addEventListener('DOMContentLoaded', function(){
 document.getElementById('formulario').addEventListener('submit',operarNum);
});


let operarNum=function(){


let numero1=document.getElementById("n1").value
numero1=parseInt(numero1)

let numero2=document.getElementById("n2").value
numero2=parseInt(numero2)

let op=document.getElementById("oper").value
op=parseInt(op)

let resultado 
resultado=parseInt(resultado)

switch (op){

	case 1:

    resultado=numero1+numero2
    alert("la suma de " +numero1+" +  " +numero2+" es : " + resultado)
	break; 
    
   case 2:
    resultado=numero1-numero2
     alert("la resta de " +numero2+" - " +numero2+" es : " + resultado)

	break;
   

	case 3:

	resultado=numero1*numero2
     alert("la multiplicación de "+numero1+" * " +numero2+" es : " + resultado)

	break;

	case 4:

	resultado=numero1/numero2
     alert("la division de " +numero1+" / " +numero2+" es : " + resultado)

	break;

	default:

     alert("la opción que usted eligió no es válida")

	break;

}
}

