document.addEventListener('DOMContentLoaded', function() {
    
    //Seleccionando los elementos de la interfax

    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    
    // Asignar eventos
    // el evento blur se ejecuta al abandonar un campo a otro del formulario.

    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);


    function validar (evento) {
   
     
        if (evento.target.value.trim() === '') {
          mostrarAlerta(`El campo ${evento.target.id} es obligatorio`,evento.target.parentElement); // de forma dinámica mostramos la alerta según el campo seleccionado.

        } else {
            console.log('si hay algo');
        }

    

    }

    function mostrarAlerta(mensaje, referencia) {

      // Generar alerta en HTML
      const error = document.createElement('p');
      error.textContent = mensaje;
      error.classList.add ('bg-red-600',  'text-center',  'text-white',  'p-2');

    // Inyectar el error al formulario
     referencia.appendChild(error);

      
    }
        
   
    });