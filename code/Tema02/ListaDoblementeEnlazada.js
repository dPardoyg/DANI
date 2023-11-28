// Define la clase nodo
class Nodo {
  constructor(_data) {
      this.data = _data;
      this.next = null;
      this.prev = null;
  }
}

// Define la clase LinkedList
class LinkedList {
  constructor() {
      this.head = null;
      this.tail = null;
  }

  // Inserta un nodo al final de la lista
  insertNodeAtEnd(_data) {
      const newNode = new Nodo(_data);

      if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
      } else {
          newNode.prev = this.tail;
          this.tail.next = newNode;
          this.tail = newNode;
      }
  }

  // Inserta un nodo al inicio de la lista
  insertNodeAtStart(_data) {
      const newNode = new Nodo(_data);

      if (!this.head) {
          this.head = newNode;
          this.tail = newNode;
      } else {
          newNode.next = this.head;
          this.head.prev = newNode;
          this.head = newNode;
      }
  }

  // Busca un nodo en la lista
  findNode(_data) {
      let current = this.head;
      while (current) {
          if (current.data === _data) {
              return true;
          }
          current = current.next;
      }
      return false;
  }

  // Elimina un nodo al inicio de la lista
  deleteNodeAtStart() {
      if (!this.head) {
          return false;
      }

      if (this.head === this.tail) {
          this.head = null;
          this.tail = null;
      } else {
          this.head = this.head.next;
          this.head.prev = null;
      }

      return true;
  }

  // Elimina un nodo al final de la lista
  deleteNodeAtEnd() {
      if (!this.tail) {
          return false;
      }

      if (this.head === this.tail) {
          this.head = null;
          this.tail = null;
      } else {
          this.tail = this.tail.prev;
          this.tail.next = null;
      }

      return true;
  }

  // Busca la cabeza de la lista
  findHead() {
      if (this.head !== null) {
          return this.head.data;
      }
      return null;
  }

  // Muestra todos los elementos de la lista
  display() {
      let current = this.head;
      let element = "";

      while (current) {
          element += current.data + " <-> ";
          current = current.next;
      }

      element += "null";
      alert("Elementos de la lista doblemente enlazada:\n" + element);
  }
}

// Define el menú
function menu() {
  const lista = new LinkedList();

  while (true) {
      const opcion = prompt(
          "Selecciona una opción:\n" +
          "1. Insertar elemento al final de la lista\n" +
          "2. Insertar elemento al inicio de la lista\n" +
          "3. Buscar elemento en la lista\n" +
          "4. Eliminar elemento al inicio de la lista\n" +
          "5. Eliminar elemento al final de la lista\n" +
          "6. Buscar cabeza de la lista\n" +
          "7. Mostrar elementos de la lista\n" +
          "8. Salir"
      );

      switch (opcion) {
          case "1":
              const dataEnd = prompt("Ingresa el dato a registrar al final de la lista");
              lista.insertNodeAtEnd(dataEnd);
              break;
          case "2":
              const dataStart = prompt("Ingresa el dato a registrar al inicio de la lista");
              lista.insertNodeAtStart(dataStart);
              break;
          case "3":
              const dataFind = prompt("Ingresa el dato a buscar en la lista");
              const resultFind = lista.findNode(dataFind);
              alert("El resultado de la búsqueda: " + resultFind);
              break;
          case "4":
              const resultDeleteStart = lista.deleteNodeAtStart();
              alert("Resultado de la eliminación al inicio: " + resultDeleteStart);
              break;
          case "5":
              const resultDeleteEnd = lista.deleteNodeAtEnd();
              alert("Resultado de la eliminación al final: " + resultDeleteEnd);
              break;
          case "6":
              const resultHead = lista.findHead();
              alert("Resultado de la cabeza de la lista: " + resultHead);
              break;
          case "7":
              lista.display();
              break;
          case "8":
              return;
          default:
              alert("Opción inválida. Intente nuevamente.");
      }
  }
}
menu()