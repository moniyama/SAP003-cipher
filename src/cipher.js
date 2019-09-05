window.cipher = {
  encode: encode,
  decode: decode
};

function encode (offset, message) {
  let arr;          // array dos cod ASCII da mensagem
  let arrCifra = "";     //array com as letras da mensagem cifrada
  for (let letter of message) {
    let letterCode = letter.charCodeAt(0)
    if (letterCode >= 65 && letterCode <= 90) {   // se ASCII é das letras maiusculas
      arr = (65 + ((letterCode - 65 + offset) % 26));
      arrCifra += String.fromCharCode(arr);
    } else {
      if (letterCode >= 97 && letterCode <= 122) {   // se ASCII é das letras minuscula
        arr = ((letterCode - 97 + offset)%26)+97;    // cifrar
        arrCifra += String.fromCharCode(arr);
      } else {
        arrCifra += String.fromCharCode(letterCode);   // a string não sofre alteração
        }
      }
  }
  return arrCifra;
}

function decode (offset, message) {
  let arr;
  let arrCifra = "";
  for (let letter of message) {
    let letterCode = letter.charCodeAt(0)
    if (letterCode >= 65 && letterCode <= 90) {   // se ASCII é das letras maiusculas
      arr = ((letterCode + 65 - offset)%26)+65;    // decifrar
      arrCifra += String.fromCharCode(arr);
    } else {
      if (letterCode >= 97 && letterCode <= 122) {   // se ASCII é das letras minuscula
        arr = ((message.charCodeAt(i) + 111 - offset)%26)+97;    // decifrar
        arrCifra = String.fromCharCode(arr);
      } else {
        arrCifra = String.fromCharCode(letterCode);   // a string não sofre alteração
      }
    }
  }
  return arrCifra;
}
