//imagens do jogo

let imagemDaEstrada;
let imagemDoAtor;
let imagemCarro;
let imagemCarro2;
let imagemCarro3;

function preload(){
  imagemDaEstrada = loadImage("imagens/estrada.png");
  imagemDoAtor = loadImage("imagens/ator1.png");
  imagemCarro = loadImage("imagens/carro1.png");
  imagemCarro2 = loadImage("imagens/carro2.png");
  imagemCarro3 = loadImage("imagens/carro3.png");
  imagemCarros = [imagemCarro, imagemCarro2, imagemCarro3];
}