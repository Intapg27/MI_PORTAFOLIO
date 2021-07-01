  bot.addEventListener("click",event=>{
   event.preventDefault()//evitar que el formulario se envìe antes que se complete el evento


   let ts=document.getElementById("name").value
   ts=parseInt(ts)

   let os=document.getElementById("last").value
   os=parseInt(os)

   let correcto=document.getElementById("ok")
   console.log(ts==1 && os==1)

if (ts==1 && os==1){
  texto=`<p>Los aries también suelen estar convencidos, que tienen razón, por lo que las discusiones entre ambos pueden ser largas y complicadas.
  Sin embargo, si la pareja concentra sus energías en ser constructivos en lugar de competir entre sí, la relación puede tener también su parte positiva</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}


if (ts==1 && os==2 || ts==2 && os==1){
  texto=`<p>'A aries le afectan mucho los problemas y se puede encontrar bloqueado. En este sentido ambos signos pueden ser complementarios, 
  pero es muy probable que Tauro termine necesitando más apoyo y que Aries se sienta asfixiado ante tanta necesidad. A Aries le interesan las ideas globales y actividades mundiales, mientras que a Piscis le preocupan mucho más las emociones y realización personal.'</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==1 && os==3 || ts==3 && os==1){
  texto=`<p> Gèminis termine necesitando más apoyo y que Aries se sienta asfixiado ante tanta necesidad. A Acuario le interesan las ideas globales y actividades mundiales, mientras que a Piscis le preocupan mucho más las emociones y realización personal.'</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==1 && os==4 || ts==4 && os==1){
  texto=`<p>Tauro se resiste a los cambios, le gustan las cosas tal como son. Aries, en cambio, prefiere ir al ritmo de los tiempos y evolucionar, cambiar con el mundo.'
        escribir 'Aunque puede que esto no sea muy grave, podría causar algunos problemas de compatibilidad.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==1 && os==5 || ts==5 && os==1){
  texto=`<p>Tauro se resiste a los cambios, le gustan las cosas tal como son. Acuario, en cambio, prefiere ir al ritmo de los tiempos y evolucionar, cambiar con el mundo.'
      Aunque puede que esto no sea muy grave, podría causar algunos problemas de compatibilidad.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==1 && os==5 || ts==5 && os==1){
  texto=`<p>Una pareja de aries y leo disfrutan en la compañía del otro. Les encanta hablar durante horas, y comparten los mismos intereses,'
        las mismas aficiones, las mismas opiniones e incluso los mismos amigos.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==1 && os==6 || ts==6 && os==1){
  texto=`<p>Una pareja de Aries y virgo disfrutan en la compañía del otro. Les encanta hablar durante horas, y comparten los mismos intereses,'
        las mismas aficiones, las mismas opiniones e incluso los mismos amigos.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}


if (ts==1 && os==7 || ts==7 && os==1){
  texto=`<p>Una pareja de aries y libra disfrutan en la compañía del otro. Les encanta hablar durante horas, y comparten los mismos intereses,'
        las mismas aficiones, las mismas opiniones e incluso los mismos amigos.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==1 && os==8 || ts==8 && os==1){
  texto=`<p>Una pareja de aries y escorpio disfrutan en la compañía del otro. Les encanta hablar durante horas, y comparten los mismos intereses,'
        las mismas aficiones, las mismas opiniones e incluso los mismos amigos.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==1 && os==9 || ts==9 && os==1){
  texto=`<p>El gusto por la libertad y la independencia de Aries, frente a la rigidez y conservadurismo de sagitario, puede ser una combinación un poco difícil de llevar,'
      sobre todo para los Cáncer a los que les puede causar inseguridad y resentimiento</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==1 && os==10 || ts==10 && os==1){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==1 && os==11 || ts==11 && os==1){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==1 && os==12 || ts==12 && os==1){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}


if (ts==2 && os==2){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==2 && os==3 || ts==3 && os==2){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==2 && os==4 || ts==4 && os==2){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==2 && os==5 || ts==5 && os==2){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==2 && os==6 || ts==6 && os==2){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==2 && os==7 || ts==7 && os==2){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==2 && os==8 || ts==8 && os==2){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==2 && os==9 || ts==9 && os==2){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==2 && os==10 || ts==10 && os==2){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==2 && os==11 || ts==11 && os==2){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==2 && os==12 || ts==12 && os==2){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}


if (ts==3 && os==3){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==3 && os==4 || ts==4 && os==3){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==3 && os==5 || ts==5 && os==3){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==3 && os==6 || ts==6 && os==3){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==3 && os==7 || ts==7 && os==3){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==3 && os==8 || ts==8 && os==3){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==3 && os==9 || ts==9 && os==3){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==3 && os==10 || ts==10 && os==3){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}
if (ts==3 && os==11 || ts==11 && os==3){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==3 && os==12 || ts==12 && os==3){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}



if (ts==4 && os==4){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==4 && os==6 || ts==6 && os==4){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==4 && os==7 || ts==7 && os==4){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==4 && os==8 || ts==8 && os==4){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==4 && os==9 || ts==9 && os==4){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==4 && os==10 || ts==10 && os==4){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==4 && os==11 || ts==11 && os==4){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==4 && os==12 || ts==12 && os==4){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}



if (ts==5 && os==5){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==5 && os==6 || ts==6 && os==5){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==5 && os==7 || ts==7 && os==5){
  texto=`<p></p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==5 && os==8 || ts==8 && os==5){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==5 && os==9 || ts==9 && os==5){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==5 && os==10 || ts==10 && os==5){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==5 && os==11 || ts==11 && os==5){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==5 && os==12 || ts==12 && os==5){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}


if (ts==6 && os==6){
  texto=`<p></p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==6 && os==7 || ts==7 && os==6){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==6 && os==8 || ts==8 && os==6){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==6 && os==9 || ts==9 && os==6){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==6 && os==10 || ts==10 && os==6){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==6 && os==11 || ts==11 && os==6){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==6 && os==12 || ts==12 && os==6){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}


if (ts==7 && os==7){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==7 && os==8 || ts==8 && os==7){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==7 && os==9 || ts==9 && os==7){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==7 && os==10 || ts==10 && os==7){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==7 && os==11 || ts==11 && os==7){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==7 && os==12 || ts==12 && os==7){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}


if (ts==8 && os==8){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==8 && os==9 || ts==9 && os==8){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==8 && os==10 || ts==10 && os==8){
  texto=`<p></p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==8 && os==11 || ts==11 && os==8){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==8 && os==12 || ts==12 && os==8){
  texto=`<p></p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}




if (ts==9 && os==9){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==9 && os==10 || ts==9 && os==10){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==9 && os==11 || ts==11 && os==10){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==9 && os==12 || ts==12 && os==9){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}



if (ts==10 && os==10){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==10 && os==11 || ts==11 && os==10){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==10 && os==12 || ts==12 && os==10){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}



if (ts==11 && os==11){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

if (ts==11 && os==12 || ts==12 && os==11){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}



if (ts==12 && os==12){
  texto=`<p>Los cuatro elementos están en cada uno de nosotros y describen los cuatro tipos de personalidad únicas asociadas con los signos astrológicos.
   Los cuatro elementos del zodiaco demuestran su profunda influencia en base a los rasgos de carácter, las emociones, el comportamiento y el pensamiento.
No hay signos del zodíaco en la astrología que sean incompatibles, lo que significa que la relación entre dos signos puede ser más o menos compatible.</p>`
     correcto.innerHTML=texto
     correcto.style.setProperty("visibility", "visible")
     correcto.style.setProperty("opacity", "1")
     correcto.style.setProperty("transition", "all 2s  ease")
}

})