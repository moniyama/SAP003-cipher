window.cipher = {
  encode: encode,
  decode: decode
};

function encode (offset, message) {
  const arr = [];          // array dos cod ASCII da mensagem
  const arrCifra = [];     //array com as letras da mensagem cifrada
  for (let i=0, length = message.length;i<length;i++) {
    if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {   // se ASCII é das letras maiusculas
      arr.push(((message.charCodeAt(i) - 65 + offset)%26)+65);    // cifrar
      arrCifra.push(String.fromCharCode(arr[i]));
    } else{
      if (message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122) {   // se ASCII é das letras minuscula
        arr.push(((message.charCodeAt(i) - 97 + offset)%26)+97);    // cifrar
        arrCifra.push(String.fromCharCode(arr[i]));
      } else {
        arr.push(message.charCodeAt(i));         // coloca na array o mesmo codigo ASCII
        arrCifra.push(String.fromCharCode(arr[i]));   // a string não sofre alteração
      }
    }
  }
  return arrCifra.join("");
}

function decode (offset, message) {
  const arr = [];          // array dos cod ASCII da mensagem
  const arrCifra = [];    //array com as letras da mensagem cifrada
  for (let i=0, length = message.length;i<length;i++) {
    if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {   // se ASCII é das letras maiusculas
      arr.push(((message.charCodeAt(i) + 65 - offset)%26)+65);    // decifrar
      arrCifra.push(String.fromCharCode(arr[i]));
    } else{
      if (message.charCodeAt(i) >= 97 && message.charCodeAt(i) <= 122) {   // se ASCII é das letras minuscula
        arr.push(((message.charCodeAt(i) + 111 - offset)%26)+97);    // decifrar
        arrCifra.push(String.fromCharCode(arr[i]));
      } else {
        arr.push(message.charCodeAt(i));         // coloca na array o mesmo codigo ASCII
        arrCifra.push(String.fromCharCode(arr[i]));   // a string não sofre alteração
      }
    }
  }
  console.log(arr);
  return arrCifra.join("");
}
