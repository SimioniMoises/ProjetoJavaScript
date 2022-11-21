/*var titulo = document.querySelector(".titulo");
console.log(titulo);

var bobesponja = document.querySelector(".bobesponja");
console.log(bobesponja);*/

var bobesponjas = document.querySelectorAll(".bobesponja");

for (var i = 0; i < bobesponjas.length; i++) {
  var bobesponja = bobesponjas[i];

  var tdpeso = bobesponja.querySelector(".infopeso");
  var peso = tdpeso.textContent;
  var tdaltura = bobesponja.querySelector(".infoaltura");
  var altura = tdaltura.textContent;

  /////////////////////////////////////////////

  var pesovalido = validapeso(peso);
  var alturavalida = validaaltura(altura);

  /////////////////////////////////////////////

  if (!validapeso) {
    pesovalido = false;
    tdpeso.textContent = "Peso Invalido";
    tdpeso.classList.add("bob-invalido");
  }

  if (!validaaltura) {
    alturavalida = false;
    tdaltura.textContent = "Altura Invalida";
    tdaltura.classList.add("bob-invalido");
  }

  if (pesovalido && alturavalida) {
    var imc = calculaimc(peso,altura);

    var tdimc = bobesponja.querySelector(".infoimc");
    tdimc.textContent = imc;
  }}

  function calculaimc(peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);
  
    return imc.toFixed(2);

}


function validapeso(peso) {

  if (peso>= 30 && peso <1000) {
    return true;
  }

  else
  return false;


}


function validaaltura(altura) {

  if (altura>= 0 && altura <3.00) {
    return true;
  }

  else
  return false;


}

