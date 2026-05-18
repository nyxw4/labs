let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

ctx.beginPath();        
ctx.fillStyle = 'yellow';
ctx.arc(285, 100, 50, 0*Math.PI, 2*Math.PI);
ctx.fill();
ctx.closePath();
        
ctx.beginPath();
ctx.fillStyle = 'gray';
ctx.fillRect(0, 300, 400, 100);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'brown';
ctx.fillRect(150, 200, 100, 100);
ctx.textAlign = "center";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'pink';
ctx.moveTo(150, 200);
ctx.lineTo(200, 150);
ctx.lineTo(250, 200);
ctx.textAlign = "center";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.fillRect(160, 230, 30, 30);
ctx.textAlign = "center";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.fillRect(210, 230, 30, 30);
ctx.textAlign = "center";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'black';
ctx.fillRect(190, 260, 20, 40);
ctx.textAlign = "center";
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'brown';
ctx.fillRect(60, 240, 20, 60);
ctx.textAlign = "center";
ctx.fill();
ctx.closePath();

ctx.fillStyle = 'green';
ctx.arc(70, 220, 30, 0*Math.PI, 2*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'brown';
ctx.fillRect(350, 310, 20, 60);
ctx.textAlign = "center";
ctx.fill();
ctx.closePath();

ctx.fillStyle = 'green';
ctx.arc(360, 290, 30, 0*Math.PI, 2*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.fillRect(0, 280, 60, 80);
ctx.textAlign = "center";
ctx.fill();
ctx.closePath();

ctx.fillStyle = 'blue';
ctx.arc(0, 280, 60, 0*Math.PI, 2*Math.PI);
ctx.fill();
ctx.closePath();

ctx.beginPath();
ctx.fillStyle = 'blue';
ctx.fillRect(0, 340, 195, 60);
ctx.textAlign = "center";
ctx.fill();
ctx.closePath();

ctx.fillStyle = 'blue';
ctx.arc(200, 380, 40, 0*Math.PI, 2*Math.PI);
ctx.fill();
ctx.closePath();

let tela = document.getElementById("canvas2");
let pincel = tela.getContext("2d");

function quadrado(x, y, lado, cor) {
    pincel.fillStyle = cor;
    pincel.fillRect(x, y, lado, lado);
}

function linha(xInicial, yInicial, xFinal, yFinal, cor, grossura) {
    pincel.beginPath();
    pincel.moveTo(xInicial, yInicial);
    pincel.lineTo(xFinal, yFinal);
    pincel.strokeStyle = cor;
    pincel.lineWidth = grossura;
    pincel.stroke();
}

function arco(x, y, raio, inicio, fim, cor, grossura) {
    pincel.beginPath();
    pincel.arc(x, y, raio, inicio, fim);
    pincel.strokeStyle = cor;
    pincel.lineWidth = grossura;
    pincel.stroke();
}

function texto(frase, x, y, tamanho, cor) {
    pincel.fillStyle = cor;
    pincel.font = tamanho + "px Arial";
    pincel.fillText(frase, x, y);
}

pincel.fillStyle = "white";
pincel.fillRect(0, 0, 300, 300);

texto("Canvas", 115, 50, 20, "black");

quadrado(0, 0, 50, "blue");
quadrado(250, 0, 50, "red");
quadrado(0, 250, 50, "yellow");
quadrado(270, 270, 30, "black");

quadrado(0, 120, 30, "cyan");
quadrado(270, 135, 30, "cyan");

quadrado(110, 150, 40, "red");

linha(50, 50, 150, 150, "blue", 1);
linha(250, 50, 150, 150, "red", 1);
linha(0, 150, 300, 150, "green", 1);
linha(150, 150, 150, 300, "black", 1);

arco(150, 150, 80, Math.PI, 2 * Math.PI, "green", 1);
arco(150, 150, 60, Math.PI, 2 * Math.PI, "green", 1);

arco(150, 300, 80, Math.PI, 2 * Math.PI, "green", 1);
arco(150, 300, 60, Math.PI, 2 * Math.PI, "green", 1);

pincel.beginPath();
pincel.arc(150, 115, 15, 0, 2 * Math.PI);
pincel.fillStyle = "cyan";
pincel.fill();
pincel.strokeStyle = "blue";
pincel.stroke();

pincel.beginPath();
pincel.arc(150, 300, 40, 0, 2 * Math.PI);
pincel.fillStyle = "cyan";
pincel.fill();
pincel.strokeStyle = "green";
pincel.stroke();

pincel.beginPath();
pincel.arc(70, 220, 15, 0, 2 * Math.PI);
pincel.fillStyle = "yellow";
pincel.fill();
pincel.strokeStyle = "green";
pincel.stroke();

pincel.beginPath();
pincel.arc(220, 220, 15, 0, 2 * Math.PI);
pincel.fillStyle = "yellow";
pincel.fill();
pincel.strokeStyle = "green";
pincel.stroke();