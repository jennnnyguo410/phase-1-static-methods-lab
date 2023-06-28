class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^\w\s'-]/g, '')
  }

  static titleize(string) {
    let ignore = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let result = []
    let arryOfWords = string.split(" ")

    for (let i = 0; i < arryOfWords.length; i++) {
      if (i == 0) {
        result.push(this.capitalize(arryOfWords[i]))
      }
      else {
        if (ignore.includes(arryOfWords[i])) {
          result.push(arryOfWords[i])
        } else {
          result.push(this.capitalize(arryOfWords[i]))
        }
      }
    }
    return result.join(" ")
  }

}