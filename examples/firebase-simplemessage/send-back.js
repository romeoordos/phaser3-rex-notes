import FirebasePlugin from '../../plugins/firebase-plugin.js';
import firebaseConfig from './firebaseConfig.js';

class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })
    }

    preload() { }

    create() {
        var print = this.add.text(0, 0, '');

        var rexFire = this.plugins.get('rexFire').initializeApp(firebaseConfig);

        var simpleMode = true;
        var messagerName = (simpleMode) ? 'simpleMessage' : 'stackMessage';
        var messager = rexFire.add[messagerName]({
            root: 'simple-message',

            senderID: 'aabb',
            senderName: 'rex'
        });


        messager
            .send('aabb', '1')  // This message won't be received if simpleMode is true
            .then(function () {
                return messager.send('aabb', '2');
                // This message won't be received if simpleMode is true
            })
            .then(function () {
                return messager.send('aabb', '3');
                // This message won't be received if simpleMode is true
            })
            .then(function () {
                messager
                    .on('receive', function (d) {
                        print.text += `${d.senderName}: ${d.message}\n`;
                    })
                    .startReceiving()

                return Promise.resolve();
            })
            .then(function () {
                return messager.send('aabb', 'hello');
            })
            .then(function () {
                return messager.send('aabb', 'hello');
            })
            .then(function () {
                return messager.send('aabb', 'world');
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    update() { }
}

var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
    },
    scene: Demo,
    plugins: {
        global: [{
            key: 'rexFire',
            plugin: FirePlugin,
            start: true
        }]
    }
};

var game = new Phaser.Game(config);