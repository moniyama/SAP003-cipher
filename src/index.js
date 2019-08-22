function btnEncode() {
  let offset = Number(document.getElementById("offset").value);
  let message = String(document.getElementById("text").value);

  if (offset === 0 || message === "" ) {
    alert("Preencha os campos para prosseguir!");
  } else {
    document.getElementById("result").innerHTML =
    `<p> Envie o Código:</p><p = id='textResult'> ${window.cipher.encode(offset, message)} </p>`;
  }
}

function btnDecode() {
  let offset = Number(document.getElementById("offset").value);
  let message = String(document.getElementById("text").value);

  if (offset === 0 || message === "" ) {
    alert("Preencha os campos para prosseguir!");
  } else {
    document.getElementById("result").innerHTML =
    `<p> Mensagem Decifrada: </p><p = id='textResult'> ${window.cipher.decode(offset, message)} </p>`;
  }
}
