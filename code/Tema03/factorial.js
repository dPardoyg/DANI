// Función para calcular el factorial de un número utilizando un bucle "for"
function factorialFor(numero) {
  let resultado = 1;

  // Verificar si el número es 0 o 1, en ese caso el factorial es 1
  if (numero == 1 || numero == 0) {
    return resultado;
  } else {
    // Realizar el cálculo del factorial utilizando un bucle "for"
    for (let i = 2; i <= numero; i++) {
      resultado = resultado * i;
    }
  }

  return resultado;
}

// Función para calcular el factorial de un número de forma recursiva
function factorialRecursion(numero) {
  // Verificar si el número es 0 o 1, en ese caso el factorial es 1
  if (numero == 0 || numero == 1) {
    return 1;
  } else {
    // Realizar el cálculo del factorial de forma recursiva
    return numero * factorialRecursion(numero - 1);
  }
}

// Función para mostrar el menú y procesar las opciones
function mostrarMenu() {
  var option = prompt(
    "Selecciona una opcion: \n" +
    "1. Calcular factorial con FOR \n" +
    "2. Calcular factorial con Recursión"
  );

  switch (option) {
    case "1":
      var numero = prompt("Introduce un número");
      var res = factorialFor(numero);
      alert("El factorial es: " + res);
      mostrarMenu();
      break;
    case "2":
      var numero = prompt("Introduce un número");
      var res = factorialRecursion(numero);
      alert("El factorial es: " + res);
      mostrarMenu();
      break;
    default:
      alert("Opción inválida");
      break;
  }
}

// Llamamos a la función mostrarMenu para comenzar el programa
mostrarMenu();