//Movimento do carro. Observe que de início, colocam-se os valores numéricos de x e y dentro da função. Depois, gera-se a variável xCarro com o valor numérico, e a variável yCarro com o valor numérico.
//Na aula 4, gerou-se a functionvoltaposiçãoinicial, com parametros de fim de percurso com -30, grantindo-se a passagrm do carro pela pista inteira.
//Na aula 5, Otimização por geração de listas por meio de colchetes [].Lembrando que o o argumento 0 corresponde ao endereço 1, ou seja, [0] se refere ao carro1. Assim, de mesma forma, o argumento [1] se refere ao endereço do carro2. Por fim argumento [2] endereça ao carro3. Portanto os argumentos de posição dos carrinhos passam de yCarro para yCarros[0], yCarros[1] e yCarros[2]. De mesma forma, otimizam-se os códigos de velocidades, gerando uma única variável com lista [], propiciando excluir a váriavel let velocidade para cada carro. Para tal, alteram-se os argumentos na function movimentaCarro, a velocidadeCarro é alterada para velocidadesCarros[0], para, a velocidadeCarro2 é alterada para velocidadesCarros[1] e, por fim, a velocidadeCarro3 é alterada para velocidadesCarros[2]. De mesma forma,procede-se para a variável let xCarro passa a Xcarros[0], Xcarro2 para xCarros[1] e xCarro3 para xCarros[2]. Alterando todas as funções.
//Na aula 6, na pasta imagens.js, gerou-se listas para imagens. Let imageCarros[]. Também foi utilizada a função repetição for na function mostraCarro. Utilizaram-se os parametros i de inicial e length que verifica o total de carrinhos no programa. Também foi utilizado a função return, que responde a uma função em cadeia no lugar do argumento de outra função. como no caso da function passouTodaTela(xCarros).

let yCarros = [40, 95, 150];
let velocidadeCarros = [2.8, 3.2, 2.5];
let xCarros = [550, 550, 550];

function mostraCarro(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){ 
    image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
}}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){ xCarros[i] -= velocidadeCarros[i];
  }}

function voltaPosiçãoInicial(){
  for (let i = 0; i < imagemCarros.length; i = i + 1)
  if (passouTodaTela(xCarros[i])){
    xCarros[i] = displayWidth;
  }
}

function passouTodaTela(xCarros){
  return xCarros < -50;
}

//function voltaPosiçãoInicial(){
  //if (xCarros[0] < -50){
    //xCarros[0] = 550;}
  //if (xCarros[1] < -50){
    //xCarros[1] = 540;}
  //if (xCarros[2] < -50){
    //xCarros[2] = 505;}}
