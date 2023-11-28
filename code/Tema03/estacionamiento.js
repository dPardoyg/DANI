// Clase Estacionamiento
class Estacionamiento {
  constructor(capacidad) {
    this.capacidad = capacidad;
    this.espaciosOcupados = Array(capacidad).fill(false);
  }

  // Función para ingresar un vehículo al estacionamiento
  ingresarVehiculo() {
    const indiceLibre = this.espaciosOcupados.indexOf(false);
    if (indiceLibre !== -1) {
      this.espaciosOcupados[indiceLibre] = true;
      alert(`Vehículo ingresado al estacionamiento. Lugar ${indiceLibre + 1} ocupado.`);
    } else {
      alert("El estacionamiento está lleno. No se puede ingresar el vehículo.");
    }
  }

  // Función para sacar un vehículo del estacionamiento
  sacarVehiculo(lugar) {
    if (lugar >= 1 && lugar <= this.capacidad) {
      const indice = lugar - 1;
      if (this.espaciosOcupados[indice]) {
        this.espaciosOcupados[indice] = false;
        alert(`Vehículo sacado del estacionamiento. Lugar ${lugar} libre.`);
      } else {
        alert(`El lugar ${lugar} está libre. No hay vehículo para sacar.`);
      }
    } else {
      alert("Lugar inválido.");
    }
  }

  // Función para mostrar la capacidad y el estado de cada lugar del estacionamiento
  mostrarEstado() {
    let estadoEstacionamiento = `Capacidad del estacionamiento: ${this.capacidad}\nEstado del estacionamiento:\n`;

    this.espaciosOcupados.forEach((ocupado, indice) => {
      const lugar = indice + 1;
      estadoEstacionamiento += `Lugar ${lugar}: ${ocupado ? "Ocupado" : "Libre"}\n`;
    });

    alert(estadoEstacionamiento);
  }
}

// Función para mostrar el menú utilizando recursión
function mostrarMenu(estacionamiento) {
  obtenerOpcion();

  function obtenerOpcion() {
    const option = prompt(
      "Selecciona una opción:\n" +
      "1. Ingresar vehículo\n" +
      "2. Sacar vehículo\n" +
      "3. Mostrar estado del estacionamiento\n" +
      "4. Salir"
    );

    procesarOpcion(option);
  }

  function procesarOpcion(option) {
    switch (option) {
      case "1":
        estacionamiento.ingresarVehiculo();
        obtenerOpcion(); // Llamada recursiva
        break;
      case "2":
        const lugarASacar = prompt("Ingresa el número del lugar que deseas sacar:");
        estacionamiento.sacarVehiculo(Number(lugarASacar));
        obtenerOpcion(); // Llamada recursiva
        break;
      case "3":
        estacionamiento.mostrarEstado();
        obtenerOpcion(); // Llamada recursiva
        break;
      case "4":
        alert("Saliendo del sistema de estacionamiento.");
        break;
      default:
        alert("Opción inválida");
        obtenerOpcion(); // Llamada recursiva
        break;
    }
  }
}

// Crear un estacionamiento con capacidad de 20 espacios
const estacionamiento = new Estacionamiento(20);

// Iniciar el sistema de estacionamiento
mostrarMenu(estacionamiento);