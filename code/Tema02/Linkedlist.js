// Define la clase Nodo
class Nodo {
  constructor(_data) {
    this.data = _data
    this.next = null
  }
}

// Define la clase LinkedList
class LinkedList {
  constructor() {
    this.head = null
  }

  // Inserta un nodo al final de la lista
  insertNode(_data) {
    const newNode = new Nodo(_data)

    if (!this.head) {
      this.head = newNode
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = newNode
    }
  }

   // Busca un nodo al final de la lista
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

   // Elimina un nodo al final de la lista
   deleteNode(value) {
    if (this.head.data === value) {
      this.head = this.head.next
      return true
    }
    let current = this.head
    while (current.next) {
      if (current.next.data === value) {
        current.next = current.next.next
        return true
      }
      current = current.next
    }

    return false
}
  // Busca la cabeza de la lista
  findHead() {
    if (this.head !== null) {
      return this.head.data;
    }
    return null;
  }
  

  // Muestra todos los element de la lista
  display() {
    let current = this.head
    let element = ""

    while (current) {
      element += current.data + " -> "
      current = current.next
    }

    element += "null"
    alert("element de la lista enlazada:\n" + element)
  }
}

// Define el menú
function menu() {
  const lista = new LinkedList()

  while (true) {
    const opcion = prompt(
      "Selecciona una opción:\n" +
      "1. Insertar  elemento en la lista\n" +
      "2. Buscar  elemento en la lista\n" +
      "3. Eliminar  elemento en la lista\n" +
      "4. Buscar cabeza de la lista\n" +
      "5. Mostrar elementos de la lista\n"+
      "6. Salir"
    )

    switch (opcion) {
      case "1":
        const data = prompt("Ingresa el dato a registrar a la lista:")
        lista.insertNode(data)
        break
      case "2":
        const dataFind = prompt("Ingresa el dato a buscar en la lista:")
        const resultFind = lista.findNode(dataFind)
        alert("Resultado de la busqueda: " + resultFind)
        break
      case "3":
        const dataDelete = prompt("Ingresa el dato a eliminar en la lista:")
        const resultDelete = lista.deleteNode(dataDelete)
        alert("Resultado de la eliminación: " + resultDelete)
        break
      case "4":
        const resultHead = lista.findHead()
        alert("Resultado de la busqueda de cabeza de la lista: " + resultHead)
          break 
      case "5":
        lista.display()
        break 
      case "6":
        window.close()
        return
      default:
        alert("Opción inválida. Intenta nuevamente.")
        break
    }
  }
}

// Ejecuta el menú
menu()



