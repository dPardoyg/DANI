//Funcion para crear un grafo
class Grafo {
  constructor() {
    this.vertices = {};
  }

  agregarVertice(vertice) {
    if (!this.vertices[vertice]) {
      this.vertices[vertice] = [];
    }
  }

  agregarArista(vertice1, vertice2, peso) {
    if (!this.vertices[vertice1] || !this.vertices[vertice2]) {
      throw new Error('Los vértices especificados no existen en el grafo.');
    }

    this.vertices[vertice1].push({ vertice: vertice2, peso });
    this.vertices[vertice2].push({ vertice: vertice1, peso });
  }

  encontrarRutaMasCorta(verticeInicio, verticeFin) {
    const distancias = {};
    const visitados = {};
    const anteriores = {};
    const cola = [];

    for (let vertice in this.vertices) {
      if (vertice === verticeInicio) {
        distancias[vertice] = 0;
      } else {
        distancias[vertice] = Infinity;
      }

      visitados[vertice] = false;
      anteriores[vertice] = null;
      cola.push(vertice);
    }

    while (cola.length > 0) {
      let verticeActual = this.obtenerVerticeMenorDistancia(distancias, visitados, cola);
      visitados[verticeActual] = true;

      for (let vecino of this.vertices[verticeActual]) {
        let distancia = distancias[verticeActual] + vecino.peso;

        if (distancia < distancias[vecino.vertice]) {
          distancias[vecino.vertice] = distancia;
          anteriores[vecino.vertice] = verticeActual;
        }
      }
    }

    let ruta = [];
    let verticeActual = verticeFin;

    while (verticeActual !== verticeInicio) {
      ruta.unshift(verticeActual);
      verticeActual = anteriores[verticeActual];
    }

    ruta.unshift(verticeInicio);

    return ruta;
  }

  obtenerVerticeMenorDistancia(distancias, visitados, cola) {
    let minDistancia = Infinity;
    let verticeMinDistancia = null;

    for (let vertice of cola) {
      if (distancias[vertice] < minDistancia && !visitados[vertice]) {
        minDistancia = distancias[vertice];
        verticeMinDistancia = vertice;
      }
    }

    return verticeMinDistancia;
  }
}


// Función para mostrar el menú y ejecutar las funcionalidades
function mostrarMenu() {
  const grafo = new Grafo();

  while (true) {
    const opcion = prompt(`¿Qué acción deseas realizar?.
     1. Agregar vértice 
     2. Agregar arista
     3. Encontrar ruta más corta
     4. Salir`);

    switch (opcion) {
      case '1':
        const vertice = prompt('Ingrese el nombre del vértice:');
        grafo.agregarVertice(vertice);
        alert(`Vértice ${vertice} agregado correctamente.`);
        break;
      case '2':
        const vertice1 = prompt('Ingrese el nombre del primer vértice:');
        const vertice2 = prompt('Ingrese el nombre del segundo vértice:');
        const peso = parseFloat(prompt('Ingrese el peso de la arista:'));

        try {
          grafo.agregarArista(vertice1, vertice2, peso);
          alert(`Arista entre ${vertice1} y ${vertice2} agregada correctamente con peso ${peso}.`);
        } catch (error) {
          alert(error.message);
        }

        break;
      case '3':
        const inicio = prompt('Ingrese el vértice de inicio:');
        const fin = prompt('Ingrese el vértice de fin:');

        try {
          const rutaMasCorta = grafo.encontrarRutaMasCorta(inicio, fin);
          alert(`La ruta más corta entre ${inicio} y ${fin} es: ${rutaMasCorta.join(' -> ')}`);
        } catch (error) {
          alert(error.message);
        }

        break;
      case '4':
        return;
      default:
        alert('Opción inválida. Por favor, intenta nuevamente.');
        break;
    }
  }
}


    // Ejecutar el menú
    mostrarMenu();