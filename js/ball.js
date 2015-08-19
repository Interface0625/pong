var ball = {               //Ball settings
    x: 450,
    y: 450,
    width: 30,
    height: 30,
    direction: {
        x: 0,
        y: 1
    },
    speed: 1,
    color: '#F00',
    move: function(){
        this.x = this.x + this.direction.x * this.speed;
        this.y = this.y + this.direction.y * this.speed;
    },

    resetBall: function() {
        this.x = game.canvas.width / 2;
        this.y = game.canvas.height / 2;
        var tmpdirection = {x:0,y:1};
        var maxrotation = 80*2;
        Vector2.rotate(tmpdirection,maxrotation/2-Math.random()*maxrotation);
        this.direction = tmpdirection;
        this.speed = 1;
    },
    update: function() {
        this.move();

        // If ball reaches sides of the canvas it changes direction:
        if (this.x + this.width > game.canvas.width) {
            this.direction.x *= -1;
        }
        else if (this.x < 0) {
            this.direction.x *= -1;
        }

        if (this.y + this.height > game.canvas.height) {
            this.resetBall();
            game.score.enemy++;
            document.body.querySelector("#enemyScore").innerHTML = game.score.enemy.toString();
            console.log('Enemy score is:', game.score.enemy);
        }
        // If ball reaches top player scores
        else if (this.y < 0) {
            this.resetBall();
            game.score.player++;
            document.body.querySelector("#playerScore").innerHTML = game.score.enemy.toString();

            console.log('Player score is: ', game.score.player);
        }

        // If ball collides with player change direction of ball
        var result = this.intersect(player, this);
        if (result == true) {
            this.direction.y = -1;
            this.speed +=0.5;

        }
        result = this.intersect(evilAi, this);
        // if ball collides with ai ball change direction
        if (result == true) {
            this.direction.y = 1;
            this.speed +=0.5;


        }
    },


    draw:function() {  //Draw function
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