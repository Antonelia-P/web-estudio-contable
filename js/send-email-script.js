const form = document.getElementById('form');
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const mensaje = document.getElementById('message');

    form.addEventListener('submit', e => {
      e.preventDefault();
      
      checkInputs();
    });

    function checkInputs() {
      // trim to remove the whitespaces
      const nombreValue = nombre.value.trim();
      const emailValue = email.value.trim();
      const mensajeValue = mensaje.value.trim();
      // const passwordValue = password.value.trim();
      // const password2Value = password2.value.trim();
      
      if(nombreValue === '') {
        setErrorFor(nombre, 'Debe ingrsar su Nombre');
      } else {
        setSuccessFor(nombre);
      }
      
      if(emailValue === '') {
        setErrorFor(email, 'Debe ingrsar su Email');
      } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'El Email no es válido');
      } else {
        setSuccessFor(email);
      }
      
      if(mensajeValue === '') {
        setErrorFor(mensaje, 'Debe ingrsar un mensaje');
      } else {
        setSuccessFor(mensaje);
      }
      
      // if(passwordValue === '') {
      // 	setErrorFor(password, 'Password cannot be blank');
      // } else {
      // 	setSuccessFor(password);
      // }
      
      // if(password2Value === '') {
      // 	setErrorFor(password2, 'Password2 cannot be blank');
      // } else if(passwordValue !== password2Value) {
      // 	setErrorFor(password2, 'Passwords does not match');
      // } else{
      // 	setSuccessFor(password2);
      // }

      EnvioMailFormulario(nombre, email, mensaje);
    }

    function setErrorFor(input, message) {
      const formControl = input.parentElement;
      const small = formControl.querySelector('small');
      formControl.className = 'form-control error';
      small.innerText = message;
    }

    function setSuccessFor(input) {
      const formControl = input.parentElement;
      formControl.className = 'form-control success';
    }
      
    function isEmail(email) {
      return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
    }



    function EnvioMailFormulario(nombre, email, mensaje){
        
        if (nombre.parentElement.className == 'form-control success' &&
        email.parentElement.className == 'form-control success' && 
        mensaje.parentElement.className == 'form-control success'){
            
            var tempParams = {
                nombreForm: nombre.value.trim(),
                emailForm: email.value.trim(),
                mensajeForm: mensaje.value.trim()
            }

            //ENVIO EL MAIL
            window.emailjs.send('service_90rtw6h', 'template_ev6hio6', tempParams)
            .then(function(res){
                console.log('success', res.status);
                window.location.href="index.html";
            });
            // const resultadoSEndMAil = Email.send({
            //                 Host : "smtp.gmail.com",
            //                 Username : "whitelyonbnb@gmail.com",
            //                 Password : "whitelyon19bnb",
            //                 To : 'emanuel.higuera9@gmail.com',
            //                 From : "emanuel.higuera9@gmail.com",
            //                 Subject : "HOLA WILSON",
            //                 Body: `<h3 style='font-weight: bold;'>Nombre: <span style='font-weight: normal;'>${nombre}</span><h3/> 
            //                     <h3 style='font-weight: bold;'>Email: <span style='font-weight: normal;'>${mail}</span><h3/>
            //                     <h3 style='font-weight: bold;'>Teléfono: <span style='font-weight: normal;'>${telefono}<span/><h3/>              
            //                    `            
            // }).then(function(req){       
            //     debugger;
            //     console.log(req);
            //     window.location.href="index.html";
            // });
        }

      }