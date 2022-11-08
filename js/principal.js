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

  var pesovalido = true;
  var alturavalida = true;

  /////////////////////////////////////////////

  if (peso <= 0 || peso >= 340) {
    pesovalido = false;
    tdpeso.textContent = "Peso Invalido";
    tdpeso.classList.add("bob-invalido");
  }

  if (altura <= 0 || altura >= 2.4) {
    alturavalida = false;
    tdaltura.textContent = "Altura Invalida";
    tdaltura.classList.add("bob-invalido");
  }

  if (pesovalido && alturavalida) {
    var imc = peso / (altura * altura);

    var tdimc = bobesponja.querySelector(".infoimc");
    tdimc.textContent = imc.toFixed(2);
  }
}
