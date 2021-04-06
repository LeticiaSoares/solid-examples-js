// Modules should be open for extension but closed for modification
class Coder {

  fullName : string
  language : string
  hobby : string
  education : string
  workplace : string
  position : string

  constructor(fullName, language, hobby, education, workplace, position) {
    this.fullName = fullName
    this.language = language
    this.hobby = hobby
    this.education = education
    this.workplace = workplace
    this.position = position
  }
}

class CoderFilterWrong {
  filterByName(coders, fullName) {
    return coders.filter(coder => coder.fullName === fullName)
  }

  filterBySize(coders, language) {
    return coders.filter(coder => coder.language === language)
  }

  filterByHobby(coders, hobby) {
    return coders.filter(coder => coder.hobby === hobby)
  }
}

class CoderFilter {
  filterByProp = (array, propName, value) =>
    array.filter(element => element[propName] === value)
}