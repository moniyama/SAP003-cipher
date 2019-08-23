document.getElementById("code").onclick = function btnEncode() {
  event.preventDefault();

  let offset = Number(document.getElementById("offset").value);
  let message = String(document.getElementById("text").value);

  if (offset === 0 || message === "" ) {
    alert("Preencha os campos para prosseguir!");
  } else {
    document.getElementById("result").innerHTML =
    `<p> Envie o Código:</p><textarea disabled id='textResult'>${window.cipher.encode(offset, message)}</textarea>
    <p> Ah, não esqueça de enviar a chave para seu amigo: ${offset} </p>`;
  }
};

document.getElementById("decode").onclick = function btnDecode() {
  event.preventDefault();
  let offset = Number(document.getElementById("offset").value);
  let message = String(document.getElementById("text").value);

  if (offset === 0 || message === "" ) {
    alert("Preencha os campos para prosseguir!");
  } else {
    document.getElementById("result").innerHTML =
    `<p> Mensagem Decifrada: </p><textarea disabled id='textResult'>${window.cipher.decode(offset, message)}</textarea>
    <p> Envie uma mensagem de volta! </p>`;
  }
};
