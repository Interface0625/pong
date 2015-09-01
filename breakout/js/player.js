var player = {
    x: 500,
    y: 700,
    width: 100,
    height: 20,
    direction: 1,
    speed: 10,
    color: '#00FF40',

    update:function() {
        if(Keyboard.keysDown[37]) {
            this.x=this.x -this.speed;
        }
        if(Keyboard.keysDown[39]) {
            this.x=this.x +this.speed;
        }

        if (this.x+this.width > game.canvas.width) {
            this.x = game.canvas.width - this.width;
        }
        else if (this.x<0 ) {
            this.x = 0 ;

        }
    },

    draw:function() {  //Draw function
        game.context.fillStyle=this.color;
        game.context.fillRect(this.x,this.y,this.width,this.height);
    }
};