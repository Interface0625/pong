var evilAi = {  //Ai settings
    x: 500,
    y: 20,
    width: 100,
    height: 20,
    direction: -1,
    speed: 4,
    color: '#0101DF',
    move:function() {
        var deltax = (this.x + this.width / 2) - ball.x; //

        if ( Math.abs(deltax) > this.speed){
            this.x += this.speed * (deltax < 0 ? 1 : -1);
        }else{
            this.x = ball.x - this.width/2;
        }
    },

    update:function() {
        this.move();
        if (this.x+this.width > game.canvas.width) {
            this.direction=-1;
        }
        else if (this.x<0 ) {
            this.direction=1;
        }

    },

    draw:function()  {  //draw function
        game.context.fillStyle=this.color;
        game.context.fillRect(this.x,this.y,this.width,this.height);

    }
};
