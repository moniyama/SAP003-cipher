window.cipher = {
  encode: encode,
  decode: decode
};

function encode(offset, message) {
  let arr; 
  let arrCifra = "";
  for (let letter of message) {
    let letterCode = letter.charCodeAt(0);
    if (letterCode >= 65 && letterCode <= 90) {
      arr = 65 + ((letterCode - 65 + offset) % 26);
      arrCifra += String.fromCharCode(arr);
    } else {
      if (letterCode >= 97 && letterCode <= 122) {
        arr = ((letterCode - 97 + offset) % 26) + 97; 
        arrCifra += String.fromCharCode(arr);
      } else {
        arrCifra += String.fromCharCode(letterCode);
      }
    }
  }
  return arrCifra;
}

function decode(offset, message) {
  let arr;
  let arrCifra = "";
  for (let letter of message) {
    let letterCode = letter.charCodeAt(0);
    if (letterCode >= 65 && letterCode <= 90) {
      arr = ((letterCode + 65 - offset) % 26) + 65;
      arrCifra += String.fromCharCode(arr);
    } else {
      if (letterCode >= 97 && letterCode <= 122) {
        arr = ((letterCode + 111 - offset) % 26) + 97;
        arrCifra += String.fromCharCode(arr);
      } else {
        arrCifra += String.fromCharCode(letterCode);
      }
    }
  }
  return arrCifra;
}
