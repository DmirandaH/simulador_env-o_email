document.addEventListener('DOMContentLoaded', function() {
    
    //Seleccionando los elementos de la interfax

    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const inputEmailCC =document.querySelector('#email_cc')
    
    // Asignar eventos
    // el evento blur se ejecuta al abandonar un campo a otro del formulario.

    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);
    inputEmailCC.addEventListener('blur', validar);


    function validar (evento) { 
   
     
        if (evento.target.value.trim() === '') {
          mostrarAlerta(`El campo ${evento.target.id} es obligatorio`,evento.target.parentElement); // de forma dinámica mostramos la alerta según el campo seleccionado.
          return;
        }
          if (evento.target.id === 'email' && 'email_cc' && !validarEmail(evento.target.value)) {
            mostrarAlerta('El email no es válido', evento.target.parentElement);
            return;

          };

        limpiarAlerta (evento.target.parentElement);



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

});