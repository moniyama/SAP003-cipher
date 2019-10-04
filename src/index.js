const nav = document.querySelectorAll(".menu");
for (let li of nav) {
  li.addEventListener("click", showSection) 
}

const sections = document.querySelectorAll(".seção")
function showSection () {
  hideSection();
  const menuEscolhido = document.getElementById(this.dataset.target)
  menuEscolhido.style.display = "block";
}
function hideSection() {
  for (let aba of sections) {
    aba.style.display = "none"; 
  }
}

const buttons = document.querySelectorAll(".my-btn");
for (let btn of buttons) {
  btn.addEventListener("click", decide);
}

const offset = document.getElementById("offset");
const message = document.getElementById("text");

function decide() {
  displayWarning();
  
  const resultado = document.getElementById("result");
  const id = this.id;
  if (id == "code") {
    resultado.innerHTML =
    `<p> Envie o Código:</p><textarea disabled id='textResult'>${window.cipher.encode(+offset.value, message.value)}</textarea>
    <p> Não esqueça do número da chave: ${offset.value} </p>`;
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