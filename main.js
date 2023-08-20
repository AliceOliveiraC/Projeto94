const { fabric } = require("./fabric");

var canvas = new fabric.Canvas('myCanvas');

var ball_y = 0;
var ball_x = 0;
var hole_y = 400;
var hole_x = 800;

var block_image_width = 5;
var block_image_height = 5;

var ball_obj;  // Defina a variável ball_obj
var hole_obj;  // Defina a variável hole_obj

function load_img() {
    fabric.Image.fromURL("golf-b.png", function (img) {
        hole_obj = img;
        hole_obj.scaleToWidth(50);
        hole_obj.scaleToHeight(50);
        hole_obj.set({
            top: hole_y,
            left: hole_x
        });
        canvas.add(hole_obj);
    });
    new_image();
}

function new_image() {
    fabric.Image.fromURL("bola.png", function (img) {
        ball_obj = img;
        ball_obj.scaleToWidth(50);
        ball_obj.scaleToHeight(50);
        ball_obj.set({
            top: ball_y,
            left: ball_x
        });
        canvas.add(ball_obj);  // Use ball_obj aqui
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    if ((ball_x == hole_x) && (ball_y == hole_y)) {
        canvas.remove(ball_obj);
    }

    var keyPressed = e.keyCode;
    console.log(keyPressed);
    document.getElementById("hd3").innerHTML = "Você acertou o buraco!";
    document.getElementById("myCanvas").style.borderColor = "red";

    if (keyPressed == 38) {
        up();
        console.log("cima");
    }
    if (keyPressed == 40) {
        down();
        console.log("baixo");
    }
    if (keyPressed == 37) {
        left();
        console.log("esquerda");
    }
    if (keyPressed == 39) {
        right();
        console.log("direita");
    }
}

function up() {
    if (ball_y > 0) {
        ball_y = ball_y - block_image_height;  // Corrigir movimento para cima
        console.log("altura do bloco da imagem = " + block_image_height);
        console.log("Quando seta para cima é pressionada X = " + ball_x + ",y = " + ball_y);
    }
}

function down() {
    if (ball_y <= 450) {
        ball_y = ball_y + block_image_height;
        console.log("altura do bloco da imagem = " + block_image_height);
        console.log("Quando seta para baixo é pressionada X = " + ball_x + ",y = " + ball_y);
    }
}

function left() {
    if (ball_x > 5) {
        ball_x = ball_x - block_image_width;  // Corrigir movimento para a esquerda
        console.log("largura do bloco da imagem = " + block_image_width);
        console.log("Quando seta para esquerda é pressionada X = " + ball_x + ",y = " + ball_y);
    }
}

function right() {
    if (ball_x <= 1050) {
        ball_x = ball_x + block_image_width;
        console.log("largura do bloco da imagem = " + block_image_width);
        console.log("Quando seta para direita é pressionada X = " + ball_x + ",y = " + ball_y);
    }
}
