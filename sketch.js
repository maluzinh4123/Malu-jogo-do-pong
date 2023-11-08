//variáveis da bolilha
let xBolinha = 100; 
let yBolinha = 200;
let diametro  = 20;
let raio = diametro/2;

//variáveis da velocidade
let velocidadexBolinha = 5;
let velocidadeyBolinha = 5;

// variáveis da raquete 
let xRaquete = 5;
let yRaquete =150;
let Raquetecomprimento = 10;
let Raquetealtura = 90;

// variaveis do oponente 
let xraqueteoponente= 585;
let yraqueteoponente= 150;


function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(0);
  Mostrabolilha();
 Movimentarbolilha();
 Verificacolisaoborda();
  mostrarRaquete(xRaquete, yRaquete);
  movimentarminhaRaquete();
  verificacolisaoRaquete(xRaquete, yRaquete);
  
  function mostrabolinha(){
 circle(xBolinha, yBolinha , diametro);
}    
  
 function movimentabolilha(){
  xBolinha += velocidadexbolilha;
  ybolilha += velociadeybolilha;
}
  
 function verificacolisaoborda(){
 if (xbolilha + raio > width//
     xbolilha - raio < 0){
    velocidadexbolilha *=-1
 }
if (ybolilha + raio height//
    ybolilha - raio 0){
  velocidadeybolilha *=-1;
 }
}
  
  function mostraRaquete(){
   rect ( xRaquete, yRaquete,raquetecomprimento, raqueteAltura ) 
   
   
   
   
   
   
   
   
   
   