var game = {

    canvas: null,
    context: null,
    score: {
        enemy: 0,
        player: 0
    },
    draw: function (timestamp) {
        game.context.clearRect(0, 0, game.canvas.width, game.canvas.height);
        game.context.fillStyle = '#eee';
        ball.draw(timestamp); //ze ball
        player.draw(timestamp); //la player
        evilAi.draw(timestamp); //la evul ai

    },

    update: function (timestamp) {
        //Player
        player.update(timestamp);

        //Evil AI
        evilAi.update(timestamp);
        //balls!
        ball.update(timestamp);


    },

    init: function () {  //Canvas properties
        game.init2d();

        Keyboard.init();

        game.loop(0);
    },

    init2d: function(){
        game.canvas = document.querySelector('#myCanvas');
        game.canvas.width = 1280;
        game.canvas.height = 720;

        game.context = game.canvas.getContext('2d');  //2d functions enabled
    },
    init3d: function(){

    },

    loop: function (timestamp) {
        window.requestAnimationFrame(game.loop);
        game.update(timestamp);
        game.draw(timestamp);
    }

};
