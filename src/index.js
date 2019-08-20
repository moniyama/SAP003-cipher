function btnEncode(){
  offset = Number(document.getElementById('offset').value);
  message = String(document.getElementById('text').value.toUpperCase());

if(offset === 0 || message === "" ){
  alert('Preencha os campos para prosseguir!')
  } else{
    document.getElementById('result').innerHTML =
    `<p> Código: ${window.cipher.encode(offset, message)} </p>`
    }
}

function btnDecode(){
  offset = Number(document.getElementById('offset').value);
  message = String(document.getElementById('text').value.toUpperCase());

  if(offset === 0 || message === "" ){
    alert('Preencha os campos para prosseguir!')
    } else{
      document.getElementById('result').innerHTML =
      `<p> Decifrado: ${window.cipher.decode(offset, message)} </p>`
      }
}
