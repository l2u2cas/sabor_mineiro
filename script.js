const titulo = document.createElement("h1");
const body = document.querySelector("body");
const produto = document.createElement("section");

titulo.id = "titulo";
titulo.innerText = "Laticinios Sabor mineiro";

body.appendChild(titulo);

produto.innerHTML = `
  <section>
    <h2>Queijo minas</h2>
    <img src="https://ibassets.com.br/ib.item.image.big/b-fba6777efecd4b4398b68a6c42ae3b80.png" alt="queijo minas">
    <strong><p>O queijo minas frescal encontra-se entre os queijos mais consumidos no Brasil. Apresenta massa crua, coloração esbranquiçada, consistência mole e textura fechada. O preço varia em torno de: </p><strong/>
    <p> R$ 20.90 kg</p>
  </section>
`


body.appendChild(produto)









