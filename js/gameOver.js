var gameOverState = {
    create: function () {
        this.game.world.setBounds(0, 0, this.game.width, this.game.height);
        game.add.image(0, 0, 'bg');
        var text = game.add.text(game.world.centerX, 100, 'Крај на играта',
            { font: '70px Arial', fill: '#ffffff' });
        text.anchor.setTo(0.5, 0.5);


        var jabolka = game.add.sprite(game.world.centerX - 80, 200, 'apple');
        var krusa = game.add.sprite(game.world.centerX - 80, 280, 'krusa');
        var banana = game.add.sprite(game.world.centerX - 80, 360, 'banana');
        jabolka.height *= 2;
        jabolka.width *= 2;
        krusa.height *= 2;
        krusa.width *= 2;
        banana.height *= 2;
        banana.width *= 2;
        game.add.text(game.world.centerX, 210, game.global.jabolki,
            { font: '50px Arial', fill: 'rgb(237, 0, 0)' });
        text.anchor.setTo(0.5, 0.5);
        game.add.text(game.world.centerX, 280, game.global.krusi,
            { font: '50px Arial', fill: 'rgb(220, 226, 35)' });
        text.anchor.setTo(0.5, 0.5);
        game.add.text(game.world.centerX, 360, game.global.banani,
            { font: '50px Arial', fill: 'rgb(250, 219, 61)' });
        text.anchor.setTo(0.5, 0.5);

        var startuvaj = game.add.text(game.world.centerX, game.world.centerY + 60,
            'Започнете одново со Enter или клик',
            { font: '25px Arial', fill: '#ffffff' });
        startuvaj.anchor.setTo(0.5, 0.5);
        game.add.tween(startuvaj).to({ angle: -2 }, 500).to({ angle: 2 }, 500).loop().start();

        var key = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        key.onDown.addOnce(this.start, this);
        game.input.onDown.add(this.start, this);

    },
    start: function () {
        game.global.brojZivoti = 5;
        zivoti.length = 0;
        // Startuvaj ja igrata
        game.state.start('level1');
    }
};
