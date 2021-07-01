bot.addEventListener("click",event=>{
   event.preventDefault()//evitar que el formulario se envìe antes que se complete el evento


   let dia=document.getElementById("name").value
   dia=parseInt(dia)


   let mes=document.getElementById("last").value
   mes=parseInt(mes)

   let correcto=document.getElementById("ok")

  switch (mes) {

        case 1:
            if (dia > 21) {
                   texto=`<p>Tu signo es Acuario <img src="imagenes/acuario.png"></p>`
                   correcto.innerHTML=texto
                   correcto.style.setProperty("visibility", "visible")
                   correcto.style.setProperty("opacity", "1")
                   correcto.style.setProperty("transition", "all 2s  ease")
                   }

                    else {
                   texto=`<p>Tu signo es Capricornio <img src="imagenes/capri.png"></p>`
                   correcto.innerHTML=texto
                   correcto.style.setProperty("visibility", "visible")
                   correcto.style.setProperty("opacity", "1")
                   correcto.style.setProperty("transition", "all 2s  ease")
                    }
        break;
        case 2:
                if (dia > 19){
                   texto=`<p>Tu signo es piscis <img src="imagenes/picis.png"></p>`
                   correcto.innerHTML=texto
                   correcto.style.setProperty("visibility", "visible")
                   correcto.style.setProperty("opacity", "1")
                   correcto.style.setProperty("transition", "all 2s  ease")
                } 
                else {
                   texto=`<p>Tu signo es acuario <img src="imagenes/acuario.png"></p>`
                   correcto.innerHTML=texto
                   correcto.style.setProperty("visibility", "visible")
                   correcto.style.setProperty("opacity", "1")
                   correcto.style.setProperty("transition", "all 2s  ease")
                }
        break;
        case 3:
                if (dia > 20) {
                    texto=`<p>Tu signo es Aries <img src="imagenes/picis.png"></p>`
                   correcto.innerHTML=texto
                   correcto.style.setProperty("visibility", "visible")
                   correcto.style.setProperty("opacity", "1")
                   correcto.style.setProperty("transition", "all 2s  ease")
                } 
                else {
                   texto=`<p>Tu signo es Piscis <img src="imagenes/picis.png"></p>`
                   correcto.innerHTML=texto
                   correcto.style.setProperty("visibility", "visible")
                   correcto.style.setProperty("opacity", "1")
                   correcto.style.setProperty("transition", "all 2s  ease")
                }
        break;
        case 4:
                if (dia > 20) {
                    texto=`<p>Tu signo es Tauro <img src="imagenes/tauro.png"></p>`
                   correcto.innerHTML=texto
                   correcto.style.setProperty("visibility", "visible")
                   correcto.style.setProperty("opacity", "1")
                   correcto.style.setProperty("transition", "all 2s  ease")
                } 
                else {
                   texto=`<p>Tu signo es Aries <img src="imagenes/aries.png"></p>`
                   correcto.innerHTML=texto
                   correcto.style.setProperty("visibility", "visible")
                   correcto.style.setProperty("opacity", "1")
                   correcto.style.setProperty("transition", "all 2s  ease")
                }
        break;
        case 5:
                if (dia > 21) {
                   texto=`<p>Tu signo es Géminis <img src="imagenes/gemini.png"></p>`
                   correcto.innerHTML=texto
                   correcto.style.setProperty("visibility", "visible")
                   correcto.style.setProperty("opacity", "1")
                   correcto.style.setProperty("transition", "all 2s  ease")
                } 
                else {
                   texto=`<p>Tu signo es Tauro <img src="imagenes/tauro.png"></p>`
                   correcto.innerHTML=texto
                   correcto.style.setProperty("visibility", "visible")
                   correcto.style.setProperty("opacity", "1")
                   correcto.style.setProperty("transition", "all 2s  ease")
                }
        break;
        case 6:
                if (dia > 20) {
                    texto=`<p>Tu signo es Cáncer <img src="imagenes/cancer.png"></p>`
                   correcto.innerHTML=texto
                   correcto.style.setProperty("visibility", "visible")
                   correcto.style.setProperty("opacity", "1")
                   correcto.style.setProperty("transition", "all 2s  ease")
                } 
                else {
                   texto=`<p>Tu signo es Géminis <img src="imagenes/gemini.png"></p>`
                   correcto.innerHTML=texto
                   correcto.style.setProperty("visibility", "visible")
                   correcto.style.setProperty("opacity", "1")
                   correcto.style.setProperty("transition", "all 2s  ease")
                }
        break;
        case 7:
                if (dia > 22) {
                   texto=`<p>Tu signo es Leo <img src="imagenes/leo.png"></p>`
                   correcto.innerHTML=texto
                   correcto.style.setProperty("visibility", "visible")
                   correcto.style.setProperty("opacity", "1")
                   correcto.style.setProperty("transition", "all 2s  ease")
                } 
                else {
                   texto=`<p>Tu signo es Cáncer <img src="imagenes/cancer.png"></p>`
                   correcto.innerHTML=texto
                   correcto.style.setProperty("visibility", "visible")
                   correcto.style.setProperty("opacity", "1")
                   correcto.style.setProperty("transition", "all 2s  ease")
                }
        break;
        case 8:
                if (dia > 21) {
                   texto=`<p>Tu signo es Virgo <img src="imagenes/Virgo.png"></p>`
                   correcto.innerHTML=texto
                   correcto.style.setProperty("visibility", "visible")
                   correcto.style.setProperty("opacity", "1")
                   correcto.style.setProperty("transition", "all 2s  ease")
                } 
                else {
                   texto=`<p>Tu signo es Leo <img src="imagenes/leo.png"></p>`
                   correcto.innerHTML=texto
                   correcto.style.setProperty("visibility", "visible")
                   correcto.style.setProperty("opacity", "1")
                   correcto.style.setProperty("transition", "all 2s  ease")
                }
        break;
        case 9:
                if (dia > 22) {
                   texto=`<p>Tu signo es Libra <img src="imagenes/libra.png"></p>`
                   correcto.innerHTML=texto
                   correcto.style.setProperty("visibility", "visible")
                   correcto.style.setProperty("opacity", "1")
                   correcto.style.setProperty("transition", "all 2s  ease")
                } 
                else {
                   texto=`<p>Tu signo es Virgo <img src="imagenes/Virgo.png"></p>`
                   correcto.innerHTML=texto
                   correcto.style.setProperty("visibility", "visible")
                   correcto.style.setProperty("opacity", "1")
                   correcto.style.setProperty("transition", "all 2s  ease")
                }
        break;
        case 10:
                if (dia > 22) {
                   texto=`<p>Tu signo es Escorpión <img src="imagenes/scorpio.png"></p>`
                   correcto.innerHTML=texto
                   correcto.style.setProperty("visibility", "visible")
                   correcto.style.setProperty("opacity", "1")
                   correcto.style.setProperty("transition", "all 2s  ease")
                } 
                else {
                   texto=`<p>Tu signo es Libra <img src="imagenes/libra.png"></p>`
                   correcto.innerHTML=texto
                   correcto.style.setProperty("visibility", "visible")
                   correcto.style.setProperty("opacity", "1")
                   correcto.style.setProperty("transition", "all 2s  ease")
                }
        break;
        case 11:
                if (dia > 21) {
                   texto=`<p>Tu signo es Sagitario <img src="imagenes/sagi.png"></p>`
                   correcto.innerHTML=texto
                   correcto.style.setProperty("visibility", "visible")
                   correcto.style.setProperty("opacity", "1")
                   correcto.style.setProperty("transition", "all 2s  ease")
                } 
                else {
                   texto=`<p>Tu signo es Escorpión <img src="imagenes/scorpio.png"></p>`
                   correcto.innerHTML=texto
                   correcto.style.setProperty("visibility", "visible")
                   correcto.style.setProperty("opacity", "1")
                   correcto.style.setProperty("transition", "all 2s  ease")
                }
        break;
        case 12:
                if (dia > 21) {
                   texto=`<p>Tu signo es Capricornio <img src="imagenes/capri.png"></p>`
                   correcto.innerHTML=texto
                   correcto.style.setProperty("visibility", "visible")
                   correcto.style.setProperty("opacity", "1")
                   correcto.style.setProperty("transition", "all 2s  ease")
                } 
                else {
                    texto=`<p>Tu signo es Sagitario <img src="imagenes/sagi.png"></p>`
                   correcto.innerHTML=texto
                   correcto.style.setProperty("visibility", "visible")
                   correcto.style.setProperty("opacity", "1")
                   correcto.style.setProperty("transition", "all 2s  ease")
                }
    }
})