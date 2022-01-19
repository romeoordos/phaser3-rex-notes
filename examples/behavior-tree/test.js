import 'phaser';
import BehaviorTreePlugin from '../../plugins/behaviortree-plugin.js';
import ClockPlugin from '../../plugins/clock-plugin.js';

class PrintAction extends RexPlugins.BehaviorTree.Action {
    constructor({ text = '' } = {}) {
        super({
            name: 'MyAction',
            properties: { text: text },
        });

        this.textExpression = this.addStringVariable(text);
    }

    tick(tick) {
        console.log(`Tick - Print: ${this.textExpression.eval(tick.blackboardContext)}`);
        return this.SUCCESS;
    }
}

class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })
    }

    preload() { }

    create() {
        var btAdd = this.plugins.get('rexBT').add;
        var tree = btAdd.behaviorTree()
            .setRoot(
                btAdd.repeat({
                    maxLoop: 3,
                    child: btAdd.selector({
                        children: [
                            btAdd.cooldown({
                                duration: 1000,
                                child: btAdd.sequence({
                                    children: [
                                        new PrintAction({ text: 'B0.Start : {{$currentTime}}' }),
                                        btAdd.wait({ duration: 500 }),
                                        new PrintAction({ text: 'B0.End : {{$currentTime}}' }),
                                    ]
                                })
                            }),
                            btAdd.sequence({
                                children: [
                                    new PrintAction({ text: 'B1.Start : {{$currentTime}}' }),
                                    btAdd.wait({ duration: 1000 }),
                                    new PrintAction({ text: 'B1.End : {{$currentTime}}' }),
                                ]
                            }),
                        ]
                    })
                })

            )

        // var result = tree.dump();
        // var nodes = tree.getNodes();
        // debugger

        var blackboard = btAdd.blackboard()
            .set('name', 'rex')
            .set('i', 20);

        var clock = this.plugins.get('rexClock').add(this);
        clock
            .on('update', function (time, delta) {
                blackboard.setCurrentTime(time);
                var state = tree.tick(blackboard);
                console.log(`Run tick ${state}`);

                // Stop ticking
                if (state !== 3) {
                    clock.stop();
                }
            })
            .start()
            .tick(0);
    }

    update() {
    }
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
        global: [
            {
                key: 'rexBT',
                plugin: BehaviorTreePlugin,
                start: true
            },
            {
                key: 'rexClock',
                plugin: ClockPlugin,
                start: true
            }
        ]
    }
};

var game = new Phaser.Game(config);