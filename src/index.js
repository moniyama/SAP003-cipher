const offset = document.getElementById("offset");
const message = document.getElementById("text");

document.getElementById("code").addEventListener("click", btnEncode)
document.getElementById("decode").addEventListener("click", btnDecode)

function btnEncode() {
  event.preventDefault();
  validation();
  document.getElementById("result").innerHTML =
  `<p> Envie o Código:</p><textarea disabled id='textResult'>${window.cipher.encode(+offset.value, message.value)}</textarea>
  <p> Ah, não esqueça de enviar a chave para seu amigo: ${offset.value} </p>`;
}

function btnDecode() {
  event.preventDefault();
  validation();
  document.getElementById("result").innerHTML =
  `<p> Mensagem Decifrada: </p><textarea disabled id='textResult'>${window.cipher.decode(+offset.value, message.value)}</textarea>
  <p> Envie uma mensagem de volta! </p>`;
};

function validation () {
  if (+offset.value === 0 || message.value === "" ) {
    alert("Preencha os campos para prosseguir!");
  }
}
