var canvas = new fabric.Canvas('myCanvas');

block_image_width = 30;
block_image_height = 30;

player_x = 10;
player_y = 10;

var player_object = "";

function player_update() {
    fabric.Image.fromURL("player.png", function(Img) {
        player_object = Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
    });
}

function new_image(get_image) {
    fabric.Image.fromURL(get_image, function(Img) {
        block_image_object = Img;
        block_image_object.scaleToWidth(block_image_width);
        block_image_object.scaleToHeight(block_image_height);
        block_image_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_image_object);
    });
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
    keyPressed = e.keyCode;
    console.log(keyPressed);
    if (e.shiftKey == true && keyPressed == '66') {
        console.log("Shift and B pressed together: Make block bigger");
        block_image_width = block_image_width + 10;
        block_image_height = block_image_height + 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (e.shiftKey && keyPressed == '83') {
        console.log("Shift and S pressed together: Make block smaller");
        block_image_width = block_image_width - 10;
        block_image_height = block_image_height - 10;
        document.getElementById("current_width").innerHTML = block_image_width;
        document.getElementById("current_height").innerHTML = block_image_height;
    }
    if (keyPressed == '38') {
        up();
        console.log("Up arrow pressed: Move up");
    }
    if (keyPressed == '40') {
        down();
        console.log("Down arrow pressed: Move down");
    }
    if (keyPressed == '37') {
        left();
        console.log("Left arrow pressed: Move left");
    }
    if (keyPressed == '39') {
        right();
        console.log("Right arrow pressed: Move right");
    }
    if (keyPressed == '87') {
        new_image("wall.jpg");
        console.log("W key pressed: Build brown brick wall");
    }
    if (keyPressed == '71') {
        new_image("ground.png");
        console.log("G key pressed: Build ground block");
    }
    if (keyPressed == '76') {
        new_image("light_green.png");
        console.log("L key pressed: Build light green grass");
    }
    if (keyPressed == '84') {
        new_image("trunk.jpg");
        console.log("T key pressed: Build wood trunk");
    }
    if (keyPressed == '82') {
        new_image("roof.jpg");
        console.log("R key pressed: Build roof ");
    }
    if (keyPressed == '89') {
        new_image("yellow_wall.png");
        console.log("Y key pressed: Build yellow brick wall");
    }
    if (keyPressed == '68') {
        new_image("dark_green.png");
        console.log("D key pressed: Build drak green grass");
    }
    if (keyPressed == '85') {
        new_image("wall.jpg");
        console.log("W key pressed: Build brown brick wall");
    }
    if (keyPressed == '85') {
        new_image("unique.png");
        console.log("U key pressed: Build Unique glowing block");
    }
    if (keyPressed == '67') {
        new_image("cloud.jpg");
        console.log("C key pressed: Build cloud");
    }
    if (keyPressed == '08') {
        new_image("white.jpg");
        console.log("Backspace key pressed: Clear block");
    }
}

function up() {
    if (player_y >= 0) {
        player_y = player_y - block_image_height;
        console.log("Block Image Height = " + block_image_height);
        console.log("When up arrow key pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function down() {
    if (player_y <= 500) {
        player_y = player_y + block_image_height;
        console.log("Block Image Height = " + block_image_height);
        console.log("When down arrow key pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function left() {
    if (player_x >= 0) {
        player_x = player_x - block_image_width;
        console.log("Block Image Width = " + block_image_width);
        console.log("When left arrow key pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}

function right() {
    if (player_x <= 850) {
        player_x = player_x + block_image_width;
        console.log("Block Image Width = " + block_image_width);
        console.log("When right arrow key pressed, X = " + player_x + ", Y = " + player_y);
        canvas.remove(player_object);
        player_update();
    }
}