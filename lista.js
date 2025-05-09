    const dadosJSON = localStorage.getItem("dadosFormulario");

    if (dadosJSON) {
      const dados = JSON.parse(dadosJSON);

      const infoDiv = document.getElementById("infoUsuario");
      infoDiv.innerHTML = `
        <p><strong>Nome:</strong> ${dados.nome}</p>
        <p><strong>Telefone:</strong> ${dados.telefone}</p>
        <p><strong>Email:</strong> ${dados.email}</p>
        <p><strong>Descrição:</strong> ${dados.descricao}</p>
        <p><strong>Avaliação:</strong> ${dados.avaliacao}</p>
      `;

      document.getElementById("btnContato").addEventListener("click", function () {
        document.getElementById("whats").textContent = dados.telefone;
        document.getElementById("email").textContent = dados.email;
        document.getElementById("contato").style.display = "block";
      });
    } else {
      document.body.innerHTML += "<p>Nenhum usuário encontrado no localStorage.</p>";
      document.getElementById("btnContato").style.display = "none";
    }