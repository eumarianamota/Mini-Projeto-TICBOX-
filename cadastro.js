document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("formulario");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const dados = {
      nome: document.getElementById("nome").value,
      telefone: document.getElementById("telefone").value,
      email: document.getElementById("email").value
    };

    localStorage.setItem("dadosFormulario", JSON.stringify(dados));
    console.log("Dados salvos no localStorage!");

    form.reset();
  });
});