snakeRoam = () => {
    switch (cube.frame) {
        case 0:
            if (snake.pos.X < -cube.size.X/2 - 1) {
                snake.speed.X = 0.0;snake.speed.Z = snake.Speed;
                cube.frame = 2; return;
            }
            if (snake.pos.X > cube.size.X/2 + 1) {
                snake.speed.X = 0.0;snake.speed.Z = snake.Speed;
                cube.frame = 3; return;
            }
            if (snake.pos.Y > cube.size.Y/2 + 1) {
                snake.speed.Y = 0.0;snake.speed.Z = snake.Speed;
                cube.frame = 4; return;
            }
            if (snake.pos.Y < -cube.size.Y/2 - 1) {
                snake.speed.Y = 0.0;snake.speed.Z = snake.Speed;
                cube.frame = 5; return;
            }
            break;
        case 1:
            if (snake.pos.X < -cube.size.X/2 - 1) {
                snake.speed.X = 0.0;snake.speed.Z = -snake.Speed;
                cube.frame = 2; return;
            }
            if (snake.pos.X > cube.size.X/2 + 1) {
                snake.speed.X = 0.0;snake.speed.Z = -snake.Speed;
                cube.frame = 3; return;
            }
            if (snake.pos.Y > cube.size.Y/2 + 1) {
                snake.speed.Y = 0.0;snake.speed.Z = -snake.Speed;
                cube.frame = 4; return;
            }
            if (snake.pos.Y < -cube.size.Y/2 - 1) {
                snake.speed.Y = 0.0;snake.speed.Z = -snake.Speed;
                cube.frame = 5; return;
            }
            break;
        case 2:
            if (snake.pos.Z < -cube.size.Z/2 - 1) {
                snake.speed.Z = 0.0;snake.speed.X = snake.Speed;
                cube.frame = 0; return;
            }
            if (snake.pos.Z > cube.size.Z/2 + 1) {
                snake.speed.Z = 0.0;snake.speed.X = snake.Speed;
                cube.frame = 1; return;
            }
            if (snake.pos.Y > cube.size.Y/2 + 1) {
                snake.speed.Y = 0.0;snake.speed.X = snake.Speed;
                cube.frame = 4; return;
            }
            if (snake.pos.Y < -cube.size.Y/2 - 1) {
                snake.speed.Y = 0.0;snake.speed.X = snake.Speed;
                cube.frame = 5; return;
            }
            break;
        case 3:
            if (snake.pos.Z < -cube.size.Z/2 - 1) {
                snake.speed.Z = 0.0;snake.speed.X = -snake.Speed;
                cube.frame = 0; return;
            }
            if (snake.pos.Z > cube.size.Z/2 + 1) {
                snake.speed.Z = 0.0;snake.speed.X = -snake.Speed;
                cube.frame = 1; return;
            }
            if (snake.pos.Y > cube.size.Y/2 + 1) {
                snake.speed.Y = 0.0;snake.speed.X = -snake.Speed;
                cube.frame = 4; return;
            }
            if (snake.pos.Y < -cube.size.Y/2 - 1) {
                snake.speed.Y = 0.0;snake.speed.X = -snake.Speed;
                cube.frame = 5; return;
            }
            break;
        case 4:
            if (snake.pos.Z < -cube.size.Z/2 - 1) {
                snake.speed.Z = 0.0;snake.speed.Y = -snake.Speed;
                cube.frame = 0; return;
            }
            if (snake.pos.Z > cube.size.Z/2 + 1) {
                snake.speed.Z = 0.0;snake.speed.Y = -snake.Speed;
                cube.frame = 1; return;
            }
            if (snake.pos.X < -cube.size.X/2 - 1) {
                snake.speed.X = 0.0;snake.speed.Y = -snake.Speed;
                cube.frame = 2; return;
            }
            if (snake.pos.X > cube.size.X/2 + 1) {
                snake.speed.X = 0.0;snake.speed.Y = -snake.Speed;
                cube.frame = 3; return;
            }
            break;
        case 5:
            if (snake.pos.Z < -cube.size.Z/2 - 1) {
                snake.speed.Z = 0.0;snake.speed.Y = snake.Speed;
                cube.frame = 0; return;
            }
            if (snake.pos.Z > cube.size.Z/2 + 1) {
                snake.speed.Z = 0.0;snake.speed.Y = snake.Speed;
                cube.frame = 1; return;
            }
            if (snake.pos.X < -cube.size.X/2 - 1) {
                snake.speed.X = 0.0;snake.speed.Y = snake.Speed;
                cube.frame = 2; return;
            }
            if (snake.pos.X > cube.size.X/2 + 1) {
                snake.speed.X = 0.0;snake.speed.Y = snake.Speed;
                cube.frame = 3; return;
            }
            break;
    }
}

class Snake {
    constructor() {
        this.paused = false;
        this.Speed = 0.3;
        this.pos = new Vector3(16, 16, -21);
        this.speed = new Vector3(-0.3, 0, 0);
        this.alive = true;
    }
    renderFace = () => {
        translate(-this.pos.X, -this.pos.Y, -this.pos.Z);
        fill(0, 0, 0);
        box(2.2);
        translate(this.pos.X, this.pos.Y,this.pos.Z);
    }
    changePos = () => {
        this.pos.X += this.speed.X;
        this.pos.Y += this.speed.Y;
        this.pos.Z += this.speed.Z;
        snakeRoam();
    }
    pause = () => {
        if (!this.alive)
            return
        this.paused ? this.paused = false : this.paused = true;
        if (this.paused) document.getElementById("demo").style = "filter:blur(10px)";
        else document.getElementById("demo").style = "filter:blur(0px)";
    }
}