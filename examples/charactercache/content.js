import phaser from '../../../phaser/src/phaser.js';
import CharacterCache from '../../plugins/texture/charactercache/CharacterCache.js';

class Demo extends Phaser.Scene {
    constructor() {
        super({
            key: 'examples'
        })
    }

    preload() {
    }

    create() {
        var characterCache = new CharacterCache(this, {
            key: 'test',
            cellWidth: 32, cellHeight: 32,
            maxCharacterCount: 4096,
            textObject: this.make.text({
                add: false,
                style: {
                    align: 'center',
                    fontSize: 32,
                    fixedWidth: 32,
                    fixedHeight: 32,
                    padding: { top: 2 },
                    testString: '回'
                }
            })
        })

        var content = '正嚷間，大聖到了。叫一聲：開路！掣開鐵棒，幌一幌，碗來粗細，丈二長短，丟開架子，打將出來。九曜星那個敢抵，一時打退。那九曜星立住陣勢道：你這不知死活的弼馬溫！你犯了十惡之罪，先偷桃，後偷酒，攪亂了蟠桃大會，又竊了老君仙丹，又將御酒偷來此處享樂，你罪上加罪，豈不知之？大聖笑道：這幾樁事，實有，實有！但如今你怎麼？九曜星道：吾奉玉帝金旨，帥眾到此收降你，快早皈依，免教這些生靈納命。不然，就髹平了此山，掀翻了此洞也！大聖大怒道：量你這些毛神，有何法力，敢出浪言。不要走，請吃老孫一棒！這九曜星一齊踴躍。那美猴王不懼分毫，輪起金箍棒，左遮右擋，把那九曜星戰得筋疲力軟，一個個倒拖器械，敗陣而走，急入中軍帳下，對托塔天王道：那猴王果十分驍勇！我等戰他不過，敗陣來了。李天王即調四大天王與二十八宿，一路出師來鬥。大聖也公然不懼，調出獨腳鬼王、七十二洞妖王與四個健將，就於洞門外列成陣勢。你看這場混戰好驚人也'
        characterCache.load(content + ' ').addToBitmapFont();
        console.log(characterCache.inCacheCount)

        var wordWrapChar = ' '
        var txt = this.add.bitmapText(0, 0, 'test', content.split('').join(wordWrapChar))
            .setMaxWidth(700, wordWrapChar.charCodeAt(0))
    }

    update() {

    }
}

var config = {
    type: Phaser.AUTO,
    scale: {
        parent: 'phaser-example',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 800,
        height: 600,
    },
    scene: Demo,
};

var game = new Phaser.Game(config);