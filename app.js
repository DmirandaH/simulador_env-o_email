document.addEventListener('DOMContentLoaded', function() {

  const email = {
    email: '',
    asunto: '',
    email_cc: '',
    mensaje: ''

  }

  console.log(email);

   
    //Seleccionando los elementos de la interfax

    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const inputEmailCC = document.querySelector('#email_cc');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]')
    const btnReset = document.querySelector('#formulario button[type="reset"]')
    
    // Asignar eventos
    // el evento blur se ejecuta al abandonar un campo a otro del formulario.
    // input me permite ocultar al alerta en tiempo real.

    inputEmail.addEventListener('input', validar);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);
    inputEmailCC.addEventListener('input', validar);

    btnReset.addEventListener('click', function(evento) {

      evento.preventDefault();

      // reinciar el objeto
      email.email = '',
      email_cc.email_cc = '',
      asunto.asunto = '',
      mensaje.mensaje = '';

      formulario.reset();
      comprobarEmail();

    })


    function validar (evento) { 
 
        if (evento.target.value.trim() === '') {
          mostrarAlerta(`El campo ${evento.target.id} es obligatorio`,evento.target.parentElement); // de forma dinámica mostramos la alerta según el campo seleccionado.
          email[evento.target.name] = '';
          comprobarEmail();
          return;
        }
          if ((evento.target.id === 'email' || evento.target.id === 'email_cc') && !validarEmail(evento.target.value)) {
            mostrarAlerta('El email no es válido', evento.target.parentElement);
            email[evento.target.name] = '';
            comprobarEmail();
            return;

          };

          limpiarAlerta (evento.target.parentElement);

          // Asignar los valores

          email[evento.target.name] = evento.target.value.trim().toLowerCase();

     
          //Comprobar el obejto de email
          comprobarEmail();


    }


    function mostrarAlerta(mensaje, referencia) {
      limpiarAlerta(referencia);


  

       // Generar alerta en HTML
      const error = document.createElement('p'); 
      error.textContent = mensaje;
      error.classList.add('bg-red-600',  'text-center',  'text-white',  'p-2');

    // Inyectar el error al formulario
      referencia.appendChild(error);
  
     }   
    
    function limpiarAlerta(referencia) {

    // Comprueba si ya existe una alerta
      const alerta = referencia.querySelector('.bg-red-600');
      if(alerta) {
          alerta.remove();
        }     
    }

    function validarEmail(email) {
      //Expresión regular para validar un correo, busca un patron en una cadena de texto o nuḿero (ejemplo, usuario@dominio.net / com)
      const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ 

      const resultado = regex.test(email);
      return resultado;
    }


    function comprobarEmail() {
       if(Object.values(email).includes('')) {
           btnSubmit.classList.add('opacity-50');
           btnSubmit.disabled = true;
           return

       }  btnSubmit.classList.remove('opacity-50');
          btnSubmit.disabled = false;

    }  

});