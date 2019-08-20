window.cipher = {
    encode: encode,
    decode: decode
}

function encode(offset, message){
  const arr = [];          // array dos cod ASCII da mensagem
  const arrCifra = []     //array com as letras da mensagem cifrada
    for(let i=0, length = message.length;i<length;i++){
      if(message.charCodeAt(i) < 65 || message.charCodeAt(i) > 90){   // se ASCII NÃO está dentro da faixa de 65-90
        arr.push(message.charCodeAt(i))         // coloca na array o mesmo codigo ASCII
        arrCifra.push(String.fromCharCode(arr[i]));   // a string não sofre alteração
      } else{
          arr.push(((message.charCodeAt(i) - 65 + offset)%26)+65)
          arrCifra.push(String.fromCharCode(arr[i]))
          }
    }
      return arrCifra.join("")
  }

function decode(offset, message){
  const arr = [];          // array dos cod ASCII da mensagem
  const arrCifra = []     //array com as letras da mensagem cifrada
    for(let i=0, length = message.length;i<length;i++){
      if(message.charCodeAt(i) < 65 || message.charCodeAt(i) > 90){   // se ASCII NÃO está dentro da faixa de 65-90
        arr.push(message.charCodeAt(i))         // coloca na array o mesmo codigo ASCII
        arrCifra.push(String.fromCharCode(arr[i]));   // a string não sofre alteração
      } else{
        arr.push(((message.charCodeAt(i) + 65 - offset)%26)+65)
      arrCifra.push(String.fromCharCode(arr[i]))
      }
    }
      return arrCifra.join("")
}
