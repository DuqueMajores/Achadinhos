
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("produtoForm").addEventListener("submit", async function (e) {
    e.preventDefault();

    let nome = document.getElementById("nome").value;
    let preco = document.getElementById("preco").value;
    let descricao = document.getElementById("descricao").value;
    let link = document.getElementById("link").value;
    let imagem = document.getElementById("imagem").value;
    let plataforma = document.getElementById("plataforma").value;

    if (!plataforma) {
      alert("Selecione uma plataforma!");
      return;
    }

    console.log("Enviando dados para Firebase:", { nome, preco, descricao, link, imagem, plataforma });

    try {
      await db.collection(plataforma).add({ nome, preco, descricao, link, imagem });
      alert("Produto adicionado com sucesso!");
      console.log("Produto salvo com sucesso no Firebase.");
    } catch (error) {
      console.error("Erro ao adicionar produto:", error);
      alert("Erro ao salvar produto. Verifique o console.");
    }
  });
});