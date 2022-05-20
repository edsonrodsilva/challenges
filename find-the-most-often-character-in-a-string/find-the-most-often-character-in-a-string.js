/* Challenge find the most often character in a string */
/* Exemple: ("hello world") = "l" bacause "l" appears most 3x */

function getMaxCharacter(sentence) {
  //remove space in string
  sentence = sentence.replaceAll(" ", "");

  //convert string in array de caracters
  const chars = sentence.split("");

  //Inicializer array with first char
  let maxChar = [chars[0], 1];

  for (let char of chars) {

    //count the number of times char appers in the list    
    let count = 0;
    for (const currentChar of chars) {
      if (currentChar === char) {
        count++
      }
    }

    // compare that with maxChat variable if this is greater
    if (count > maxChar[1]) {

      //then update maxChar with this current Char
      maxChar = [char, count];
    }
  }
  
  //return character in position 0
  return maxChar[0];
}

console.log(getMaxCharacter("hello world"));