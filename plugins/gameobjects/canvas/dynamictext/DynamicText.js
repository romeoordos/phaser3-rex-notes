import Canvas from '../canvas/Canvas.js';
import Background from './bob/Background.js';
import TextStyle from './TextStyle.js';
import DrawContent from './DrawContent.js';
import PaddingMethods from './PaddingMethods.js';
import TextMethods from './TextMethods.js';

const IsPlainObject = Phaser.Utils.Objects.IsPlainObject;
const GetValue = Phaser.Utils.Objects.GetValue;

class DynamicText extends Canvas {
    constructor(scene, x, y, fixedWidth, fixedHeight, config) {
        if (IsPlainObject(x)) {
            config = x;
            x = GetValue(config, 'x', 0);
            y = GetValue(config, 'y', 0);
            fixedWidth = GetValue(config, 'width', 0);
            fixedHeight = GetValue(config, 'height', 0);
        } else if (IsPlainObject(width)) {
            config = width;
            fixedWidth = GetValue(config, 'width', 0);
            fixedHeight = GetValue(config, 'height', 0);
        }

        var width = (fixedWidth === 0) ? 1 : fixedWidth;
        var height = (fixedHeight === 0) ? 1 : fixedHeight;
        super(scene, x, y, width, height);
        this.type = 'rexDynamicCanvasText';
        this.autoRound = true;
        this.padding = {};
        this.background = new Background(this, GetValue(config, 'background', undefined));
        this.children = [];
        this.textStyle = new TextStyle(config);

        this.setFixedSize(fixedWidth, fixedHeight);
        this.setPadding(
            GetValue(config, 'padding', 0)
        );

        this.setText(GetValue(config, 'text', ''));
    }

    setFixedSize(width, height) {
        this.fixedWidth = width;
        this.fixedHeight = height;

        if ((width > 0) && (height > 0)) {
            this.setSize(width, height);
        }

        return this;
    }

    updateTexture() {
        this.clear();
        DrawContent.call(this);
        super.updateTexture();
        return this;
    }
}

Object.assign(
    DynamicText.prototype,
    PaddingMethods,
    TextMethods
);


export default DynamicText;