
var Keyboard = {  //keyboard controlls
    keysDown: {},
    init: function() {
        document.addEventListener("keydown", function (e) {
            Keyboard.keysDown[e.keyCode] = true;
        }, false);
        document.addEventListener("keyup", function (e) {
            Keyboard.keysDown[e.keyCode] = false;
        }, false);
    }
};
