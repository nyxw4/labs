let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");

let gato = {
    x: 120,
    y: 120,
    raio: 30,
    img: new Image(),

    desenha: function() {
        this.img.src = "../png/gato.png";

        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, 2 * this.raio, 2 * this.raio);
        ctx.closePath();
    }
};

function animacao() {
    ctx.clearRect(0, 0, 300, 300);
    gato.desenha();
    requestAnimationFrame(animacao);
}

animacao();

document.addEventListener("mousemove", function(evento) {
    let rect = canvas.getBoundingClientRect();

    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;

    console.log(x_mouse, y_mouse);

    gato.x = x_mouse - gato.raio;
    gato.y = y_mouse - gato.raio;

    gato.x = Math.max(0, Math.min(gato.x, 300 - 2 * gato.raio));
    gato.y = Math.max(0, Math.min(gato.y, 300 - 2 * gato.raio));
});