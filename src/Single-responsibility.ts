class TodoListWrong {
  
  items : Array<string>

  constructor() {
    this.items = []
  }

  addItem(text) {
    this.items.push(text)
  }

  removeItem(index) {
    this.items = this.items.splice(index, 1)
  }

  toString() {
    return this.items.toString()
  }
  //THIS CASE IS WRONG BECAUSE THE CLASS TODOLIST 
  // HAVE MORE THEN ONE RESPONSIBILITY: CRUD todo and save 
  save(filename) {
    fs.writeFileSync(filename, this.toString())
  }

  load(filename) {
    // Some implementation
  }
}

//Now we have to diferents classes 
class TodoList {

  items : Array<string>

  constructor() {
    this.items = []
  }

  addItem(text) {
    this.items.push(text)
  }

  removeItem(index) {
    this.items = this.items.splice(index, 1)
  }

  toString() {
    return this.items.toString()
  }
}

class DatabaseManager {
  saveToFile(data, filename) {
    // Some implementation
  }

  loadFromFile(filename) {
    // Some implementation
  }
}

