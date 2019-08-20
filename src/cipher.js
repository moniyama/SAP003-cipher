window.cipher = {
    encode: encode,
    decode: decode
}

function encode(){
  let offset = Number(document.getElementById('offset').value);
  let message = String(document.getElementById('text').value);
  let arr = [];          // cod ASCII da mensagem
  let arrCifra = []     //mensagem cifrada transformada em string


    for(let i=0, length = message.length;i<length;i++){
      arr.push(((message.charCodeAt(i) - 65 + offset)%26)+65)
      arrCifra.push(String.fromCharCode(arr[i]))
      }

    document.getElementById('result').innerHTML =
    `<p> Codigo: ${arrCifra.join("")} </p>`

  }

function decode(){
  let offset = Number(document.getElementById('offset').value);
  let message = String(document.getElementById('text').value);
  let arr = [];       // cod ASCII da mensagem
  let arrCifra = []   //mensagem cifrada transformada em string
  let i=0;

  for(let i=0, length = message.length;i<length;i++){
    arr.push(((message.charCodeAt(i) + 65 - offset)%26)+65)
    arrCifra.push(String.fromCharCode(arr[i]))
    }

    document.getElementById('result').innerHTML =
    `<p> Decifrado: ${arrCifra.join("")} </p>`

}
