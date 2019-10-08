var loadState = {
    preload: function () {
        // dodaj 'loading...' oznaka na ekranot dodeka se vlecat izvorite
        // moze i da bide nezabelezitelna
        var pricekajLabela = game.add.text(game.world.centerX, 300, 'Причекајте...',
                                           { font: '40px Arial', fill: '#ffffff' });
        pricekajLabela.anchor.setTo(0.5, 0.5);

        // prikazi go barot za progress 
        var progress = game.add.sprite(game.world.centerX, 400, 'progress');
        progress.anchor.setTo(0.5, 0.5);
        game.load.setPreloadSprite(progress);

        // izvleci gi site potrebni resursi za igrata
        // level 1 platform
        game.load.tilemap('map1','resursi/maps/map1.json',null,Phaser.Tilemap.TILED_JSON);
        game.load.image('sheet1','resursi/maps/sheet1.png');
        game.load.image('bg-img','resursi/maps/bg-img.png');
        game.load.image('enemy_fruit','resursi/maps/enemy_fruit.png');  
        game.load.image('spike-sheet','resursi/maps/spike-sheet.png'); 
        game.load.image('apple','resursi/maps/apple.png');
        // level 2 platform
        game.load.tilemap('Mapa2','resursi/maps/map2.json',null,Phaser.Tilemap.TILED_JSON);
        game.load.image('krusa','resursi/maps/krusa.png');
        game.load.image('sheet2','resursi/maps/sheet2.png');
        // level 3 assets
        game.load.tilemap('mapa3','resursi/maps/map3.json',null,Phaser.Tilemap.TILED_JSON);
        game.load.image('sheet3','resursi/maps/sheet3.png');
        game.load.image('banana','resursi/maps/banana.png');
        
        game.load.spritesheet('igrac', 'resursi/igrac/spritesheet.png',98,110);
        game.load.image('neprijatel', 'resursi/neprijatel.png');
        game.load.image('zivot','resursi//igrac/zivot.png');
        game.load.image('puka','resursi/igrac/shoot.png');
        game.load.image('strelki','resursi/strelki.png');
        game.load.image('wasd','resursi/wasd.png');
        game.load.image('enter','resursi/enter.png');
        game.load.image('space','resursi/space.png');
        game.load.image('bg','resursi/pozadina.png');
        game.load.audio('skoka', ['resursi/audio/skoka.ogg', 'resursi/audio/skoka.mp3']);
        game.load.audio('zema', ['resursi/audio/zemaOvosje.ogg', 'resursi/audio/zemaOvosje.mp3']);
        game.load.audio('mrtovNeprijatel', ['resursi/audio/mrtovNeprijatel.ogg', 'resursi/audio/mrtovNeprijatel.mp3']);
        game.load.audio('mrtovIgrac', ['resursi/audio/mrtovIgrac.ogg', 'resursi/audio/mrtovIgrac.mp3']);

    },
    create: function() {
        // startuvaj sledna sostojba
        game.state.start('menu');
    }
};
