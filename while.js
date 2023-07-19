//1. Crea un programa que pregunte al usuario un número. Mostrar los números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario.

const numero = parseInt(prompt("Introduce un número: "));

console.log("Los múltiplos de 5 hasta el número", numero, "son:");

let i = 1;
while (i <= numero) {
  if (i % 5 === 0) {
    console.log(i);
  }
  i++;
}

//2. Crea un programa que solicite al usuario 2 números entre 1 y 50. Posteriormente mostrar en consola los números del 1 hasta el 50, pero añadir el mensaje “¡Lotería!” solo al mostrar los números indicados por el usuario.



  // Solicitar al usuario los dos números
  let numero1 = parseInt(prompt("Ingresa el primer número (entre 1 y 50):"));
  let numero2 = parseInt(prompt("Ingresa el segundo número (entre 1 y 50):"));

  // Validar que los números estén entre 1 y 50
  while (isNaN(numero1) || isNaN(numero2) || numero1 < 1 || numero1 > 50 || numero2 < 1 || numero2 > 50) {
    console.log("Los números deben estar entre 1 y 50. Inténtalo de nuevo.");
    numero1 = parseInt(prompt("Ingresa el primer número (entre 1 y 50):"));
    numero2 = parseInt(prompt("Ingresa el segundo número (entre 1 y 50):"));
  }

  // Imprimir los números del 1 al 50 con el mensaje "¡Lotería!" para los números ingresados por el usuario
  let index = 1;
  while (index <= 50) {
    if (i === numero1 || iindex === numero2) {
      console.log(i + " ¡Lotería!");
    } else {
      console.log(i);
    }
    index++;
  }

  //3. Crea un programa que solicite al usuario números, si lo que este introduce es un número guardarlo en un arreglo. Para terminar el capturar el usuario debe ingresar el número 0. Finalmente mostrar la lista de números capturados en pantalla o en la consola.

 
function capturarNumeros() {
  const numeros = [];

  while (true) {
    const input = prompt("Ingresa un número (ingresa 0 para terminar):");

    if (input === null) {
      break; // El usuario presionó 'Cancelar'
    }

    const numero = parseInt(input);

    if (isNaN(numero)) {
      alert("Error: Debes ingresar un número entero válido.");
    } else {
      if (numero === 0) {
        break;
      }
      numeros.push(numero);
    }
  }

  return numeros;
}

function main() {
  alert("Bienvenido al programa de captura de números.");
  const listaNumeros = capturarNumeros();

  if (listaNumeros.length > 0) {
    alert("\nNúmeros capturados:\n" + listaNumeros.join(", "));
  } else {
    alert("No se capturaron números.");
  }
}

main();


//4.Crea un programa que solicite al usuario letras o palabras, si es así guardar el resultado. Para terminar de capturar el usuario no debe escribir valor alguno. Al terminar de capturar, mostrar en pantalla la concatenación de todas las palabras capturadas.


function capturarPalabras() {
  const palabras = [];

  while (true) {
    const entrada = prompt("Ingresa una palabra o letra (deja vacío para terminar):");

    if (entrada === null || entrada === "") {
      break;
    }

    palabras.push(entrada);
  }

  return palabras;
}

function main() {
  alert("Bienvenido al programa de captura de palabras.");
  const listaPalabras = capturarPalabras();

  if (listaPalabras.length > 0) {
    const resultado = listaPalabras.join(" ");
    alert("\nConcatenación de palabras capturadas:\n" + resultado);
  } else {
    alert("No se capturaron palabras.");
  }
}

main();

/*. Crea un programa que solicite al usuario un día de la semana (ej: lunes, jueves, domingo, etc). El programa mostrará un mensaje personalizado para cada día de la semana por medio de un alert. Y seguirá pidiendo al usuario introducir otro día. En caso de que el día introducido sea domingo mostrar al usuario el mensaje “Ve a descansar” y terminar la captura de información.
Entregables*/

function mostrarMensajePersonalizado(dia) {
  let mensaje = '';

  switch (dia.toLowerCase()) {
    case 'lunes':
      mensaje = 'Ánimo, es lunes. A darle con todo esta semana.';
      break;
    case 'martes':
      mensaje = '¡Vamos por el martes! Ya estamos en la mitad de la semana.';
      break;
    case 'miercoles':
      mensaje = 'Felicidades, ya es miércoles. ¡Casi llegamos!';
      break;
    case 'jueves':
      mensaje = '¡El viernes está cerca! Aguanta un poco más.';
      break;
    case 'viernes':
      mensaje = '¡Viernes! Es hora de disfrutar el fin de semana.';
      break;
    case 'sábado':
      mensaje = '¡Es sábado! Disfruta tu día al máximo.';
      break;
    case 'domingo':
      mensaje = 'Ve a descansar. Mañana empezamos una nueva semana.';
      break;
    default:
      mensaje = 'Día no reconocido. Introduce un día válido.';
      break;
  }

  alert(mensaje);
  return mensaje;
}

let diaUsuario;
do {
  diaUsuario = prompt('Introduce un día de la semana (lunes, martes, etc.). Si es domingo, el programa terminará.');
  if (diaUsuario) {
    mostrarMensajePersonalizado(diaUsuario);
  }
} while (diaUsuario && !diaUsuario.toLowerCase().includes('domingo'));
