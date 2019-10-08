var congratsState = {
    create: function() {
        this.game.world.setBounds(0, 0, this.game.width, this.game.height);
        game.add.image(0, 0, 'bg');
        var naslov = game.add.text(game.world.centerX , -50, 'Честитки, успешно ја завршивте играта',
                                   { font: '50px Arial', fill: '#ffffff' });      
        naslov.anchor.setTo(0.5, 0.5);      
        game.add.tween(naslov).to({y:100},1000).easing(Phaser.Easing.Bounce.Out).start();

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
        //text.anchor.setTo(0.5, 0.5);
        game.add.text(game.world.centerX, 280, game.global.krusi,
            { font: '50px Arial', fill: 'rgb(220, 226, 35)' });
        //text.anchor.setTo(0.5, 0.5);
        game.add.text(game.world.centerX, 360, game.global.banani,
            { font: '50px Arial', fill: 'rgb(250, 219, 61)' });
        //text.anchor.setTo(0.5, 0.5);


        // game.add.emitter(x,y,brojNaElementi);
        emitter = game.add.emitter(game.world.centerX, 100,50);
        emitter.makeParticles('apple');
        emitter.setXSpeed(-200, 200);
        emitter.setYSpeed(-200, 200);
        emitter.gravity = 100;
        emitter.start(true, 10000, null, 30);

        emitter = game.add.emitter(game.world.centerX, 100,50);
        emitter.makeParticles('krusa');
        emitter.setXSpeed(-200, 200);
        emitter.setYSpeed(-200, 200);
        emitter.gravity = 100;
        emitter.start(true, 10000, null, 30);

        emitter = game.add.emitter(game.world.centerX, 100,50);
        emitter.makeParticles('banana');
        emitter.setXSpeed(-200, 200);
        emitter.setYSpeed(-200, 200);
        emitter.gravity = 100;
        emitter.start(true, 10000, null, 30);

        /*  burst/explode mod e aktiviran(site elementi emitirani na ednas)
          zivoten vek od10 sekundi
          tretiot  parametar se ignorira koga se koristi burst/explode mod
          posleden parametar- broj na elementi emitirani */

        var startuvaj = game.add.text(game.world.centerX, game.world.centerY + 60,
                                      'Започнете одново со Enter или клик',
                                      { font: '25px Arial', fill: '#ffffff' });
        startuvaj.anchor.setTo(0.5, 0.5);    
        game.add.tween(startuvaj).to({angle: -2}, 500).to({angle: 2}, 500).loop().start();


        var key = game.input.keyboard.addKey(Phaser.Keyboard.ENTER);
        key.onDown.addOnce(this.start, this);
        game.input.onDown.add(this.start,this);


    },
    start: function() {
        // Startuvaj ja igrata
        game.state.start('level1');
    }
};
