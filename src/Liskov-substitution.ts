class Rectangle {

  width : number;
  height : number;

  constructor(width, height) {
    this._width = width
    this._height = height
  }

  get width() {
    return this._width
  }
  get height() {
    return this._height
  }

  set width(value) {
    this._width = value
  }
  set height(value) {
    this._height = value
  }

  getArea() {
    return this._width * this._height
  }
}

class SquareWrong extends Rectangle {
  constructor(size) {
    super(size, size)
  }
}

const square = new SquareWrong(2)
square.width = 3

console.log(square.getArea())

class Square extends Rectangle {
  constructor(size) {
    super(size, size)
  }

  set width(value) {
    this._width = this._height = value
  }

  set height(value) {
    this._width = this._height = value
  }
}