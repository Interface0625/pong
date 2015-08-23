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
        // Setup Canvas:
        game.canvas = document.querySelector('#myCanvas');
        game.canvas.width = 1280;
        game.canvas.height = 720;

        // Setup renderer
        game.renderer = new THREE.WebGLRenderer({canvas: game.canvas});
        game.renderer.setSize( game.canvas.width, game.canvas.height );
        //document.body.appendChild( renderer.domElement );

        // Setup scene:
        game.scene = new THREE.Scene();

        // Boxes for player, evilAi and ball.
        game.cube = new THREE.Mesh(
            new THREE.BoxGeometry( 1, 1, 1 ),
            new THREE.MeshBasicMaterial( { color: 0x00ff00 } ) );
        game.scene.add( game.cube );    //  < ---  Pun. Funny... Should have a station where u can play.
                                        // No worries... Ill probably cross of a box before that

        // Camera.
        game.camera = new THREE.PerspectiveCamera(
            75,
            game.canvas.width / game.canvas.height ,
            0.1,
            1000 );

        game.camera.position.z = 5;

        // Lights.

        // Over ride the game loop
        game.loop = function(timestamp){
            window.requestAnimationFrame(game.loop);
            game.update(timestamp);

            game.cube.rotation.x += 0.1;
            game.cube.rotation.y += 0.1;

            game.renderer.render(game.scene, game.camera);
        };
    },

    loop: function (timestamp) {
        window.requestAnimationFrame(game.loop);
        game.update(timestamp);
        game.draw(timestamp);
    }

};
