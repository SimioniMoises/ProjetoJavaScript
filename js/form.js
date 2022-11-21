var btnadicionar = document.querySelector("#adicionar-integrante");
btnadicionar.addEventListener("click", function (event) {
  event.preventDefault();

  var form = document.querySelector("#form-adiciona");
  var integrante = guardaintegranteimc(form);
  console.log(integrante);
  var integrantetr = montaTr(integrante);
  if (!validaintegrante(integrante))  {
  console.log("Não passou no teste de validação")
  return;
   
  }
  var table = document.querySelector("#bodyintegrer");
  table.appendChild(integrantetr);
  form.reset();
});

function guardaintegranteimc (form) {

  var integrante = {

    nome: form.nome.value,
    peso: form.peso.value,
    altura: form.altura.value,
    gordura: form.gordura.value,
    imc: calculaimc(form.peso.value,form.altura.value)

  }

  return integrante;
}

function montaTr (integrante) {


  var integrantetr = document.createElement("tr");
  integrantetr.classList.add("integrante");

  integrantetr.appendChild(montaTd(integrante.nome,"info-nome"));
  integrantetr.appendChild(montaTd(integrante.peso,"infopeso"));
  integrantetr.appendChild(montaTd(integrante.altura,"infoaltura"));
  integrantetr.appendChild(montaTd(integrante.gordura,"info-gordura"));
  integrantetr.appendChild(montaTd(integrante.imc,"infoimc"));


  return integrantetr;

}


function montaTd(elemento,classe) {


  var td = document.createElement("td");
  td.textContent = elemento;
  td.classList.add(classe);

  return td;


}


function validaintegrante(integrante) {


  if ((validapeso(integrante.peso)) && (validaaltura(integrante.altura))) {
    return true;


  }


}