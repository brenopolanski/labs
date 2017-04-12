var snake; 
var apple; 
var squareSize; 
var score;
var speed;
var updateDelay; 
var direction;
var new_direction;
var addNew;
var cursors; 
var scoreTextValue; 
var speedTextValue; 
var textStyle_Key;
var textStyle_Value;

var Game = {
    preload: function() {
        // Here we load all the needed resources for the level.
        // In our case, that's just two squares - one for the snake body and one for the apple.
        game.load.image('snake', './assets/images/snake.png');
        game.load.image('apple', './assets/images/apple.png');
    },

    create: function() {},

    update: function() {},

    generateApple: function() {}
};
