class FileSystemWrong {
  writeToFile(data) {
    // Implementation
  }
}

class ExternalDBWrong {
  writeToDatabase(data) {
    // Implementation
  }
}

class LocalPersistanceWrong {
  push(data) {
    // Implementation
  }
}

class PersistanceManagerWrong {
  saveData(db, data) {
    if (db instanceof FileSystem) {
      db.writeToFile(data)
    }

    if (db instanceof ExternalDB) {
      db.writeToDatabase(data)
    }

    if (db instanceof LocalPersistance) {
      db.push(data)
    }
  }
}

class FileSystem {
  save(data) {
    // Implementation
  }
}

class ExternalDB {
  save(data) {
    // Implementation
  }
}

class LocalPersistance {
  save(data) {
    // Implementation
  }
}

class PersistanceManager {
  saveData(db, data) {
    db.save(data)
  }
}