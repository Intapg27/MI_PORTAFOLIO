bot.addEventListener("click",event=>{
   event.preventDefault()//evitar que el formulario se envìe antes que se complete el evento

   let nombre=document.getElementById("name").value
   nombre=parseInt(nombre)

   let apellido=document.getElementById("last").value
   apellido=parseInt(apellido)

   let correcto=document.getElementById("ok")

   if(nombre==1 && apellido==1){
   	texto=`<p> Respuesta correcta <img src="imagenes/bien.png"></p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
   }

   else if( nombre==2 && apellido==2){
   	 texto=`<p> Respuesta correcta <img src="imagenes/bien.png"></p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
   }

   else if(nombre==3 && apellido==3){
   	 texto=`<p> Respuesta correcta <img src="imagenes/bien.png"></p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
   }

   else{
     texto=`<p> Respuesta incorrecta <img src="imagenes/marca.png"></p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")

   }
})

n3.addEventListener("click", event=>{
  event.preventDefault()

  let rta=document.getElementById("gatos")
  

  texto=`<p> Respuesta incorrecta <img src="imagenes/marca.png"></p>`
     rta.innerHTML=texto
     rta.style.setProperty("visibility", "visible")
     rta.style.setProperty("opacity", "1")
     rta.style.setProperty("transition", "all 2s  ease")
})

n4.addEventListener("click", event=>{
  event.preventDefault()
  
  let rta=document.getElementById("gatos")
  

  texto=`<p> Respuesta correcta <img src="imagenes/bien.png"></p>`
     rta.innerHTML=texto
     rta.style.setProperty("visibility", "visible")
     rta.style.setProperty("opacity", "1")
     rta.style.setProperty("transition", "all 2s  ease")     

})

n5.addEventListener("click", event=>{
  event.preventDefault()
  
  let rta=document.getElementById("gatos")
  

  texto=`<p> Respuesta es incorrecta <img src="imagenes/marca.png"></p>`
     rta.innerHTML=texto
     rta.style.setProperty("visibility", "visible")
     rta.style.setProperty("opacity", "1")
     rta.style.setProperty("transition", "all 2s  ease")     

})

push.addEventListener("click", event=>{
  event.preventDefault(); 

   let op=document.querySelector("input[name='op']:checked").value
   op=parseInt(op)

   let rp=document.getElementById("opcion")


   if (op===1) {
      texto=`<p> Respuesta correcta <img src="imagenes/bien.png"></p> `
     rp.innerHTML=texto
     rp.style.setProperty("visibility", "visible")
     rp.style.setProperty("opacity", "1")
     rp.style.setProperty("transition", "all 2s ease")
   }

   else {
    texto=`<p> Respuesta incorrecta <img src="imagenes/marca.png"></p> `
     rp.innerHTML=texto
     rp.style.setProperty("visibility", "visible")
     rp.style.setProperty("opacity", "1")
     rp.style.setProperty("transition", "all 2s  ease")
     //rp.setAttribute("class","prueba")
     }
})


pista.addEventListener("click", event=>{
  event.preventDefault();

  let ele=document.getElementById("ele")
  let quitar=document.getElementById("resp")

  texto=`<p> R__CT_N_G_L_ </p>`
     ele.innerHTML=texto
     ele.style.setProperty("visibility", "visible")
     ele.style.setProperty("opacity", "1")
     ele.style.setProperty("transition", "all 2s  ease")
     quitar.style.setProperty("visibility", "hidden")
})


resp.addEventListener("click", event=>{
  event.preventDefault();

  let res=document.getElementById("res")
  let quitar=document.getElementById("pista")

  texto=`<p> Soy el rectángulo! </p>`
     res.innerHTML=texto
     res.style.setProperty("visibility", "visible")
     res.style.setProperty("opacity", "1")
     res.style.setProperty("transition", "all 2s  ease")
     quitar.style.setProperty("visibility", "hidden")
})







 

