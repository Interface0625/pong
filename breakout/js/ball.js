var ball = {
    x: 450,
    y: 450,
    width: 30,
    height: 30,
    direction: {
      x: 1,
      y: 1
    },
    speed: 1,
    color: '#F00',
    move: function() {
        this.x = this.x + this.direction.x * this.speed;
        this.y = this.y + this.direction.y * this.speed;
        console.log("ball is moving");
    },

    update: function () {
        this.move();
        if (this.x + this.width > game.canvas.width) {
            this.direction.x *= -1;
        }
        else if (this.x < 0) {
            this.direction.x *= -1;
        }

        if (this.y + this.height > game.canvas.height) {
            this.x = game.canvas.width / 2;
            this.y = game.canvas.height / 2;
            this.speed = 1;

        }
        else if (this.y < 0) {
        this.direction.y *= -1;
            powerUp.startMoving(this.x, this.y)
        }


        // If ball collides with player change direction of ball
        var result = this.intersect(player, this);
        if (result == true) {
            this.direction.y = -1;
            this.speed +=0.5;

        }


        },

    draw:function () {
        game.context.fillStyle=this.color;
        game.context.fillRect(this.x, this.y, this.width, this.height);
    },

    intersect: function (boxA, boxB) {  //colision function
        return (boxA.x + boxA.width > boxB.x &&
        boxA.x < boxB.x + boxB.width &&
        boxA.y + boxA.height > boxB.y &&
        boxA.y < boxB.y + boxB.height);
    }


};

