class Grafo {
  constructor() {
    this.vertices = new Set();
    this.aristas = {};
  }
//Funcion para agregar un vertice
  agregarVertice(vertice) {
    this.vertices.add(vertice);
    this.aristas[vertice] = {};
  }
  //Funcion para agregar una arista
  agregarArista(origen, destino, peso) {
    this.aristas[origen][destino] = peso;
    this.aristas[destino][origen] = peso;
  }

  dijkstra(origen) {
    const distancias = {};
    const visitados = new Set();
    const previos = {};

    for (const vertice of this.vertices) {
      distancias[vertice] = Infinity;
    }
    distancias[origen] = 0;

    while (visitados.size < this.vertices.size) {
      let verticeActual = null;
      let distanciaMinima = Infinity;

      // Encuentra el vértice no visitado con la distancia mínima
      for (const vertice in distancias) {
        if (!visitados.has(vertice) && distancias[vertice] < distanciaMinima) {
          verticeActual = vertice;
          distanciaMinima = distancias[vertice];
        }
      }

      if (verticeActual === null) {
        break;
      }

      visitados.add(verticeActual);

      // Actualiza las distancias de los vértices adyacentes
      for (const vecino in this.aristas[verticeActual]) {
        const peso = this.aristas[verticeActual][vecino];
        const distancia = distancias[verticeActual] + peso;

        if (distancia < distancias[vecino]) {
          distancias[vecino] = distancia;
          previos[vecino] = verticeActual;
        }
      }
    }

    return { distancias, previos };
  }
//Funcion para obtener la ruta mas corta
  obtenerRutaMasCorta(origen, destino) {
    const { distancias, previos } = this.dijkstra(origen);

    if (distancias[destino] === Infinity) {
      return null; // No se encontró una ruta
    }

    const ruta = [destino];
    let vertice = destino;

    while (vertice !== origen) {
      vertice = previos[vertice];
      ruta.unshift(vertice);
    }

    return { distancia: distancias[destino], ruta };
  }
}

// Función para mostrar el menú y realizar las operaciones
function mostrarMenu() {
  let opcion = prompt('--- Menú ---\n1. Agregar vértice\n2. Agregar arista\n3. Encontrar ruta más corta\n4. Salir\n-------------\nIngrese la opción deseada:');
  
  switch (opcion) {
    case '1':
      let vertice = prompt('Ingrese el nombre del vértice:');
      grafo.agregarVertice(vertice);
      alert(`El vértice ${vertice} se agregó correctamente.`);
      mostrarMenu();
      break;
    case '2':
      let origen = prompt('Ingrese el vértice de origen:');
      let destino = prompt('Ingrese el vértice de destino:');
      let peso = parseInt(prompt('Ingrese el peso de la arista:'));
      grafo.agregarArista(origen, destino, peso);
      alert(`La arista entre ${origen} y ${destino} se agregó correctamente.`);
      mostrarMenu();
      break;
    case '3':
      let origenRuta = prompt('Ingrese el vértice de origen:');
      let destinoRuta = prompt('Ingrese el vértice de destino:');
      let rutaMasCorta = grafo.obtenerRutaMasCorta(origenRuta, destinoRuta);
      if (rutaMasCorta) {
        alert(`La distancia más corta entre ${origenRuta} y ${destinoRuta} es ${rutaMasCorta.distancia}.\nRuta: ${rutaMasCorta.ruta.join(' -> ')}`);
      } else {
        alert('No se encontró una ruta entre los vértices especificados.');
      }
      mostrarMenu();
      break;
    case '4':
      alert('Saliendo del programa...');
      break;
    default:
      alert('Opción inválida. Intente nuevamente.');
      mostrarMenu();
      break;
  }
}

// Crear instancia del grafo
const grafo = new Grafo();

// Mostrar el menú
mostrarMenu();