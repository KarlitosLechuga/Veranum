$("#formularioin").validate({
    rules: {
  
        "txtcorreo": {
            required: true,
            email: true,
        },
  
        "txtcontraseña": {
            required: true,
            minlength: 5
        },
  
  
    }, // --> Fin de reglas
    messages: {
  
      "txtcorreo": {
          required: 'Ingrese email',
          email: 'El formato del correo no está correcto',
      },
      "txtcontraseña": {
          required: 'Ingrese Contraseña',
          minlength: 'El largo de la contraseña debe ser al menos 5 caracteres'
      },
  
    } //-->Fin de mensajes
    
  
  });
  
  $("#Ingresar").on("click", function () {
    alert("Inicio de Sesión correcto");
  });