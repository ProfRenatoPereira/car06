//Passo a passo
//Na aula 04 será programada arepetição do movimento dos carrinhos.

function setup() {
  createCanvas(displayWidth, 400);
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentaAtor();
  voltaPosiçãoInicial();
}
