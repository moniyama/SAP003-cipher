window.cipher = {
    encode: encode,
    decode: decode
}

function encode(){
  let offset = Number(document.getElementById('offset').value);
  let message = String(document.getElementById('text').value);
  let length = message.length;
  let arr = []; // cod ASCII da mensagem
  let arrCifra = [] //mensagem cifrada transformada em string
  let i=0;

    do{
      arr.push(((message.charCodeAt(i) - 65 + offset)%26)+65)
      arrCifra.push(String.fromCharCode(arr[i]))
      i++}
    while(i<length);

    console.log(arrCifra.join(""))
  }

function decode(){
  let offset = Number(document.getElementById('offset').value);
  let message = String(document.getElementById('text').value);
  let length = message.length;
  let arr = []; // cod ASCII da mensagem
  let arrCifra = [] //mensagem cifrada transformada em string
  let i=0;

    do{
      arr.push(((message.charCodeAt(i) - 65 - offset)%26)+65)
      arrCifra.push(String.fromCharCode(arr[i]))
      i++}
    while(i<length);

    console.log(arrCifra.join(""))
}
