

let edadIngresada = prompt("Ingrese su edad por favor:");

                      //Verificar la elección del usuario
   if(edadIngresada >= 18){
     alert("su edad es de " +  edadIngresada + " años, usted es  mayor de edad");

   }else if (edadIngresada >0 &&  edadIngresada <18){ 
     alert("su edad es de " + edadIngresada + " años, usted  es menor de edad ");
   }else if(edadIngresada <= 0){
     alert("La edad ingresada debe ser mayor a 0 !!")
   }else{
     alert("La edad ingresada es incorrecta !!")
   }
 const NOMBRE= prompt ("Ingrese su nombre por favor:");

 alert("su nombre  es " + NOMBRE + " y tiene " + edadIngresada + " años "); 



  // Función para preguntar al usuario sobre su preferencia de procesador
  function elegirProcesador() {
    
    let elegir = prompt(NOMBRE + ", ¿prefiere Ryzen o Intel?");

        // Verificar la elección del usuario
    if (elegir === "ryzen" || elegir === "intel") {
     

         // Mostrar un mensaje indicando la elección del usuario
      alert("¡Excelente elección! Ha elegido " + elegir + ".");

      // Solicitar al usuario que especifique el modelo del procesador
      let modeloProcesador;
      if (elegir === "ryzen") {
        modeloProcesador = prompt("Elija un modelo de Ryzen (7, 5 o 3):");
      } else {
        modeloProcesador = prompt("Elija un modelo de Intel (i7, i5 o i3):");
      }

      // Elegir el modelo de procesador ingresado
      switch (modeloProcesador) {

        case "7":
          
        case "5":
          
        case "3":
          
        case "i7":
          
        case "i5":
          
        case "i3":
          
          let procesadorElegido = elegir + " " + modeloProcesador;
          let tipoProcesador = elegir;

          alert("Ha elegido " + procesadorElegido + ". ¡Excelente elección!");

          mostrarMensajeFinal(edadIngresada, NOMBRE, procesadorElegido, tipoProcesador);
          break;
        default:
          // Si el modelo es incorrecto, mustra  un mensaje de error
          alert("El modelo de procesador ingresado no es válido. Por favor, elija entre las opciones disponibles.");
      }
    } else {
      // Si la elección es incorrecto, muentra un mensaje de error
      alert("No ha ingresado una opción válida. Por favor, elija entre Ryzen o Intel.");
    }
  }

  // Función para mostrar el mensaje final con todos los datos
  function mostrarMensajeFinal( nombre, procesador, tipo) {
    alert("¡Gracias por participar, " + NOMBRE + "!  Segun la información proporcionada has elegido un " + tipo + " "  );
  }

  // Llamar a la función para iniciar el proceso de elección de procesador
  elegirProcesador();









 



















