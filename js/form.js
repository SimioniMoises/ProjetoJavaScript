var btnadicionar = document.querySelector("#adicionar-integrante");
btnadicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");

  var nome = form.nome.value;
  var peso = form.peso.value;
  var altura = form.altura.value;
  var gordura = form.gordura.value;

  var integrantetr = document.createElement("tr");
  var nometd = document.createElement("td");
  var pesotd = document.createElement("td");
  var alturatd = document.createElement("td");
  var gorduratd = document.createElement("td");
  var imctd = document.createElement("td");

  nometd.textContent = nome;
  pesotd.textContent = peso;
  alturatd.textContent = altura;
  gorduratd.textContent = gordura;

  integrantetr.appendChild(nometd);
  integrantetr.appendChild(pesotd);
  integrantetr.appendChild(alturatd);
  integrantetr.appendChild(gorduratd);

  var table = document.querySelector("#bodyintegrer");
  table.appendChild(integrantetr);
});
