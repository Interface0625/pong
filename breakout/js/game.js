var game = {
    canvas: null,
    context: null,

    draw: function (timestamp) {
        game.context.clearRect(0, 0, game.canvas.width, game.canvas.height);
        game.context.fillStyle = '#eee';
        ball.draw(timestamp);
        player.draw(timestamp);
        powerUp.draw(timestamp);
    },

    update: function (timestamp) {

        player.update(timestamp);

        ball.update(timestamp);

        powerUp.update(timestamp);
    },

    init: function () {
        game.init2d();

        Keyboard.init();

        game.loop(0);
    },

    init2d: function () {
        game.canvas = document.querySelector('#myCanvas');
        game.canvas.width = 1280;
        game.canvas.height = 720;

        game.context = game.canvas.getContext('2d');
    },

    loop: function (timestamp) {
        window.requestAnimationFrame(game.loop);
        game.update(timestamp);
        game.draw(timestamp);
    }

};


