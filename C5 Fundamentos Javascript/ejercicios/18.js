function esVocal(letra) {
  // La función recibe un argumento llamado letra el cual es un string.
  // Retorna como resultado un string que indica si el argumento letra es una vocal.
  // de lo contrario retorna el string "Dato incorrecto"
  // Por ejemplo: 
  // "a" ---> "Es vocal"
  // "u" ---> "Es vocal"
  // "n" ---> "Dato incorrecto"
  // "texto largo" ---> "Dato incorrecto"
  // Tu código:
  if (letra.length !== 1) {
    return "Dato incorrecto";
  }

  
  
}
console.log(esVocal("a"));
console.log(esVocal("u"));
console.log(esVocal("n"));
console.log(esVocal("texto largo"));
module.exports = esVocal;
