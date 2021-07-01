let form=document.querySelector('#formu')
let feedcor=document.querySelector('#cor .feedback')//desde el id de cor quiero acceder al feedback el feedor es el nombre que le asigno
/*let feedtel=document.querySelector('#tel .feedback')*/

//validación mail

let expcor=/^[A-Za-z0-9_.-]@\w+\.[a-z]+.?[a-z]+/

form.mail.addEventListener('input', event=>{// voy a acceder al formulario, con form que es su id,
	event.preventDefault()

if(expcor.test(event.target.value)){//testear con la variable a la que se le está haciendo el evento
	form.mail.setAttribute('class','success')//a la seccion correo haga lo siguiente ponga color o haga algo
	feedcor.style.setProperty('visibility','hidden')
	feedcor.style.setProperty('opacity','0')
}

else{
	form.mail.setAttribute('class','error')
	feedcor.textContent='ingrese una forma de correo válida'
	feedcor.style.setProperty('visibility','visible')
	feedcor.style.setProperty('opacity','1')
  }
})

//----------------------------------------------------------------validación de telefono----------------------------------------------------------------------------//

let exptel=/^[0-9]+/

form.tel.addEventListener('input', event=>{
  event.preventDefault()


if(exptel.test(event.target.value)){//testear con la variable a la que se le está haciendo el evento
	form.tel.setAttribute('class','success')//a la seccion correo haga lo siguiente ponga color o haga algo
	feedtel.style.setProperty('visibility','hidden')
	feedtel.style.setProperty('opacity','0')
}


else{
	form.tel.setAtrribute('class','error')
	feedtel.textContent='ingrese una forma de correo válida'
	feedtel.style.setProperty('visibility','visible')
	feedtel.style.setProperty('opacity','1')
  }  
})


//validacion Tipo de solicitud select//

//validación de la descripción//



