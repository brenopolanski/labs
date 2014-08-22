function PlayState() {
	var player,
		goal;

	this.setup = function() {
		player = new jaws.Sprite({ color: 'red', x: 20, y: 20, width: 20, height: 20 });
		goal   = new jaws.Sprite({ color: 'blur', x: 80, y: 80, width: 20, height: 20 });
	};

	this.update = function() {
		player.setColor('red');

		if (jaws.pressed('up')) {
			player.y -= 4;
		}

		if (jaws.pressed('left')) {
			player.x -= 4;
		}

		if (jaws.pressed('down')) {
			player.y += 4;
		}

		if (jaws.pressed('right')) {
			player.x += 4;
		}

		if (jaws.pressed('up')) {
			player.y -= 4;
		}

		if (jaws.collideOneWithOne(player, goal)) {
			player.setColor('blue');
		}
	};

	this.draw = function() {
		jaws.clear();
		player.draw();
		goal.draw();
	};
}

jaws.onload = function() {
	jaws.start(PlayState);
};