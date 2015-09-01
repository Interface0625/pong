var powerUp = {
    x: 0,
    y: 0,
    width: 50,
    height: 30,
    direction: {
        x: 0,
        y: 1
    },
    speed: 1,
    color: '#0000FF',
    visible: false,


    startMoving: function (x, y) {
        this.x = x;
        this.y = y;
        console.log("Power up Bitches");
        this.visible = true;

    },
    move: function () {
        this.x = this.x + this.direction.x * this.speed;
        this.y = this.y + this.direction.y * this.speed;
    },

    update: function () {

        if (this.visible) {

            this.move();
        }
        if (this.intersect(player, this)) {
            console.log("You got the power!!");
            this.visible = false;
            this.y = 0;


        }

        else if (this.y > game.canvas.height) {
            console.log("you missed it you loser");
            this.visible = false;
            this.y = 0;
        }

    },


    draw: function() {  //Draw function

        if (this.visible) {
            game.context.fillStyle=this.color;
            game.context.fillRect(this.x, this.y, this.width, this.height);
        }
    },


    intersect: function (boxA, boxB) {  //colision function
        return (boxA.x + boxA.width > boxB.x &&
        boxA.x < boxB.x + boxB.width &&
        boxA.y + boxA.height > boxB.y &&
        boxA.y < boxB.y + boxB.height);
    }

};