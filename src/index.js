const offset = document.getElementById("offset");
const message = document.getElementById("text");
const resultado = document.getElementById("result");
const buttons = document.querySelectorAll(".my-btn");

for (let btn of buttons) {
  btn.addEventListener("click", decide);
}

function decide() {
  displayWarning();
  let id = this.id;
  if (id == "code") {
    resultado.innerHTML =
      `<p> Envie o Código:</p><textarea disabled id='textResult'>${window.cipher.encode(+offset.value, message.value)}</textarea>
    <p> Ah, não esqueça de enviar a chave para seu amigo: ${offset.value} </p>`;
  } else {
    resultado.innerHTML =
      `<p> Mensagem Decifrada: </p><textarea disabled id='textResult'>${window.cipher.decode(+offset.value, message.value)}</textarea>
    <p> Envie uma mensagem de volta! </p>`;
  }
}

function displayWarning(event) {
  if (+offset.value === 0 || message.value === "") {
    alert("Preencha os campos para prosseguir!");
    event.preventDefault();
  }
}