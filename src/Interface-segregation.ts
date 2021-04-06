interface Phone {
  call(number : Number) : void
  takePhoto() : void
  connectToWifi() : void
}

class IPhone implements Phone {
  call(number) {
    // Implementation
  }

  takePhoto() {
    // Implementation
  }

  connectToWifi() {
    // Implementation
  }
}


class Nokia3310 implements Phone {
  call(number) {
    // Implementation
  }

  takePhoto() {
    // Argh, I don't have a camera
  }

  connectToWifi() {
    // Argh, I don't know what wifi is
  }
}