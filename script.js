const form = document.getElementById("devForm");
const mensagem = document.getElementById("mensagem");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const tecnologias = [
    ...document.querySelectorAll('input[name="tecnologias"]:checked'),
  ].map((input) => input.value);

  if (tecnologias.length === 0) {
    mensagem.textContent = "Selecione pelo menos uma tecnologia";
    mensagem.className = "mensagem erro";
    return;
  }

  mensagem.textContent = "Cadastro concluído com sucesso";
  mensagem.className = "mensagem sucesso";
});
