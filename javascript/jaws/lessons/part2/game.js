function PlayState() {
	var player,
		goalList,
		field;

	this.setup = function() {
		player = new jaws.Sprite({ color: 'red', x: 30, y: 30, width: 20, height: 20 });
		player.speed = 4;
		player.dx = 0;
		player.dy = 0;

		player.move = function() {
			player.x += player.dx;
			player.y += player.dy;

			if (player.x < 0) {
				player.x = 0;
			}

			// player.x = 480 : jaws.width = 500 - player.width = 20
			if (player.x > (jaws.width - player.width)) {
				player.x = jaws.width - player.width;
			}

			if (player.y < 0) {
				player.y = 0;
			}

			// player.y = 480 : jaws.height = 500 - player.height = 20
			if (player.y > (jaws.height - player.height)) {
				player.y = jaws.height - player.height;
			}

			player.dx = 0;
			player.dy = 0;
		};
	};

	this.update = function() {
        if (jaws.pressed('up')) {
            player.dy -= player.speed;
        }

        if (jaws.pressed('left')) {
            player.dx -= player.speed;
        }

        if (jaws.pressed('down')) {
        	player.dy += player.speed;
        }

        if (jaws.pressed('right')) {
            player.dx += player.speed;
        }

        player.move();
	};

	this.draw = function() {
		jaws.clear();
		player.draw();
	};
}

jaws.onload = function() {
	jaws.start(PlayState)
};