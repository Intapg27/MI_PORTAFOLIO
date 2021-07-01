
/*let convertirTemp=function(){



  let grad=document.getElementById("grad").value
  grad=parseFloat(grad)
  let de=document.getElementById("de").value
  de=parseInt(de)
  let a=document.getElementById("a").value
  a=parseInt(a)

  let res

        
if (de===1 && a===2) { //1
	res=((9*grad/5)+32)
    alert("la conversion de celsius a fahrenheith es " +res)
}


else if(de===1 && a===3){//2
   res=(grad+273.15)
   alert("la conversion de celsius a kelvin es " +res)

}

else if(de===3 && a===1){//3
   res=(grad-273.15)
   alert("la conversion de kelvin a celsius es " +res)

}

else if(de===3 && a===2){//4
res=(9*(grad-273.15)+32)/5
alert("la conversion de kelvin a fahrenheith es " +res)
}

else if(de===2 && a===1){//5

res=(5*(grad-32))/9
alert("la conversion de fahrenheith a celsius es " +res)
}

else if(de===2 && a===3){//6
res=(5*(grad-32)/9)+273.15
alert("la conversion de fahrenheith a kelvin es " +res)
} 


else {
  alert("información no válida")
}

}*/

document.addEventListener('DOMContentLoaded', function(){
  document.getElementById('formulario').addEventListener('submit',validarFormulario);
});

function validarFormulario(event){
  event.preventDefault()


  let grad=document.getElementById("grad").value
  grad=parseFloat(grad)
  let de=document.getElementById("de").value
  de=parseInt(de)
  let a=document.getElementById("a").value
  a=parseInt(a)

        
 if (de===0 || a===0) {
                alert("hay campos sin llenar");
            } 
  else{
              alert("se realizó la conversión correctamente");
}
  this.submit();

}



